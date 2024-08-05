import {getApps, initializeApp} from "@firebase/app";
import {getAuth} from "@firebase/auth";

export default defineNuxtPlugin(_nuxt => {
    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.public.API_KEY,
        authDomain: config.public.AUTH_DOMAIN,
        projectId: config.public.PROJECT_ID,
        storageBucket: config.public.STORAGE_BUCKET,
        messagingSenderId: config.public.MESSAGING_SENDER_ID,
        appId: config.public.APP_ID,
    };

    if (getApps().length === 0) {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        return {
            provide: {auth},
        };
    }

});