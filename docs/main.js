// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import '#/styles/style.less';
import vueui from '@/index.js';
import '@/styles/index.less';
//import locale from '@/locale/lang/en-US';


Vue.config.debug = true;

Vue.use(vueui);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
