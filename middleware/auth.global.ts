import {useAuthStore} from "~/stores/auth.store";

export default defineNuxtRouteMiddleware((to, _from) => {
    const {firebaseToken} = storeToRefs(useAuthStore());
    if (firebaseToken.value && to.fullPath.includes('login')) {
        return abortNavigation();
    }
    if (!firebaseToken.value && !to.fullPath.includes('auth')) {
        return navigateTo('/auth/login');
    }
});