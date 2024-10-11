import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ConversationShowPage from '@/views/ConversationShowPage.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/conversations/:id',
        name: 'ConversationShow',
        component: ConversationShowPage
    },
    {
        path: '/conversations',
        name: 'ConversationShowAll',
        component: ConversationShowPage
    }, // 404 page
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;