import { createRouter, createWebHistory } from "vue-router";

import PageHome from "./pages/PageHome.vue";
import PageProject from "./pages/PageProject.vue";
import AboutMe from "./pages/AboutMe.vue";
import PageSingleProject from "./pages/PageSingleProject.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import PageContacts from "./pages/PageContacts.vue";

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
        },
        {
            path: '/about',
            name: 'aboutme',
            component: AboutMe
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: PageContacts
        },
        {
            path: '/projects/:slug',
            name: 'single_project',
            component: PageSingleProject
        },
        {
            path: '/:notFound',
            name: 'not-found',
            component: PageNotFound
        },
    ]
})

export { router };