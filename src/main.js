import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue';
import App from './App.vue';
import routes from './router'
import store from './store'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const app = createApp(App);

app.component('app-header', Header);
app.component('app-footer', Footer);
app.use(routes);
app.use(store)
app.mount('#app');
