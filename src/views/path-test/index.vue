<template>
    <main>
        <h1>Hello</h1>
        <p>This is a test. Your ID is <code>{{ $route.params.id }}</code></p>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    name: "PathTest"
};
</script>
