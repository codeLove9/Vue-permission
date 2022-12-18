<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="store.state.collapse ? '64px' : '180px'">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <Tag/>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from "vue"
import Header from "@/components/Header.vue"
import Aside from "@/components/Aside.vue"
import Tag from '@/components/Tag.vue'
import { useStore } from "vuex"
const store = useStore()
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  // background-color: #abc1ee;
  //  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  background-image: linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%);
}
</style>
