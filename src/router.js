import { createRouter, createWebHistory } from "vue-router";

import PageHome from "./pages/PageHome.vue";
import PageProject from "./pages/PageProject.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: PageHome
        },
        {
            path: '/portfolio',
            name: 'projects',
            component: PageProject
        }
    ]
})

export { router };