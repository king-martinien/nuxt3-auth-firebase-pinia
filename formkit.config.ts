import {defineFormKitConfig} from "@formkit/vue";
import {generateClasses} from "@formkit/themes";

export default defineFormKitConfig({
    config: {
        classes: generateClasses({}),
    },
    icons: {},
});