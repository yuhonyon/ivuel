import Vue from 'vue';
import Router from 'vue-router';
import Layout from '#/views/Layout';
import ComponentsLayout from '#/views/components/';
import asyncLoadingMd from '#/utils/asyncLoadingMd';
import components from './components';

let componentsRoute = [];
for (let group in components) {
    for(let name of components[group]){
      componentsRoute.push({
          path: '/components/' + name.path,
          component: asyncLoadingMd(name.path)
      });
    }
}
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            children: [
                {
                    path: '/components',
                    component: ComponentsLayout,
                    children: componentsRoute
                },
                {
                    path: '/doc',
                    component: ComponentsLayout,
                    children: [{
                      path:"/doc/install",
                      component: ()=> import(`#/views/markdown/Install.md`)
                    },{
                      path:"/doc/start",
                      component: ()=> import(`#/views/markdown/Start.md`)
                    }]
                },
                {
                    path: '/record',
                    component: ()=> import(`#/views/markdown/record.md`)
                },
                {
                    path: '/home',
                    component: ()=> import(`#/views/home/index.vue`)
                }
            ]
        }
    ]
});
