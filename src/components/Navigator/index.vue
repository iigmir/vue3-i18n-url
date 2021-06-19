<template>
    <el-menu router>
        <el-menu-item v-for="({ index, icon, name }) in routes" v-bind:key="index" v-bind:index="index">
            <i v-bind:class="icon"></i> {{ name }}
        </el-menu-item>
    </el-menu>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed, watchEffect } from "vue";

export default {
    name: "Navigator",
    computed: {},
    setup() {
        const { locale } = useI18n({ useScope: "global" });
        // const language = ref( locale.value );
        const i18n_route = path => `/${locale.value}${path}`;
        const routes = computed( () =>
            ([
                {
                    index: i18n_route("/"),
                    icon: ["el-icon-star-on"],
                    name: "Home"
                },
                {
                    index: i18n_route("/about"),
                    icon: ["el-icon-place"],
                    name: "About"
                },
                {
                    index: i18n_route("/i18n"),
                    icon: ["el-icon-chat-round"],
                    name: "i18n"
                },
            ]))
        ;
        watchEffect(() => console.log(locale.value));
        return { routes };
    }
};
</script>
