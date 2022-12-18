<template>
  <el-menu class="el-menu-vertical-demo" text-color="rgb(82, 70, 75)" :collapse="collapse" router active-text-color="rgb(231, 173, 14)">
    <h3 v-show="store.state.collapse">后台</h3>
    <h3 v-show="!store.state.collapse">后台管理</h3>
    <!-- 一级菜单 -->
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="store.commit('refreshBreadCrumb', { path: item.path, label: item.label })"
    >
      <el-icon>
        <component class="icons" :is="item.icon"></component>
      </el-icon>
      <span>{{ item.label }}</span>
    </el-menu-item>
    <!-- 二级菜单 -->
    <el-sub-menu :index="item.label" v-for="item in hasChildren" :key="item.path">
      <template #title>
        <el-icon>
          <component class="icons" :is="item.icon"></component>
        </el-icon>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item
        style="background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);"
        :index="itemChild.path"
        v-for="itemChild in item.children"
        :key="itemChild.path"
        @click="store.commit('refreshBreadCrumb', { path: itemChild.path, label: itemChild.label })"
      >
        <el-icon>
          <component class="icons" :is="itemChild.icon"></component>
        </el-icon>
        {{ itemChild.label }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, computed } from "vue"
import { useStore } from "vuex"
interface ListItf {
  path: string
  name?: string
  label: string
  icon: string
  url?: string
  children?: Array<any>
}
// const list: ListItf[] = reactive([
//   {
//     path: "/user",
//     name: "user",
//     label: "用户管理",
//     icon: "user",
//     url: "UserManage/UserManage"
//   },
//   {
//     label: "其他",
//     icon: "location",
//     path: "/other",
//     children: [
//       {
//         path: "/page1",
//         name: "page1",
//         label: "页面1",
//         icon: "setting",
//         url: "Other/PageOne"
//       },
//       {
//         path: "/page2",
//         name: "page2",
//         label: "页面2",
//         icon: "setting",
//         url: "Other/PageTwo"
//       }
//     ]
//   }
// ])
const store = useStore()
const collapse = computed(() => store.state.collapse)
const dynamicList = computed<ListItf[]>(() => store.state.menu)

const noChildren = computed(() => {
  return dynamicList.value.filter(item => !item.children)
})

const hasChildren = computed(() => {
  return dynamicList.value.filter(item => item.children)
})
</script>

<style lang="less" scoped>
.el-menu {
  height: 100vh;
  border-right: none;
 background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);

  h3 {
    line-height: 48px;
    color: rgb(82, 70, 75);
    text-align: center;
  }
  .el-submenu__title:hover,
  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
