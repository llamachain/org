import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import '@/style/global.scss';


import ViewHome from '@/views/ViewHome.vue';

const routes = [
  { path: '/', component: ViewHome },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active',
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
  },
});

const app = createApp(App);

app.use(router);
app.mount('#app');
