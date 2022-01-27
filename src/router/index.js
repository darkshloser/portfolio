
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'


const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/portfolio',
            component: Portfolio
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contact-us',
            component: Contact
        }
    ],
    linkActiveClass: 'active'
})


export default routes