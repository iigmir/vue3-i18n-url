<template>
    <main>
        <article>
            <h1>Umi text</h1>
            <p>{{ value }}</p>
        </article>
        <nav>
            <h2>Switch</h2>
            <ul>
                <li v-for="({ value, label }) in options" v-bind:key="value">
                    <router-link v-bind:to="value">{{ label }}</router-link>
                </li>
            </ul>
        </nav>
    </main>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import LanguageCodes from "@/locales/support-languages";

export default defineComponent({
    name: "Flowersi18n",
    setup() {
        const { t } = useI18n({ inheritLocale: true, useScope: "local", });
        const i18nlabel = language => (
            new Intl.DisplayNames([language], {type: "language"})
        ).of( language );
        const options = LanguageCodes.map( language => ({
            value: `/${language}/umi`,
            label: i18nlabel( language ),
        }) );
        const value = computed( () => {
            return t("umi");
        });
        return { t , options, value };
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
