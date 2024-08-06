import {useAuthStore} from "~/stores/auth.store";

export default defineNuxtRouteMiddleware((to, _from) => {
    if (import.meta.client) {
        const {firebaseToken} = storeToRefs(useAuthStore());
        if (firebaseToken.value && to.fullPath.includes('login')) {
            return navigateTo('/dashboard');
        }
        if (!firebaseToken.value && !to.fullPath.includes('auth')) {
            return navigateTo('/auth/login');
        }
    }
});