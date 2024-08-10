export default defineNuxtRouteMiddleware(async (to) => {
    await useAuthStore().getFirebaseToken();
    const {firebaseToken} = storeToRefs(useAuthStore());
    if (!firebaseToken.value && !to.fullPath.includes('auth')) {
        return navigateTo('/auth/login');
    }
});