import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import locale from 'element-plus/es/locale/lang/zh-cn'

const vue = createApp(App);
vue.use(ElementPlus,{locale})
vue.mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    vue.component(key, component)
  }