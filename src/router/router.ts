import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'


const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('./../pages/index.vue')
    },
    {
        path: '/login',
        component: () => import('./../pages/login.vue')
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;