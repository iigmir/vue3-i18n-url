<template>
    <el-menu router>
        <el-menu-item v-for="({ index, icon, name }) in routes" v-bind:key="index" v-bind:index="index">
            <i v-bind:class="icon"></i> {{ name }}
        </el-menu-item>
        <el-menu-item index="/path-test">
            <i class="el-icon-s-check"></i> Test
        </el-menu-item>
        <!-- path-test -->
    </el-menu>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
    name: "Navigator",
    computed: {
        routes() {
            const { locale } = useI18n({ useScope: "global" });
            const i18n_route = path => `/${locale.value}${path}`;
            return [
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
                {
                    index: i18n_route("/umi"),
                    icon: ["el-icon-umbrella"],
                    name: "Flowers"
                },
            ];
        }
    },
};
</script>
