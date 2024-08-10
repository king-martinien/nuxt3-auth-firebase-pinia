import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    type User,
    type UserCredential
} from "@firebase/auth";

export default (() => {

    const $auth = useNuxtApp().$auth;

    const signupUser = async (username: string, email: string, password: string) => {
        await createUserWithEmailAndPassword($auth, email, password)
            .then(async (userCredential: UserCredential) => {
                await updateProfile(userCredential.user, {displayName: username});
                localStorage.setItem(USER, JSON.stringify(userCredential.user));
                await setCookie();
            });
    };

    const loginWithEmailAndPassword = async (email: string, password: string) => {
        await signInWithEmailAndPassword($auth, email, password)
            .then(async (userCredential: UserCredential) => {
                localStorage.setItem(USER, JSON.stringify(userCredential.user));
                await setCookie();
            });
    };

    const setCookie = async () => {
        useCookie(FIREBASE_TOKEN).value = await $auth.currentUser?.getIdToken();
    };

    const getFirebaseToken = async () => {
        const cookieToken = useCookie(FIREBASE_TOKEN).value;
        if (cookieToken) {
            return cookieToken;
        }
        return null;
    };

    const getCurrentUser = async (): Promise<User | null> => {
        const userJSON = localStorage.getItem(USER);
        if (userJSON) {
            return JSON.parse(userJSON) as User;
        }
        return $auth.currentUser;
    };


    const logout = async () => {
        await signOut($auth).then(() => {
            localStorage.removeItem(USER);
            useCookie(FIREBASE_TOKEN).value = '';
        });
    };

    const USER = "USER";
    const FIREBASE_TOKEN = "FIREBASE_TOKEN";
    return {signupUser, loginWithEmailAndPassword, getFirebaseToken, getCurrentUser, logout};
});