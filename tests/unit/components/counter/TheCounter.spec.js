// import Vuex from 'vuex';
// import { createLocalVue, shallowMount } from '@vue/test-utils';

import TheCounter from '@/components/counter/TheCounter.vue';

// import getMockedStore from '../../_helpers/getMockedStore';
// import { getErrorResponse } from '../../_helpers/getResponseMocks';

describe('@TheCounter', () => {
    // const localVue = createLocalVue();

   

    // beforeEach(() => {
    //     const mockedStore = getMockedStore();
    //     storeMocks = mockedStore.storeMocks;

    //     wrapper = shallowMount(TheCounter, {
    //         localVue,
    //         store: new Vuex.Store({ modules: mockedStore.modules }),
    //         stubs: {
    //             RouterView: true,
    //         },
    //     });
    // });

    test('@components - should have correct list', () => {
        expect(Object.keys(TheCounter.components)).toEqual(['VehicleActionsList', 'SummaryVehicle']);
    });
   
});
