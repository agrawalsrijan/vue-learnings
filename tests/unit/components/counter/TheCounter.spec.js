import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import TheCounter from '@/components/counter/TheCounter.vue';

import getMockedStore from '../../_helpers/getMockedStore';
import { getErrorResponse } from '../../_helpers/getResponseMocks';

describe('@TheCounter', () => {
    const localVue = createLocalVue();

    let wrapper;
    let storeMocks;

    beforeEach(() => {
        const mockedStore = getMockedStore();
        storeMocks = mockedStore.storeMocks;

        wrapper = shallowMount(TheCounter, {
            localVue,
            store: new Vuex.Store({ modules: mockedStore.modules }),
            stubs: {
                RouterView: true,
            },
        });
    });

    test('@components - should have correct list', () => {
        expect(Object.keys(TheCounter.components)).toEqual(['VehicleActionsList', 'SummaryVehicle']);
    });
    describe('@methods', () => {
        describe('@refreshVehicleInfo', () => {
            test('should resolves properly', async () => {
                const vehicleId = 111;
                const vehicleInfo = { id: vehicleId, name: 'Vehicle One' };

                storeMocks.vehicles.getInfo.mockResolvedValue(vehicleInfo);

                await wrapper.vm.refreshVehicleInfo(vehicleId);

                expect(wrapper.vm.vehicleInfo).toEqual(vehicleInfo);
            });

            test('should rejects properly', async () => {
                const errorResponse = getErrorResponse();
                storeMocks.vehicles.getInfo.mockRejectedValue(errorResponse);

                await expect(wrapper.vm.refreshVehicleInfo(111)).rejects.toEqual(errorResponse);
            });
        });
    });
});
