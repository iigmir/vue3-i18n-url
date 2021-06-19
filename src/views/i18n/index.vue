<template>
    <main>
        <h1>Language select</h1>
        <the-option />
        <the-panel />
    </main>
</template>

<script>
import TheOption from "./options";
import ThePanel from "./HelloI18n";

export default {
    name: "i18n",
    components: {
        ThePanel,
        TheOption,
    },
};
</script>

