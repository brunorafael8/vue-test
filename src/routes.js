import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';
import Editar from './components/Editar/Editar.vue';
export const routes = [

    { path: '', name: 'home', component: Home, titulo: 'Home', menu: true },
    { path: '/cadastro', name:'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
    { path: '/editar/:id', name:'editar', component: Editar, titulo: 'Edição', menu: false },       
    { path: '*', component: Home}

];
