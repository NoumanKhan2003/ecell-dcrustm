import { StoreApi } from 'zustand';
import { MouseSettings } from '../types/index.js';
interface useMouseStoreInterface {
    curSettings: MouseSettings;
    layers: MouseSettings[];
    logging: boolean;
    pushLayer: (newLayer: MouseSettings) => void;
    popLayer: () => void;
    clearLayers: () => void;
    log: () => void;
}
declare const useMouseStore: import("zustand").UseBoundStore<StoreApi<useMouseStoreInterface>>;
export default useMouseStore;
