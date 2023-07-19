import { getErrorResponse } from './getResponseMocks';

export const defaultErrorResponse = getErrorResponse();


export default function getMockedStore() {
    const storeMocks = {
        counter: {
            mutations: {
                increment: jest.fn(),
                decrement: jest.fn()
            },
            actions: {
                increment: jest.fn(),
                decrement: jest.fn()
            },
            getters: {
                getDoubledCounter: jest.fn(),
                getArrayTillCount: jest.fn()

            }
        },

        auth: {
            mutations: {
                setAuth: jest.fn()
            },
            actions: {
                login: jest.fn(),
                logout: jest.fn()
            },
            getters: {
                getUserDetails: jest.fn(),
                isSuperUser: jest.fn(),
                isUserAuthenticated: jest.fn()
            }
        },

        brands: {
            delete: jest.fn(),
            getInfo: jest.fn(() => ({})),
            getList: jest.fn(() => []),
            update: jest.fn(() => ({})),
        }
    };

    const modules = {
        counter: {
            namespaced: true,
            state: {
                counter: 0
            },
            getters: {
                ...storeMocks.counter.getters
            },

            actions: {
                ...storeMocks.counter.actions
            },

            mutations: {
                ...storeMocks.counter.mutations
            }
        },

        auth: {
            namespaced: false,
            state: {
                isLoggedIn: false,
                userDetails: {
                    userName: 'testUser11@test.com',
                    role: 'superAdmin',
                    access: ['*']
                }
            },

            getters: {
                ...storeMocks.auth.getters
            },

            actions: {
                ...storeMocks.auth.actions
            },

            mutations: {
                ...storeMocks.auth.mutations
            }
        },
    };

    const unsubscribe = jest.fn();

    const eventBus = {
        publish: jest.fn(),
        subscribe: jest.fn(() => ({ unsubscribe })),
    };

    const indexStore = {
        state: {
            isReady: false,
            isLoading: false,
            cachedData: {},
        }
    };

    return {
        indexStore,
        storeMocks,
        modules,
        eventBus,
    };
}
