import VueRouter from 'vue-router';
import Home from './components/Home';

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                layout: 'main',
                auth: true
            },
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                layout: 'empty',
                auth: false
            },
            component: () => import('./views/Auth/Login')
        },
        {
            path: '/register',
            name: 'register',
            meta: {
                layout: 'empty',
                auth: false
            },
            component: () => import('./views/Auth/Register')
        },
        {
            path: '/messages',
            name: 'messages',
            meta: {
                layout: 'main',
                auth: true
            },
            component: () => import('./views/Messages/AllMessages')
        },
        {
            path: '/messages/new',
            name: 'new message',
            meta: {
                layout: 'main',
                auth: true
            },
            component: () => import('./views/Messages/NewMessage')
        },
        {
            path: '/about',
            name: 'about',
            meta: {
                layout: 'main',
                auth: true
            },
            component: () => import('./views/About')
        },
        {
            path: '/profile',
            name: 'profile',
            meta: {
                layout: 'main',
                auth: true
            },
            component: () => import('./views/Profile')
        }
    ],
    mode: 'history'
});
