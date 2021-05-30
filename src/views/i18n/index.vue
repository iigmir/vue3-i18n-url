<template>
    <main>
        <h1>Language select</h1>
        <the-option />
        <the-panel />
    </main>
</template>

<script>
import { ref } from "vue";
import ThePanel from "./HelloI18n";
import TheOption from "./options";

export default {
    name: "i18n",
    components: {
        ThePanel,
        TheOption,
    },
    setup() {
        const options = [
            { value: "en", label: "English" },
            { value: "zh-Hant", label: "繁體中文" },
            { value: "ko", label: "한국어" },
        ];
        let value = ref("en");
        return { options, value };
    },
}
</script>

