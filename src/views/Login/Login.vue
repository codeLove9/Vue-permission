<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">Login</div>
      <div class="form-wrapper">
        <input type="text" name="username" placeholder="username" class="input-item" v-model="loginInfo.username" />
        <input type="password" name="password" placeholder="password" class="input-item" v-model="loginInfo.password" />
        <div class="btn" @click="handeleLogin">Login</div>
      </div>
      <div class="msg">
        <div>管理员账号: admin</div>
        <div>普通用户账号: user</div>
        <div>账号密码一致</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, onUnmounted } from "vue"
import { getMenuAPI } from "@/api/api"
import { useStore } from "vuex"
import {initDynamicRoutes} from '@/router/index'
import { useRouter } from "vue-router";
const loginInfo = reactive({
  username: "admin",
  password: "admin"
})
const store = useStore()
const router = useRouter()
const handeleLogin = async () => {
  const username = loginInfo.username
  const password = loginInfo.password
  const res = await getMenuAPI({ username, password })
  if (res.code == 200) {
    store.commit("storageData", res.data)
    initDynamicRoutes()
    router.push("/home")
    ElMessage({
      type: "success",
      message: "登陆成功"
    })
  } else {
    ElMessage({
      type: "error",
      message: "登陆失败"
    })
  }
}
const keyUp = (e: any) => {
  if (e.key == "Enter") {
    handeleLogin()
  }
}
onMounted(() => {
  window.addEventListener("keyup", keyUp)
})
onUnmounted(() => {
  window.removeEventListener("keyup", keyUp, false)
})
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-wrapper {
  background-color: #fff;
  width: 400px;
  height: 500px;
  border-radius: 15px;
  padding: 0 50px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}
.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}
.input-item:placeholder {
  text-transform: uppercase;
}
.btn {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
}
.msg {
  text-align: center;
  line-height: 25px;
}
div {
  text-decoration-line: none;
  color: #abc1ee;
}
</style>
