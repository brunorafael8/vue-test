<template>
  <div id="app">
    <menuapp :rotas="routes"></menuapp>
    <div class="main">
      <transition name="pagina">
      <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { routes } from './routes';
import Menuapp from './components/shared/menu/Menu.vue'
export default {
  name: 'app',
  components: {Menuapp},
  data () {
    return {
      routes: routes.filter(route => route.menu)
    }
  }
}
</script>

<style>
#app {
  font-family: BlinkMacSystemFont, -apple-system, “Segoe UI”, Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
	.pagina-enter, .pagina-leave-active  {
    opacity: 0;
    color: #ddd;


  }
 	.pagina-enter-active, .pagina-leave-active {
    transition: opacity 0.4s;
  }
	
</style>
