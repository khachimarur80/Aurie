import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '@/views/Home.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeView, meta: { title: 'Aurie' } },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;