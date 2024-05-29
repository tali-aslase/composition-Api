import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import UpdateView from '../views/UpdateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/add',
    name: 'add',
    component: AddView
  },

  {
    path: '/update/:id',
    name: 'update',
    component: UpdateView,
    props: true

  },

  {
    path: '/update/:id',
    name: 'update',
    component: UpdateView,
    props: true

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
