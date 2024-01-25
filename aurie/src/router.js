// src/router.jsç
import Vue from 'vue';
import VueRouter from 'vue-router';

import ServicesView from '@/views/Services.vue'
import IndexView from '@/views/Index.vue'
import ContactView from '@/views/Contact.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: IndexView, meta: { title: 'Aurie' } },
  { path: '/servicios', component: ServicesView, meta: { title: 'Aurie | Servicios' } },
  { path: '/contacto', component: ContactView, meta: { title: 'Aurie | Contacto' } },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
