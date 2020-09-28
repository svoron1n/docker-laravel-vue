import VueRouter from 'vue-router';
import Home from './components/Home';

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {layout: 'main'},
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            meta: {layout: 'empty'},
            component: () => import('./views/Auth/Login')
        },
        {
            path: '/register',
            name: 'register',
            meta: {layout: 'empty'},
            component: () => import('./views/Auth/Register')
        },
        {
            path: '/messages',
            name: 'messages',
            meta: {layout: 'main'},
            component: () => import('./views/Messages/AllMessages')
        },
        {
            path: '/messages/new',
            name: 'new message',
            meta: {layout: 'main'},
            component: () => import('./views/Messages/NewMessage')
        },
        {
            path: '/about',
            name: 'about',
            meta: {layout: 'main'},
            component: () => import('./views/About')
        },
        {
            path: '/profile',
            name: 'profile',
            meta: {layout: 'main'},
            component: () => import('./views/Profile')
        }
    ],
    mode: 'history'
});
