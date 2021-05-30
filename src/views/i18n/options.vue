<template>
    <el-select v-model="value" placeholder="Select">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
    </el-select>
</template>

<script>
import { ref } from "vue";

export default {
    name: "i18nOptions",
    methods: {
        change_locale() {
            console.log(123);
        }
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

