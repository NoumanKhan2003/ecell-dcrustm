export declare function useControlOptions(): {
    topLayer: import("../types/index.js").MouseSettings;
    addOptionLayer: (newLayer: import("../types/index.js").MouseSettings) => void;
    removePreviousLayer: () => void;
    clearLayers: () => void;
    log: () => void;
};
