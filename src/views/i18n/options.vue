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

export default {
    name: "i18nOptions",
    setup() {
        const { locale } = useI18n({ useScope: "global" });
        return {
            options: [
                { value: "en", label: "English" },
                { value: "zh-Hant", label: "繁體中文" },
                { value: "ko", label: "한국어" },
            ],
            value: ref( locale ),
            change_locale: (lang = "en") => {
                locale.value = lang;
            }
        };
    },
}
</script>

