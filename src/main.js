import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueCookies from 'vue3-cookies';
import VueCryptojs from 'vue-cryptojs';
import { createApp } from 'vue';
import App from './App.vue';
import routes from './router';
import store from './store';

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

library.add(fas, far, fab);

const app = createApp(App);

app.component('app-header', Header);
app.component('app-footer', Footer);
app.component('fa', FontAwesomeIcon);
app.use(routes);
app.use(store);
app.use(VueCryptojs);
app.use(VueCookies, {
    expireTimes: import.meta.env.VITE_EMAILJS_TIME_FRAME,
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None"
});
app.mount('#app');
