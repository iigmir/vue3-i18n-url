<template>
  <p>{{ t("hello") }}</p>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
    name: 'HelloI18n',
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: 'local'
        })
        // Something todo ..
        return { t }
    }
})
</script>

<i18n>
{
    "en": {
        "hello": "Hello i18n in SFC!"
    },
    "zh-Hant": {
        "hello": "午安啊，多語言化！"
    },
    "ko": {
        "hello": "안녕하십니까, 현지화!"
    }
}
</i18n>
