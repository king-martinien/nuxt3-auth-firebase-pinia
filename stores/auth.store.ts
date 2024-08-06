import type {LoginCredentials} from "~/model/types/LoginCredentials";
import type {User} from "@firebase/auth";
import type {FirebaseError} from "@firebase/util";

export const useAuthStore = defineStore('auth.store', {
    state: () => ({
        firebaseToken: null as string | null,
        currentUser: null as User | null,
    }),
    getters: {},
    actions: {
        async login(loginCredentials: LoginCredentials) {
            const {email, password} = loginCredentials;
            await useFirebase().loginWithEmailAndPassword(email, password)
                .then(() => {
                    navigateTo('/dashboard');
                })
                .catch((_reason: FirebaseError) => {
                    console.log(_reason);
                });
        },

        async getFirebaseToken() {
            this.firebaseToken = await useFirebase().getFirebaseToken();
        },

        async getCurrentUser() {
            this.currentUser = await useFirebase().getCurrentUser();
        },

        async logout() {
            await useFirebase().logout();
        },
    }
});