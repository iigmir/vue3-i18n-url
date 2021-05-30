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
            { value: 'Option1', label: 'Option1' },
            { value: 'Option2', label: 'Option2' },
            { value: 'Option3', label: 'Option3' },
            { value: 'Option4', label: 'Option4' },
            { value: 'Option5', label: 'Option5' },
        ];
        const value = ref("Option3");
        return { options, value };
    },
}
</script>

