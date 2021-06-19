<template>
    <el-select v-model="value" v-on:change="change_locale" placeholder="Select">
        <el-option
            v-for="item in options"
            v-bind:key="item.value"
            v-bind:label="item.label"
            v-bind:value="item.value"
        />
    </el-select>
</template>

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

export default {
    name: "i18nOptions",
    setup() {
        // Declear vars
        const { locale } = useI18n({ useScope: "global" });
        const router = useRouter();
        const value = ref(locale.value);
        const change_locale = (lang="en") => {
            locale.value = lang;
            router.push(`/${lang}/i18n`);
        };
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
        const options = [
            { value: "en", label: "English" },
            { value: "zh-Hant", label: "繁體中文" },
            { value: "ko", label: "한국어" },
        ];
        return {  options, value, change_locale, };
    },
};
</script>

