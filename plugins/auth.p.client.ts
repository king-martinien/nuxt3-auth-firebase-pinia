import {useAuthStore} from "~/stores/auth.store";

export default defineNuxtPlugin(async (_nuxt) => {
    const authStore = useAuthStore();
    await authStore.getFirebaseToken();
});