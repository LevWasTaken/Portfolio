import { createApp } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App).use(router)

Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true })).forEach(
  (i) => i.install?.({ app, router })
)

app.mount('#app')
