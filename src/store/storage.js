import projects from './../data/projects.json'
// import { useCookies } from "vue3-cookies";

const storageModule = {
    state() {
        return {
            objHeader: null,
            jsonProjects: projects,
            // cookies: useCookies()
        }
    },
    getters: {
        getProjects(state) {
            return state.jsonProjects
        },
        getHeader(state) {
            return state.objHeader
        },
        getSecureValue() {
            return import.meta.env.VITE_EMAILJS_INIT + import.meta.env.VITE_EMAILJS_ARGUMENT
        }
    },
    mutations: {
        // synchronous
        setHeader(state, payload) {
            state.objHeader = payload.headerHTML;
        },
        incrementEmailStats(state) {
            console.log("______________")

        }
    },
    actions: {
        // asyncronous
        setEmailStats(context) {

        }

    },
    modules: {

    }
}

export default storageModule;