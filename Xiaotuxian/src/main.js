import '@/styles/common.scss'

//引入懒加载指令插件并注册
import { lazyPlugin } from './directives'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate);
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')

