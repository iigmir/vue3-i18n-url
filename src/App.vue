<template>
    <div id="app">
        <navigator />
        <router-view/>
    </div>
</template>

<script>
import Navigator from "./components/sb";

export default {
    name: "App",
    components: {
        Navigator,
    }
}
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
