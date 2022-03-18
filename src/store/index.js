import { createStore } from 'vuex';
import StorageModule from './storage';

const store = createStore({
    modules: {
        general: StorageModule
    }
});

export default store;