<template>
    <div>
        <h2><ins><strong>{{ titulo }}</strong></ins></h2>
        <div class="container">
            <form class="form-inline">
                <div class="form-group">
                    <label for="Name">Nome:</label>
                    <div class="input-group">
                        <span class="input-group-addon glyphicon glyphicon-user"></span>
                        <input @keydown.enter.prevent="submit" type="text" class="form-control" id="Name" v-model="usuario.nome" placeholder="Adicione um Nome">
                    </div>
                </div>
                <botao tipo="button" @botaoAtivado="CadastrarUsuario()" rotulo="Salvar" estilo="success"/>
            </form>
        </div>
    </div>
</template>
<script>
    import UService from '../services/UsuariosService';
    import Botao from '../shared/botao/Botao.vue';
    export default{
        name: 'Cadastro',
        components: {
            'Botao' : Botao
        },
        data: () => ({
            titulo: 'Cadastro de Usuários',
            usuario: {}
        }),
        methods: {
            submit(){
                this.CadastrarUsuario()
            },
            CadastrarUsuario(){
                UService.postUsuario(this.usuario)
                .then(response => {
                    this.usuario = {};
                    this.$router.push('/')
                })
            }
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
