import { create } from 'zustand';
import { LoacationStoreType } from '@/lib/types';

const LocationStore = create<LoacationStoreType>((set) => (
    {
        latitude: undefined,
        longitude: undefined,
        updateLocation: (latitude, longitude) => set({ latitude, longitude })
    })
);
export default LocationStore; 