import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Mostrar from '../views/Mostrar.vue'
import Nuevo from '../views/Registrar.vue'
import Editar from '../views/Editar.vue'
import ListarPosts from '../views/Posts/ListarPosts.vue'
import EditarP from '../views/Posts/EditarP.vue'
import NuevoP from '../views/Posts/NuevoP.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Mostrar',
    name: 'Mostrar',
    component: Mostrar
  },
  {
    path: '/Nuevo',
    name: 'Nuevo',
    component: Nuevo
  },  
  {
    path: '/Editar/:id',
    name: 'Editar',
    component: Editar
  }, 
  {
    path: '/ListarPosts',
    name: 'ListarPosts',
    component: ListarPosts
  },
  {
  path: '/EditarP/:id',
  name: 'EditarP',
  component: EditarP
  },
  {
    path: '/NuevoP',
    name: 'NuevoP',
    component: NuevoP
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
