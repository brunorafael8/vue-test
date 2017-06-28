<template>
    <div>
        <h2><ins><strong>{{ titulo }}</strong></ins></h2>
        
        <div class="container">
            <input type="search" @input="filtro = $event.target.value" class="form-control" placeholder="Buscar">
            <div class="col-xs-12 col-md-12">
                <div class="alert alert-success" v-for="feito in feitos" role="alert">{{feito}}</div>
                <h3 class="col-xs-12 col-md-6">Usuários:</h3> 
                <div class="add col-xs-12 col-md-6"><botao tipo="button" @botaoAtivado="Cadastro" rotulo="Adicione mais um Usuário a lista" estilo="success"/></div>
            </div>
            <div class="row col-xs-12 col-md-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                        <th>Id</th>
                        <th>Usuário</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr :key="usuario.id" v-for="usuario of FiltroUsuarios">
                            <td>{{ usuario.id }}</td>
                            <td>{{ usuario.nome }}</td>
                            <td><botao tipo="button" @botaoAtivado="EditarUsuario(usuario.id)" rotulo="Editar" estilo="primary"/></td>
                            <td><botao tipo="button" @botaoAtivado="ApagaUsuario(usuario)" rotulo="Deletar" estilo="danger"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>
        </div>
    </div>
</template>
<script>
import UService from '../services/UsuariosService';
import Botao from '../shared/botao/Botao.vue';
    export default{
        name: 'Home',
        components: {
            'Botao' : Botao
        },
        data: () => ({
            usuarios: [], 
            filtro: '',
            titulo: 'Lista de Usuários',
            feitos: []
        }),
    computed: {
        FiltroUsuarios() {
            if(this.filtro) {
                let exp = RegExp(this.filtro.trim(),'i');
                    return this.usuarios.filter(usuario => exp.test(usuario.nome));
                }else{
                    return this.usuarios;
                }
            }
        },
        methods: {
            ApagaUsuario(usuario){
                UService.deleteUsuario(usuario.id)
                    .then(response => {
                        this.feitos.push('Apagado com Sucesso !!')
                        this.usuarios = this.usuarios.filter(user => user.id !== usuario.id);
                })
            },
            EditarUsuario(id) {
                this.$router.push({name: 'editar', params: { id: id }})
            },
            Cadastro() {
                this.$router.push({name: 'cadastro'})
            }
        },
        mounted () {
        UService.getUsuarios()
            .then(usuarios => this.usuarios = usuarios.data)
        }
    }
</script>
<style scoped lang="scss"> 
h2{
    padding-bottom: 20px;
}
h3{
    text-align: left;
}
.table{
    background-color: #42b983;
    color: #fff; 
}
.form-control{
    margin-bottom: 20px;
}
.add{
    margin-bottom: 10px;
}
</style>
