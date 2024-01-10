import Home from './Home.vue'
import Splash from './Splash.vue'
import Login from './Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore, useLayoutStore, useAdminStore } from 'supernova'
import apiClient from '@/api/axios';

const getRouter = (pinia) => {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      { name: 'splash', path: '/', component: Splash },
      { name: 'home', path: '/supernova', component: Home, meta: { auth: false } },
      { name: 'login', path: '/supernova/login', component: Login },
    ],
  })

  router.beforeEach(async (to) => {
    const authStore = useAuthStore(pinia)
    const layoutStore = useLayoutStore(pinia)
    const adminStore = useAdminStore(pinia)

    layoutStore.reset()
    adminStore.reset()

    const token = await localStorage.getItem('supernova_token')

    if (token) {
      try {
        if(!authStore.isAuthentified) {
          const res = await apiClient.get('http://localhost:4000/auth/profile')
          await authStore.getUserInfos(res.data)
        }
      } catch (e) {
        return { name: 'login' }
      }
    }
    if(to.name === 'login' && authStore.isAuthentified) return { name: 'home' }
    if (to.meta.auth && !authStore.isAuthentified) return { name: 'login' }
    return true
  })

  return router
}

export default getRouter;
