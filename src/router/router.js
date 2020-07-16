import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articulos',
    name: 'Articulos',
    component: () => import('../views/Articulos.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import('../views/Administracion.vue')
  },
  {
    path: '/comentarios/:index',
    name: 'Comentarios',
    component: () => import('../views/Comentarios.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
