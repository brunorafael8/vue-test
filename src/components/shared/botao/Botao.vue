<template>
    <button  @click.prevent="disparaAcao()" :dados="dados" class="btn btn-lg" :class="estiloDoBotao" :type="tipo"> {{ rotulo }}</button>
</template>

<script>
    import UService from '../../services/UsuariosService';
	export default {
		props: {
			tipo: {
				type: String, 
				required: true
			},
            dados:[String, Number],
			rotulo: {
				type: String, 
				required: true
			},
			confirmacao: Boolean,
			estilo: String
		},
		methods: {

			disparaAcao() {

					this.$emit('botaoAtivado');
			}
		},
		computed: {
				estiloDoBotao() {
					if(this.estilo == 'primary' || !this.estilo) return 'btn-primary';
					if(this.estilo == 'danger') return 'btn-danger';
					if(this.estilo == 'success') return 'btn-success';
				}
		}
	}
</script>

<style scoped>
</style>
