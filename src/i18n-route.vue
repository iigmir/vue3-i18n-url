<template>
    <router-view></router-view>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
    name: "i18nMount",
    setup() {
        const lang = useRoute().params.locale ?? "en";
        const { locale } = useI18n({ useScope: "global" });
        locale.value = lang;
        watch( ref(lang), (newval, oldval) => {
            console.log(newval, oldval);
        });
    }
};
</script>
