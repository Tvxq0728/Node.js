
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ManufactureList from '../views/ManufactureList.vue'
import DynamicRouteMatching from '../views/DynamicRouteMatching.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About', component: AboutView
  },
  {
    path: '/manufacture-list',
    name: 'ManufactureList',
    component: ManufactureList
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











