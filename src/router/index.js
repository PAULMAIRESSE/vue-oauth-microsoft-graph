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
const altRoutes = [
    {
        path: '/vue-oauth-microsoft-graph/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/vue-oauth-microsoft-graph/conversations/:id',
        name: 'ConversationShow',
        component: ConversationShowPage
    },
    {
        path: '/vue-oauth-microsoft-graph/conversations',
        name: 'ConversationShowAll',
        component: ConversationShowPage
    }, // 404 page
    {
        path: '/vue-oauth-microsoft-graph/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: process.env.NODE_ENV === 'production' ? altRoutes : routes
});

export default router;