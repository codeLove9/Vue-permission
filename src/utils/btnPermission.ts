import router from "@/router/index"

export const initVueDirectives = (app: any) => {
  app.directive("permission", {
    //BUG： 不加生命周期直接报错
    mounted(el: any, binding: any) {
      // console.log(el);
      // console.log(el.attributes)

      const right = binding.value.right
      // console.log(right, isAbled)
      // console.log(router.currentRoute.value.meta)
      const currentRouteMeta = Object.values(router.currentRoute.value.meta)
      if (currentRouteMeta) {
        // 没有权限
        if (!~currentRouteMeta.findIndex(item => item === right)) {
          const isAbled = binding.value.isAbled
          if (isAbled === false) {
            // console.log(el, el.parentNode)
            el.parentNode.removeChild(el)
          } else {
            // console.log(el, el.parentNode)

            el.classList.add("is-disabled")
          }
        }
      }
    }
  })
}
