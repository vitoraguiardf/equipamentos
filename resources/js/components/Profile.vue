<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Registro de Usuário - {{ name }}</div>
                    <div class="card-body">
                        <b5-form @submit.prevent="logg">
                            <b5-form-input id="usuario" v-model="name" title="Username" type="text" placeholder="Nome de Usuário" floating />
                            <b5-form-input id="nome" v-model="name" title="Username" type="text" />
                            <b5-form-input v-model="name" title="Username" type="text" disabled />
                            <!--b5-form-input type="checkbox" />
                            <b5-form-input type="option" />
                            <b5-form-input type="select" /-->
                            <b5-form-input title="Confirmar" type="submit" variant="primary" />
                        </b5-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            comp_var() {
                return this.name
            }
        },
        data() {
            return {
                name: 'Vitor',
            }
        },
        methods: {
            logg(event) {
                console.log(event)
            }
        },
        mounted() {
            console.log('Component Profile mounted.')
        }
    }
</script>
