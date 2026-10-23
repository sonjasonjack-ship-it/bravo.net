
import { createRouter, createWebHistory } from 'vue-router'
import SearchPage from '@/components/SearchPage.vue'
import HoMe from '@/components/HoMe.vue'
import SerIes from '@/components/SerIes.vue'
import AccouNt from '@/components/AccouNt.vue'
import MoVie from '@/components/MoVie.vue'

const routes = [
  { path: '/', component: HoMe },
  { path: '/series', component: SerIes },
  { path: '/movies', component: AccouNt },
   { path: '/movies now', component: MoVie },
  { path: '/search', name: 'Search', component: SearchPage } // <--- Aha ni ho yinjira
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router