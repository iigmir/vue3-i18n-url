<template>
    <div id="app-main">
        <el-row class="tac">
            <el-col :span="4">
                <navigator />
            </el-col>
            <el-col :span="20">
                <router-view/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Navigator from "./components/Navigator/index";

export default {
    name: "App",
    components: {
        Navigator,
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
