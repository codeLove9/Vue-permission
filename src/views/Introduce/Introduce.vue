<template>
  <!-- Vue3+tpyescript+ElementUI vuex vue-router 二次封装axios fastMock 二次封装Tag组件 Echrts
   技术栈、功能、权限、亮点 -->
  <div class="echart" ref="main"></div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted } from "vue"
import * as echarts from "echarts"
const main = ref()

onMounted(() => {
  let myChart = echarts.init(main.value as HTMLElement)
  let option
  const data = {
    name: "后台管理系统",
    children: [
      {
        name: "技术栈",
        children: [
          {
            name: "Vue3"
          },
          {
            name: "Element-Plus"
          },
          {
            name: "Vite"
          },
          {
            name: "typescript"
          },
          {
            name: "Vuex"
          },
          {
            name: "Vue-router"
          },
          {
            name: "axios"
          },
          {
            name: "本地Mock"
          },
          {
            name: "线上fastMock"
          },
          {
            name: "Echarts"
          }
        ]
      },
      {
        name: "项目功能",
        children: [
          { name: "登录页" },
          { name: "首页" },
          { name: "用户管理页" },
          { name: "项目介绍页" },
          { name: "分页处理" },
          { name: "面包屑" },
          { name: "用户crud" },
          { name: "路由守卫" },
          { name: "动态添加路由" },
          { name: "权限管理功能" },
          { name: "二次封装axios" },
          { name: "封装自定义指令v-permission控制按钮" },
          { name: "基于ElementUI二次封装Tag组件" },
          { name: "Echarts柱状图、折线图、饼图、树形图" }
        ]
      },
      {
        name: "权限设计思路",
        children: [
          { name: "菜单权限", children: [{ name: "不同用户登录显示不同菜单" }] },
          {
            name: "路由权限",
            children: [
               { name: "强制用户登录后才能访问权限页" }, 
               { name: "限制用户只能访问自己有权限的页面，否则跳404页面" }
            ]
          },
          { name: "按钮权限", children: [{ name: "按钮只对有权限的用户显示或者被点击" }] },
          {
            name: "接口权限",
            children: [
              { name: "没有权限的用户通过F12非法修改元素display并点击发送请求，拦截拒绝发送给后端" },
              { name: "用户伪造新token或者修改token，直接拦截并清空信息，跳转登录页" }
            ]
          }
        ]
      }
    ]
  }
  option = {
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove"
    },
    series: [
      {
        type: "tree",
        id: 0,
        name: "tree1",
        data: [data],
        top: "0%",
        left: "5%",
        bottom: "0%",
        right: "30%",
        symbolSize: 15,
        edgeShape: "polyline",
        edgeForkPosition: "63%",
        initialTreeDepth: 3,
        lineStyle: {
          width: 2
        },
        label: {
          backgroundColor: "#fff",
          position: "left",
          verticalAlign: "middle",
          align: "right"
        },
        leaves: {
          label: {
            position: "right",
            verticalAlign: "middle",
            align: "left"
          }
        },
        emphasis: {
          focus: "descendant"
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  }

  option && myChart.setOption(option)
})
</script>

<style lang="less" scoped>
.echart {
  width: 88.8vw;
  height: 85vh;
  margin: 20px 0;
}
</style>
