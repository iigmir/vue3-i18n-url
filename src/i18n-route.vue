<template>
    <router-view></router-view>
</template>

<script>
import { useRoute } from "vue-router";
import { watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
    name: "i18nMount",
    setup() {
        const route = useRoute();
        const { locale } = useI18n({ useScope: "global" });
        locale.value = route.params.locale;
        /**
         * https://stackoverflow.com/questions/63800831
         */
        watch( () => route.params.locale, new_locale => {
            locale.value = new_locale;
        });
    }
};
</script>
