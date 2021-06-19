import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import PathTest from "@/views/path-test/index.vue";
import SubPathTest from "@/views/path-test/sub.vue";

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
        path: "/path-test/:id?",
        name: "PathTest",
        component: () => PathTest,
        children: [{
            path: "sub",
            component: SubPathTest,
        }]
    },
    {
        path: "/",
        redirect: "/en"
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
