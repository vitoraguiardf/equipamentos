/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */
const app = createApp({});

// import ExampleComponent from './components/ExampleComponent.vue';
// app.component('example-component', ExampleComponent);

/**
 * Registra automaticamente todos os arquivos .vue da pasta components-bs5 como 
 * componetes Vue
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
Object.entries(import.meta.glob('./components-bs5/**/*.vue', { eager: true })).forEach(([path, definition]) => {
    app.component("b5"+path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
});

/**
 * Registra automaticamente todos os arquivos .vue da pasta components como 
 * componetes Vue
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
Object.entries(import.meta.glob('./components/**/*.vue', { eager: true })).forEach(([path, definition]) => {
    app.component("v"+path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
});

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */
app.mount('#app');
