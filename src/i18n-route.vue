<template>
    <router-view></router-view>
</template>

<script>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
    name: "i18nMount",
    setup() {
        const [ lang ] = window.location.hash.split("/").filter( text => text !== "#" );
        const { locale } = useI18n({ useScope: "global" });
        locale.value = lang;
        watch( ref(locale.value), (newval, oldval) => {
            console.log(newval, oldval);
        });
    }
};
</script>
