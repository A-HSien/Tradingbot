import { makeAutoObservable } from "mobx";

export class LayoutStore {

    showOverlay = false;

    constructor() {
        makeAutoObservable(this);
    };

    switchOverlay = (show: boolean) => {
        this.showOverlay = show;
    };
};

export const layoutStore = new LayoutStore();