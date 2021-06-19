<template>
    <el-menu router>
        <el-menu-item v-for="({ index, icon, name }) in routes" v-bind:key="index" v-bind:index="index">
            <i v-bind:class="icon"></i> {{ name }}
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: "Navigator",
    computed: {
        routes() {
            return [
                {
                    index: "/",
                    icon: ["el-icon-star-on"],
                    name: "Home"
                },
                {
                    index: "/about",
                    icon: ["el-icon-place"],
                    name: "About"
                },
                {
                    index: "/i18n",
                    icon: ["el-icon-chat-round"],
                    name: "i18n"
                },
            ];
        },
    },
};
</script>
