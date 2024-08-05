import {signInWithEmailAndPassword, signOut, type User, type UserCredential} from "@firebase/auth";

export default (() => {

    const $auth = useNuxtApp().$auth;

    const loginWithEmailAndPassword = async (email: string, password: string) => {
        await signInWithEmailAndPassword($auth, email, password)
            .then((userCredential: UserCredential) => {
                localStorage.setItem(USER, JSON.stringify(userCredential.user));
                getFirebaseToken();
            });
    };

    const getFirebaseToken = async () => {
        const cookieToken = useCookie(FIREBASE_TOKEN).value;
        if (cookieToken) {
            return cookieToken;
        }
        const firebaseToken = $auth.currentUser?.refreshToken;
        if (firebaseToken) {
            useCookie(FIREBASE_TOKEN).value = firebaseToken;
            return firebaseToken;
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
            console.log("User signed out");
        });
    };

    const USER = "USER";
    const FIREBASE_TOKEN = "FIREBASE_TOKEN";
    return {loginWithEmailAndPassword, getFirebaseToken, getCurrentUser, logout};
});