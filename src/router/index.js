import { createRouter, createWebHashHistory } from "vue-router";
import SupportLanguages from "@/locales/support-languages.json";
import Home from "@/views/Home.vue";

const children = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/i18n",
        name: "i18n",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "i18n" */ "../views/i18n/index.vue")
    }
];

const routes = [{
    path: "/:locale",
    component: { template: "<router-view></router-view>" },
    beforeEnter: (to, from, next) => {
        const locale = to.params.locale;
        if (!SupportLanguages.includes(locale)) return next("en");
        // If the locale is supported and the current locale is different, we switch to the chosen language.
        // if (i18n.locale !== locale) { // 4
        //     i18n.locale = locale;
        // }
        return next();
    },
    children,
},{
    path: "*",
    redirect() { return "/en"; }
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
