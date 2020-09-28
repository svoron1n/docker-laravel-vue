/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import router from './router';
import App from './components/App';
import { BootstrapVue, IconsPlugin, BootstrapVueIcons, ToastPlugin } from 'bootstrap-vue';

import dateFilter from './filters/date.filter';
import messagePlugin from './utils/message.plugin';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


Vue.use(VueRouter);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(ToastPlugin);

Vue.use(messagePlugin);
Vue.filter('date', dateFilter);

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
});

export default app;
