import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { AuthPlugin, AdminPlugin, registerAdminRoutes, registerSupernovaRoutes } from 'supernova'
import App from './App.vue'
import getRouter from './router.js'
import AdminConfig from './config/admin.config.js'

import 'supernova/style.css'
import './index.css'

import ExtendedAdminLayout from './layouts/ExtendedAdminLayout.vue'
import ExtendedAdminLayoutStacked from './layouts/ExtendedAdminLayoutStacked.vue'

import { setLocale } from 'yup'
import { fr } from 'yup-locales'

const pinia = createPinia()

// Set locale for yup validator
setLocale(fr)

const app = createApp(App)
const router = getRouter(pinia)

app.use(pinia)
app.use(AuthPlugin)
app.use(AdminPlugin, AdminConfig)

// Insert before router, router must be a variable name, no function allowed
registerSupernovaRoutes(router)

app.use(router)

//app.component('MainLayout', ExtendedAdminLayout)
app.component('MainLayout', ExtendedAdminLayoutStacked)

app.mount('#app')
