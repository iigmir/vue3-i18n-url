import { createRouter, createWebHashHistory } from "vue-router";
// import SupportLanguages from "@/locales/support-languages.json";
import Home from "@/views/Home.vue";

const routes = [
    {
        path: "/:locale/",
        name: "Home",
        component: Home,
    },
    {
        path: "/:locale/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/:locale/i18n",
        name: "i18n",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "i18n" */ "../views/i18n/index.vue")
    },
    {
        path: "/",
        redirect: "/en"
    },
    {
        path: "/path-test",
        name: "PathTest",
        component: () => import(/* webpackChunkName: "PathTest" */ "../views/path-test/index.vue"),
        // children: [{}]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
