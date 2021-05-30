<template>
    <el-menu router>
        <el-menu-item index="/">
            <i class="el-icon-star-on"></i>Home
        </el-menu-item>
        <el-menu-item index="/about">
            <i class="el-icon-place"></i>About
        </el-menu-item>
        <el-menu-item index="/i18n">
            <i class="el-icon-chat-round"></i>i18n
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: "Navigator",
};
</script>
