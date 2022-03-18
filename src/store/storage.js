
const storageModule = {
    state() {
        return {
            objHeader: null
        }
    },
    getters: {
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