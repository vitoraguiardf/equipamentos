import 'bootstrap';

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     wsHost: import.meta.env.VITE_PUSHER_HOST ?? `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });

/** Interceptação de Requisições */
window.axios.interceptors.request.use(
    request => {
        // console.log("Request Interceptado:", request)
        if (request.method.equals == 'post') request.headers['Content-Type'] = 'multipart/form-data';
        if (!(request.url.endsWith('/api/auth/login'))) {
            let access_token = document.cookie.split(';').find(cookie => {return cookie.trim().startsWith('access_token=')});
            let jwt_access_token = access_token == null ? null : access_token.trim().split('=')[1];
            request.headers.Authorization = 'Bearer ' + jwt_access_token;
        }
        request.headers.Accept = 'application/json'
        return request
    },
    error => {
        return error
    }
);

/** Interceptação de Respostas */
window.axios.interceptors.response.use(
    response => {
        // console.log("Response Interceptado:", response)
        return response
    },
    error => {
        let status = error.response.status;
        let message = error.response.data.message;
        let url = error.response.request.responseURL;
        // console.log(status, message, url)
        if (status == 401) {
            if (message.startsWith('Unauthenticated') && (!url.endsWith('api/auth/refresh'))) {
                window.axios.post('/api/auth/refresh').then(response => {
                    document.cookie = 'access_token=' + response.data.data.access_token;
                    // console.log(response.data.access_token)
                    jwt_access_token = response.data.access_token;
                    window.location.reload();
                })
            }
        } else if (status == 500) {
            if (message.startsWith('Token Signature could not be verified.') || message.startsWith('Token has expired and can no longer be refreshed')) {
                if ((!url.endsWith('logout'))) {
                    window.axios.post('/logout', {_token: token.content}).then(response => {window.location.reload();});
                }
            }
        }
        return error
    }
);