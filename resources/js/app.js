import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './assets/views/App'
import Hello from './assets/views/Hello'
import Home from './assets/views/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {

            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Home',
                metaTags: [
                    {
                        name: 'description',
                        content: 'The home page of our example app.'
                    },
                    {
                        property: 'og:description',
                        content: 'The home page of our example app.'
                    }
                ]
            }
        },
        {

            path: '/hello',
            name: 'hello',
            component: Hello,
            meta: {
                title: 'hello',
                metaTags: [
                    {
                        name: 'description',
                        content: 'The home page of our example app.'
                    },
                    {
                        property: 'og:description',
                        content: 'The home page of our example app.'
                    }
                ]
            },
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,

});
