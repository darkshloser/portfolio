import projects from './../data/projects.json'

const storageModule = {
    state() {
        return {
            objHeader: null,
            jsonProjects: projects
        }
    },
    getters: {
        getProjects(state) {
            return state.jsonProjects
        },
        getHeader(state) {
            return state.objHeader
        }
    },
    mutations: {
        setHeader(state, payload) {
            state.objHeader = payload.headerHTML;
        }
    }
}

export default storageModule;