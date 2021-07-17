import { authStore } from "./AuthStore";
import { accountStore } from "./AccountStore";

const stores = {
    authStore,
    accountStore,
};

export default stores;

(window as any).stores = stores;