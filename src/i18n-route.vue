<template>
    <router-view></router-view>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

export default {
    name: "i18nMount",
    setup() {
        const lang = computed({
            get: () => {
                const route = useRoute();
                return route.params.locale ?? "en";
            },
        });
        const { locale } = useI18n({ useScope: "global" });
        locale.value = lang.value;
        // watch( () => lang, (newval, oldval) => {
        //     console.log(newval, oldval);
        // });
    }
};
</script>
