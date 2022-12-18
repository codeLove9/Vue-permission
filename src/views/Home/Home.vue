<template>
  <el-row class="home" :gutter="20">
    <!-- 左侧 -->
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <el-avatar :src="avatar" />
          <div class="user-info">
            <p class="name" style="margin-bottom: 20px">{{ userInfo.username }}</p>
            <p class="role">{{ userInfo.role }}</p>
          </div>
        </div>
        <div class="login-info">
          <p>
            上次登录时间:<span>{{ userInfo.preTime }}</span>
          </p>
          <p>
            上次登录的地点:<span>{{ userInfo.preAddr }}</span>
          </p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 20px" height="450px">
        <el-table :data="tableData">
          <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"> </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="16" style="margin-top: 20px" class="right-num">
      <div class="num">
        <el-card :body-style="{ display: 'flex', padding: 0 }" v-for="item in countData" :key="item.name">
          <component class="icons" :is="item.icon" :style="{ background: item.color }"></component>

          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px">
        <div ref="echart" style="height: 280px"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <div ref="userechart" style="height: 240px"></div>
        </el-card>
        <el-card style="height: 260px">
          <div ref="videoechart" style="height: 240px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted } from "vue"
import avatar from "@/assets/img/avatar.jpg"
import { getTableDataAPI, getCountDataAPI, getEchartsData, formatDateUtils } from "@/api/api"
import * as echarts from "echarts"
import { useStore } from "vuex"

const userInfo = JSON.parse(window.localStorage.getItem("userInfo") as string)
userInfo.preTime =  formatDateUtils(userInfo.preTime)

let tableData = ref([])
const tableLabel = reactive({
  name: "课程",
  todayBuy: "今日购买",
  monthBuy: "本月购买",
  totalBuy: "总购买"
})
const getTableList = async () => {
  const { data: res } = await getTableDataAPI()
  tableData.value = res.tableData
}
interface countDataITF {
  color: string
  icon: string
  name: string
  value: number
}
let countData = ref<countDataITF[]>([])
const getCountData = async () => {
  const { data: res } = await getCountDataAPI()
  countData.value = res.countData
}
onMounted(() => {
  getTableList()
  getCountData()
  getChartData()
})

let xOptions = reactive({
  // 图例文字颜色
  textStyle: {
    color: "#333"
  },
  grid: {
    left: "20%"
  },
  // 提示框
  tooltip: {
    trigger: "axis"
  },
  xAxis: {
    type: "category", // 类目轴
    data: [],
    axisLine: {
      lineStyle: {
        color: "#17b3a3"
      }
    },
    axisLabel: {
      interval: 0,
      color: "#333"
    }
  },
  yAxis: [
    {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#17b3a3"
        }
      }
    }
  ],
  color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
  series: []
})
let pieOptions = reactive({
  tooltip: {
    trigger: "item"
  },
  color: ["#0f78f4", "#dd536b", "#9462e5", "#a6a6a6", "#e1bb22", "#39c362", "#3ed1cf"],
  series: []
})
let orderData = reactive<any>({
  xData: [],
  series: []
})
let userData = reactive<any>({
  xData: [],
  series: []
})
let videoData = reactive<any>({
  series: []
})
const echart = ref()
const userechart = ref()
const videoechart = ref()
const getChartData = async () => {
  let { data: result } = await getEchartsData()
  let res = result.orderData
  let userRes = result.userData
  let videoRes = result.videoData
  orderData.xData = res.date
  const keyArray = Object.keys(res.data[0])
  const series: any[] = []
  keyArray.forEach(key => {
    series.push({
      name: key,
      data: res.data.map((item: any) => item[key]),
      type: "line"
    })
  })
  orderData.series = series
  xOptions.xAxis.data = orderData.xData
  xOptions.series = orderData.series
  let hCharts = echarts.init(echart.value)
  hCharts.setOption(xOptions)

  userData.xData = userRes.map((item: any) => item.date)
  userData.series = [
    {
      name: "新增用户",
      data: userRes.map((item: any) => item.new),
      type: "bar"
    },
    {
      name: "活跃用户",
      data: userRes.map((item: any) => item.active),
      type: "bar"
    }
  ]

  xOptions.xAxis.data = userData.xData
  xOptions.series = userData.series
  let uEcharts = echarts.init(userechart.value)
  uEcharts.setOption(xOptions)
  videoData.series = [
    {
      data: videoRes,
      type: "pie"
    }
  ]
  pieOptions.series = videoData.series
  let vEcharts = echarts.init(videoechart.value)
  vEcharts.setOption(pieOptions)
}
</script>

<style lang="less" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    .el-avatar {
      width: 150px;
      height: 150px;
      margin-right: 40px;
    }
  }
  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
    .icons {
      width: 80px;
      height: 80px;
      font-size: 30px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt {
        font-size: 14px;
        text-align: center;
        color: #999;
      }
    }
  }
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
    }
  }
}
</style>
