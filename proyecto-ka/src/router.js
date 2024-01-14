// src/router.jsç
import Vue from 'vue';
import VueRouter from 'vue-router';

import AboutView from '@/components/About.vue'
import IndexView from '@/components/Index.vue'
import TeamView from '@/components/Team.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: IndexView, meta: { title: 'Proyecto KA' } },
  { path: '/about', component: AboutView, meta: { title: 'Proyecto KA | Proyectos' } },
  { path: '/team', component: TeamView, meta: { title: 'Proyecto KA | Equipo' } },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
