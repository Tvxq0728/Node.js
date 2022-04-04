import { createRouter, createWebHistory } from 'vue-router'
// import Vue from 'vue'
import HomeView from '../views/HomeView.vue'
// import VueRouter from 'vue-router'
import DynamicRouteMatching from '../views/DynamicRouteMatching.vue'

// Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/dynamic-route-matching/:userId',
    name: 'DynamicRouteMatching',
    component: DynamicRouteMatching,
    props: true
  },
]

const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes })

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
export default router
