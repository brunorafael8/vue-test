<template>
    <div>
        <h2><ins><strong>{{ titulo }}</strong></ins></h2>
        <div class="container">
            <form class="form-inline">
                <div class="form-group">
                    <label for="Nome">Nome:</label>
                    <div class="input-group">
                        <span class="input-group-addon glyphicon glyphicon-user"></span>
                        <input @keydown.enter.prevent="submit" type="text" id="Nome" v-model="usuario.nome" class="form-control" placeholder="Altere Nome">
                    </div>
                </div>
                <botao tipo="button" @botaoAtivado="SalvarUsuario()" rotulo="Salvar" estilo="success"/>
            </form>
        </div>
    </div>
</template>
<script>
    import UService from '../services/UsuariosService';
    import Botao from '../shared/botao/Botao.vue';
    export default{
        name: 'Editar',
        components: {
            'Botao' : Botao
        },
        data () {
            return {
                titulo: 'Editar Usuário',
                usuario: {},
                errors: 'oiii'
            }

        },
        methods: {
            submit() {
                this.SalvarUsuario()
            },
             SalvarUsuario(){
                UService.putUsuario(this.usuario)
                .then(response => {
                    this.usuario = {};
                    this.$router.push('/')
                })
            }
        },
         computed: {
            id() {
                return this.$route.params.id;
            }
        },
        mounted() {
            UService.getUsuario(this.id)
                .then(usuario => this.usuario = usuario.data[0] || {})
            }
        }
</script>
<style scoped>
.container{
    padding: 40px 0 0 0;
}    
.glyphicon{
    position: initial;
}
</style>
