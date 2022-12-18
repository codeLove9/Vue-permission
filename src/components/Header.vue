<template>
  <div class="left">
    <el-button size="small" @click="handelCollapse">
      <el-icon size="20">
        <Menu />
      </el-icon>
    </el-button>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: breadCrumbInfo.path }" v-if="breadCrumbInfo">{{
        breadCrumbInfo.label
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="right">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="50" :src="avatar" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <router-link to="/home">首页</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided @click="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, computed, nextTick } from "vue"
import avatar from "@/assets/img/avatar.jpg"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
const store = useStore()
const handelCollapse = () => {
  store.commit("setCollapse")
}
const breadCrumbInfo = computed(() => {
  return store.state.breadCrumb
})

const router = useRouter()
const logOut = () => {
  window.localStorage.clear()
  ElMessage({
    type: "success",
    message: "退出成功"
  })
  router.push("/login")
  location.reload()
}
</script>

<style lang="less" scoped>
.left {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 30px;
  }
  :deep(.el-breadcrumb__item) {
    .el-breadcrumb__inner {
      cursor: pointer;
      width: 30px;
      height: 15px;
      color: #ccc;
      font-weight: normal;
    }
    &:last-child {
      .el-breadcrumb__inner {
        width: auto;
        height: 15px;
        color: #fff;
      }
    }
  }
  h3 {
    color: #eee;
  }
}
</style>
