<template>
    <p>{{ t("umi") }}</p>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "Flowersi18n",
    setup() {
        const { t } = useI18n({ inheritLocale: true, useScope: "local", });
        // Something todo ..
        return { t };
    }
});
</script>

<i18n>
{
    "en": {
        "umi": "We are the flowers of the future"
    },
    "ja": {
        "umi": "私たちは未来の花"
    },
    "zh-Hant": {
        "umi": "我們是未來的花"
    },
    "ko": {
        "umi": "우리들은 미래의 꽃"
    }
}
</i18n>
