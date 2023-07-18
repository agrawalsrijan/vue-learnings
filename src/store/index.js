import { createStore } from 'vuex';
import counterModule from './modules/counter';
import authModule from './modules/auth';
const store = createStore({
    modules: {
        numbers: counterModule,
        auth: authModule
    },
})

export default store;