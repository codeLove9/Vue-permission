import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from "vue-router"
import { App } from "vue"
import store from "@/store/index"

const routes: readonly RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/Main.vue"),
    redirect: "/home",
    name: "main",
    children: [
      // { path: "/home", name: "home", component: () => import("@/views/Home/Home.vue") },
      // { path: "/user", name: "user", component: () => import("@/views/User/User.vue") },
      // { path: "/page1", name: "page1", component: () => import("@/views/Others/PageOne.vue") },
      // { path: "/page2", name: "page2", component: () => import("@/views/Others/pageTwo.vue") }
    ]
  },
  { path: "/login", component: () => import("@/views/Login/Login.vue") },
  { path: "/404", component: () => import("@/views/ErrorPage/404.vue") },
  { path: "/401", component: () => import("@/views/ErrorPage/401.vue") },
  { path: "/:catchAll(.*)", redirect: "/404" }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next()
  } else {
    const token = window.localStorage.getItem("token")
    if (!token) {
      next("/login")
    } else {
      next()
    }
  }
})

export const initDynamicRoutes = () => {
  const menu = store.state.menu
  const newDynamicRoutes: any = []

  const addDynamicRoutes = (val: any) => {
    const modules = import.meta.glob("/src/views/*/*.vue")

    val.forEach((item: any) => {
      if (item.children) {
        addDynamicRoutes(item.children)
      } else {
        const path = item.path
        const name = item.name
        const rightList = JSON.parse(window.localStorage.getItem("rightList") as string)
        // newDynamicRoutes.push({ path, name, component: () => import(`@/views/${item.url}.vue`) })
        newDynamicRoutes.push({ path, name, component: modules[`/src/views/${item.url}.vue`], meta: rightList })
      }
    })
  }
  addDynamicRoutes(menu)

  newDynamicRoutes.forEach((item: any) => {
    router.addRoute("main", item)
  })
}
export const initRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
