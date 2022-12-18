<template>
  <div class="content" style="margin-top: 20px">
    <el-button @click="exportPNG" size="small" type="primary">导出PNG</el-button>
    <div id="main-charts" class="main-charts">
      <el-card
        shadow="always"
        :body-style="{
          // 'background-image':
          //   'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)', 
            width: 'auto'
        }"
      >
      <img src="@/assets/img/avatar.jpg" alt="">
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted } from "vue"
// 引入插件
import html2canvas, { Options } from "html2canvas"
import jsPDF from "jspdf"
import { auto } from "@popperjs/core";

const exportPNG = () => {
  const ele: HTMLElement | null = document.getElementById("main-charts")
  html2canvas(ele as HTMLElement).then((canvas: any) => {
    const contentWidth = canvas.width
    const contentHeight = canvas.height
    const ctx: any = canvas.getContext("2d")
    // 添加水印
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.rotate((25 * Math.PI) / 180)
    ctx.font = "20px Microsoft Yahei"
    ctx.fillStyle = "rgba(184, 184, 184, 0.8)"
    for (let i = contentWidth * -1; i < contentWidth; i += 240) {
      for (let j = contentHeight * -1; j < contentHeight; j += 100) {
        // 填充文字，x 间距, y 间距
        ctx.fillText("水印名", i, j)
      }
    }
    const imgUrl = canvas.toDataURL("image/png")
    const tempLink = document.createElement("a") // 创建一个a标签
    tempLink.style.display = "none"
    tempLink.href = imgUrl
    tempLink.setAttribute("download", "文件名") // 给a标签添加下载属性
    if (typeof tempLink.download === "undefined") {
      tempLink.setAttribute("target", "_blank")
    }
    document.body.appendChild(tempLink) // 将a标签添加到body当中
    tempLink.click() // 启动下载
    document.body.removeChild(tempLink) // 下载完毕删除a标签
    window.URL.revokeObjectURL(imgUrl)
  })
}
</script>

<style lang="less" scoped>
.main-charts {
  margin: 20px auto;
  padding: 30px;
  width: 750px;
  height: auto;
}
</style>
