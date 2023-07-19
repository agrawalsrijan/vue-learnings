// import Vue from 'vue';
// import Vuetify from 'vuetify';
// import Vuex from 'vuex';
// import { config } from '@vue/test-utils';

// Vue.use(Vuetify);
// Vue.use(Vuex);

// config.mocks = {
//     $t: (key) => key,
//     $tc: (key) => key,
// };
// jest.mock('@/store', () => {
//     let store = jest.requireActual('@/store').default;

//     function setStore(newStore) {
//         store = newStore;
//     }

//     Object.assign(setStore, store);

//     return {
//         __esModule: true,
//         default: setStore,
//         useStore: () => store,
//     };
// });

// jest.mock('@/router', () => {
//     const getMockedRouter = jest.requireActual('./_helpers/getMockedRouter').default;

//     let router = getMockedRouter();

//     function setRouter(newRouter) {
//         router = newRouter;
//     }

//     Object.assign(setRouter, router);

//     return {
//         __esModule: true,
//         default: setRouter,
//         useRouter: () => router,
//     };
// });

// // jest.mock('@/vuetify', () => {
// //     let vuetify = {
// //         breakpoint: {
// //             xs: jest.fn(() => false),
// //             sm: jest.fn(() => false),
// //             md: jest.fn(() => false),
// //             lg: jest.fn(() => true),
// //         },
// //     };

// //     function setVuetify(newVuetify) {
// //         vuetify = newVuetify;
// //     }

// //     Object.assign(setVuetify, vuetify);

// //     return {
// //         __esModule: true,
// //         default: setVuetify,
// //         useVuetify: () => vuetify,
// //     };
// // });


// global._ = require('lodash');

