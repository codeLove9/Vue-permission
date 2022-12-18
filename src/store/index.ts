import { App } from "vue"
import { createStore } from "vuex"
interface storeITF {
  collapse: boolean
  breadCrumb: {
    path?: string
  }
  tagsList: {
    path?: string
    name?: string
    label?: string
    icon?: string
  }[]
  menu: [],
}

const store = createStore<storeITF>({
  state() {
    return {
      collapse: false,
      breadCrumb: {},
      tagsList: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "home"
        }
      ],
      menu: JSON.parse(window.localStorage.getItem("menu") as string) || [],
    }
  },
  mutations: {
    setCollapse(state, Payload) {
      state.collapse = !state.collapse
    },
    refreshBreadCrumb(state, Payload) {
      if (Payload.path !== "/home") {
        state.breadCrumb = Payload
        state.tagsList.findIndex(item => item.name == state.breadCrumb)
        if (!~state.tagsList.findIndex(item => item.path === state.breadCrumb.path)) {
          state.tagsList = [...state.tagsList, state.breadCrumb]
        }
      }
    },
    closeTag(state, Payload) {
      state.tagsList = state.tagsList.filter(item => item.path !== Payload.path)
      state.breadCrumb = {}
    },
    storageData(state, Payload) {
      // console.log(Payload)
      state.menu = Payload.menu
      window.localStorage.setItem("menu", JSON.stringify(Payload.menu))
      window.localStorage.setItem("token", Payload.token)
      window.localStorage.setItem("userInfo", JSON.stringify(Payload.userInfo))
      window.localStorage.setItem("rightList", JSON.stringify(Payload.rightList))

    }
  }
})

export const initStore = (app: App<Element>) => {
  app.use(store)
}

export default store
