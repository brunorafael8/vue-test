<template>
    <div>
        <header>
            <h1>{{ titulo }}</h1>
            <ul class="nav nav-tabs">
            <li role="presentation" v-for="rota in rotas"><router-link :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link></li>
            </ul>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'menuapp',
        data () {
            return {
                titulo: 'Teste Vue'
            }
        },
        props: {
            rotas: {
                type: Array, 
                required: true
            }
        }
    }
</script>
<style scoped>
    .router-link-exact-active{ 
        color: #555;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-color: transparent;
    }
</style>
