// src/router.jsç
import Vue from 'vue';
import VueRouter from 'vue-router';

import AboutView from '@/components/About.vue'
import IndexView from '@/views/Index.vue'
import TeamView from '@/components/Team.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: IndexView, meta: { title: 'Aurie' } },
  { path: '/about', component: AboutView, meta: { title: 'Aurie | Proyectos' } },
  { path: '/team', component: TeamView, meta: { title: 'Aurie | Equipo' } },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
