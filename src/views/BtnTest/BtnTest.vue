<template>
  <div style="margin-top: 30px">
    <el-button type="primary" v-permission="{ right: 'add', isAbled: true }">新增</el-button>
    <el-button type="primary" v-permission="{ right: 'search', isAbled: true }">搜索</el-button>
    <el-button type="primary" v-permission="{ right: 'edit', isAbled: false }">编辑</el-button>
    <el-button type="primary" v-permission="{ right: 'delete', isAbled: false }">删除</el-button>
    <p style="margin-top: 30px">通过封装v-permisson指令实现按钮权限</p>
    <p style="margin-top: 20px">admin账户都可点击</p>
    <p style="margin-top: 10px">普通账户新增按钮不可点击,编辑和删除按钮直接不可见</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from "vue"
</script>

<style lang="less" scoped></style>
