import { createRouter, createWebHashHistory } from "vue-router";
import i18n_routes from "./i18n-children";
import PathTest from "@/views/path-test/index.vue";
import SubPathTest from "@/views/path-test/sub.vue";

const routes = [
    {
        path: "/:locale/",
        component: { template: "<router-view></router-view>" },
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
