import { createApp } from "vue"
import App from "./App.vue"
import { initRouter } from "@/router/index"
import { initStore } from "@/store/index"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import "@/assets/less/index.less"
import "@/api/mock/mockServer"
import { initDynamicRoutes } from "@/router/index"
import { initVueDirectives } from "./utils/btnPermission"

initDynamicRoutes()

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
initRouter(app)
initStore(app)
initVueDirectives(app)
app.mount("#app")
