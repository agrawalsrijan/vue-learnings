import { createApp } from 'vue';
import {createStore} from 'vuex'
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue'
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import Counter from './components/counter/TheCounter.vue'
const store = createStore({
    state() {
        return{
            counter:0
        }
    }
})
const appRouter = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/teams', component: TeamsList},
        {path: '/users', component: UsersList},
        {path: '/counter', component: Counter},
        {path: '/teams/:teamId', component: TeamMembers}
    ]
})

const app = createApp(App)
app.use(appRouter)
app.use(store)
app.mount('#app')
