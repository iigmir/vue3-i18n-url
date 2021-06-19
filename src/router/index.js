import { createRouter, createWebHashHistory } from "vue-router";
import i18n_routes from "./i18n-children";
import i18nMount from "@/i18n-route.vue";
import PathTest from "@/views/path-test/index.vue";
import SubPathTest from "@/views/path-test/sub.vue";

const routes = [
    {
        path: "/:locale/",
        component: i18nMount,
        children: i18n_routes
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
        path: "/:pathMatch(.*)*",
        redirect: "/en"
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
