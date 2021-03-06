import Home from "@/views/Home.vue";

export default [
    {
        path: "",
        name: "Home",
        component: Home,
    },
    {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "i18n",
        name: "i18n",
        component: () => import(/* webpackChunkName: "i18n" */ "../views/i18n/index.vue")
    },
    {
        path: "umi",
        name: "Umi",
        component: () => import(/* webpackChunkName: "Umi" */ "../views/umi/index.vue")
    }
];
