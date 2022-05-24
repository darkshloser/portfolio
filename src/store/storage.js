import projects from './../data/projects.json'

const storageModule = {
    state() {
        return {
            objHeader: null,
            jsonProjects: projects,
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
    mutations: {},
    actions: {},
    modules: {}
}

export default storageModule;