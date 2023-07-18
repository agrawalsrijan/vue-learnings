const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state, payload) {
            state.counter = state.counter + payload.value
        },
        decrement(state, payload) {
            state.counter = state.counter - payload.value
        },
    },
    actions: {
        increment(context, payload) {
            setTimeout(() => {
                context.commit('increment', payload)
            }, 200)
        },
        decrement(context, payload) {
            setTimeout(() => {
                context.commit('decrement', payload)
            }, 200)
        },
    },
    getters: {
        getDoubledCounter(state) {
            return state.counter * 2
        },
        getArrayTillCount(_, getters) {
            return Array.from({ length: getters.getDoubledCounter }, (_, index) => index + 1);
        },
       
    }
}

export default counterModule;