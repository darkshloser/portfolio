import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue';
import App from './App.vue';
import routes from './router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Links from './components/ExternalLinks.vue'

const app = createApp(App);

app.component('app-header', Header);
app.component('app-footer', Footer);
app.component('app-external-links', Links);
app.use(routes);
app.mount('#app');
