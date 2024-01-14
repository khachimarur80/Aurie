// src/router.jsç
import Vue from 'vue';
import VueRouter from 'vue-router';

import AboutView from '@/components/About.vue'
import ContactView from '@/components/Contact.vue'
import IndexView from '@/components/Index.vue'
import TeamView from '@/components/Team.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: IndexView },
  { path: '/about', component: AboutView },
  { path: '/team', component: TeamView },
  { path: '/contact', component: ContactView },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
