<template>
    <main>
        <h1>Language select</h1>
        <el-select v-model="value" placeholder="Select">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <the-panel />
    </main>
</template>

<script>
import { ref } from "vue";
import ThePanel from "@/components/HelloI18n.vue";

export default {
    name: "i18n",
    components: {
        ThePanel
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

