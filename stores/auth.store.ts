import type {SignupCredentials} from "~/model/types/SignupCredentials";
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

        async signup(signupCredentials: SignupCredentials) {
            const {username, email, password} = signupCredentials;
            console.log(username, email, password);
            await useFirebase().signupUser(username, email, password)
                .then(async () => {
                    await this.getCurrentUser();
                    navigateTo('/dashboard');
                });
        },

        async login(loginCredentials: LoginCredentials) {
            const {email, password} = loginCredentials;
            await useFirebase().loginWithEmailAndPassword(email, password)
                .then(async () => {
                    await this.getCurrentUser();
                    navigateTo('/dashboard');
                })
                .catch((_reason: FirebaseError) => {
                    console.log(_reason);
                });
        },

        async loginWithGoogle() {
            await useFirebase().signInWithProvider()
                .then(async () => {
                    await this.getCurrentUser();
                    navigateTo('/dashboard');
                }).catch(err => {
                    console.log(err);
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
            return navigateTo('/auth/login');
        },
    }
});