import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ConversationShowPage from '@/views/ConversationShowPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/conversation/:id',
        name: 'ConversationShow',
        component: ConversationShowPage
    },
    {
        path: '/conversation',
        name: 'ConversationShowAll',
        component: ConversationShowPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;