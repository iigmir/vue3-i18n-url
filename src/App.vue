<template>
    <div id="app-main">
        <el-row class="tac">
            <el-col :span="4">
                <navigator />
            </el-col>
            <el-col :span="20">
                <div class="wrapper">
                    <router-view/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Navigator from "./components/Navigator/index";
import { useI18n } from "vue-i18n";

export default {
    name: "App",
    components: {
        Navigator,
    },
    setup() {
        const [ lang ] = window.location.hash.split("/").filter( text => text !== "#" );
        const { locale } = useI18n({ useScope: "global" });
        locale.value = lang;
    }
};
</script>

<style scoped>
.wrapper {
    padding-top: 60px;
    padding-left: 60px;
}
</style>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
