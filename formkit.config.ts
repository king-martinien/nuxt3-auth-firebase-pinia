import {defineFormKitConfig} from "@formkit/vue";
import {generateClasses} from "@formkit/themes";

export default defineFormKitConfig({
    config: {
        classes: generateClasses({
            global: {
                outer: 'mb-4',
                inner: 'relative',
                input: 'input pl-12 w-full bg-zinc-100 formkit-invalid:border-red-500' +
                    ' formkit-invalid:outline-red-500 formkit-invalid:bg-red-50/50',
                message: 'formkit-invalid:text-red-500 text-sm leading-none mt-1',
                label: 'font-semibold',
                icon: 'inline-flex absolute p-1.5  top-1/2 -translate-y-1/2',
                prefixIcon: 'left-1.5 rounded-md text-blue-500 formkit-invalid:text-red-500 bg-white',
                suffixIcon: 'right-2 rounded-full w-8 h-8 hover:bg-zinc-200',
            },
            password: {
                input: 'pr-10'
            }
        }),
    },
    icons: {
        user: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803 2.26-2.153-1.45-3.873-2.865-4.715a10.663 10.663 0 0 0-10.844 0Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="currentColor" stroke-width="1.5"/></svg>`,
        email: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="m7 8.5 2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733 1.131 1.136 2.705 1.175 5.854 1.254 1.94.05 3.862.05 5.802 0 3.149-.079 4.723-.118 5.854-1.254 1.131-1.135 1.164-2.668 1.23-5.733.02-.986.02-1.966 0-2.952-.066-3.065-.099-4.598-1.23-5.733-1.131-1.136-2.705-1.175-5.854-1.254a115.11 115.11 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733a69.07 69.07 0 0 0 0 2.952Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
        password: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="M13.993 15H14m-4 0h.007" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 15a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z" stroke="currentColor" stroke-width="1.5"/><path d="M16.5 9.5v-3a4.5 4.5 0 1 0-9 0v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        eye: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M21.544 11.045c.304.426.456.64.456.955 0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045Z" stroke="currentColor" stroke-width="1.5"/><path d="M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z" stroke="currentColor" stroke-width="1.5"/></svg>`,
        eyeClosed: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d="M19.439 15.439a19.517 19.517 0 0 0 2.105-2.484c.304-.426.456-.64.456-.955 0-.316-.152-.529-.456-.955C20.178 9.129 16.689 5 12 5c-.908 0-1.77.155-2.582.418m-2.67 1.33c-2.017 1.36-3.506 3.195-4.292 4.297-.304.426-.456.64-.456.955 0 .316.152.529.456.955C3.822 14.871 7.311 19 12 19c1.99 0 3.765-.744 5.253-1.747" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.858 10A2.929 2.929 0 1 0 14 14.142" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="m3 3 18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    },
});