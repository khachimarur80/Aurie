import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '@/views/Home.vue'
import KitDigitalView from '@/views/KitDigital.vue'
import ContactoView from '@/views/Contacto.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeView, meta: { title: 'Aurie' } },
  { path: '/kit-digital', component: KitDigitalView, meta: { title: 'Aurie | Kit Digital' } },
  { path: '/contacto', component: ContactoView, meta: { title: 'Aurie | Contacto' } },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;