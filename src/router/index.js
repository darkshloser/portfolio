
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const compProps = (route) => {
    return {
        isAuth: false
    }
}

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            props: compProps
        },
        {
            path: '/portfolio',
            component: Portfolio,
            props: compProps
        },
        {
            path: '/about',
            component: About,
            props: compProps
        },
        {
            path: '/contact-us',
            component: Contact,
            props: compProps
        }
    ],
    linkActiveClass: 'active'
})


export default routes