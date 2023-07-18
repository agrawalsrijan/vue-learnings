const authModule = {
    namespaced: false,
    state() {
        return {
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
    }

}

export default authModule;