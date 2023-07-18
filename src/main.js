import { createApp } from 'vue';
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import Counter from './components/counter/TheCounter.vue';
import counterModule from './store/modules/counter'

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            counter: 0,
            isLoggedIn: false,
            userDetails: {
                userName: 'testUser11@test.com',
                role: 'superAdmin',
                access: ['*']
            }
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isLoggedIn
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isLoggedIn: true })
        },
        logout(context) {
            context.commit('setAuth', { isLoggedIn: false })
        }
    },
    getters: {
        getUserDetails(state) {
            return state.userDetails
        },
        isSuperUser(_, getters) {
            return getters.getUserDetails.role === 'superAdmin'
        },
        isUserAuthenticated(state) {
            return state.isLoggedIn;
        }
    },

})
const appRouter = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/teams', component: TeamsList },
        { path: '/users', component: UsersList },
        { path: '/counter', component: Counter },
        { path: '/teams/:teamId', component: TeamMembers }
    ]
})

const app = createApp(App)
app.use(appRouter)
app.use(store)
app.mount('#app')
