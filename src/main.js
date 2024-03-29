import { createApp } from 'vue';


import App from './App.vue';
import Nav from './components/UI/nav.vue';


import '@/assets/css/bootstrap.min.css';



const app = createApp(App);

app.component( 'navigation', Nav);

app.mount('#app');