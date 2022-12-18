<template>
  <div class="content" style="margin-top: 20px">
    <el-button @click="exportPDF" size="small" type="primary">导出PDF</el-button>
    <div id="main-charts" class="main-charts">
      <el-card shadow="always" :body-style="{'background-image': 'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)'}"
        ><div class="article">
          <h2>活动策划方案</h2>
          <p><strong>一、活动地点：</strong></p>
          <p>龙岗区南澳镇西冲海滩区域</p>
          <p><strong>二、活动时间：</strong></p>
          <p>xx年7月14日（星期四）中午xx年7月15日（星期五）中午（第20周）</p>
          <p><strong>三、活动人数：</strong></p>
          <p>秘书组全体人员与家属（每人只能带一名家属）</p>
          <p><strong>四、活动策划、</strong></p>
          <p>负责人：xx</p>
          <p><strong>五、活动目的：</strong></p>
          <p>
            让全组的人来一次海滩，不仅仅能够更加亲近大自然，呼吸到更加清新的空气，也让我们体验到海边运动的欢乐与充实，更让我们体验到组员之间团结互助的重要性，加强组员之间的熟悉感，创造一个团结友善的氛围，将大家紧密联系，并且让大家学会有职责感。
          </p>
          <p><strong>六、活动资料：</strong></p>
          <p>
            烧烤、海边观日出、海边观日落、游泳、沙滩排球、沙滩足球、放风筝、捉螃蟹、搓麻将、夜间游戏（暂时保密）、自由活动、k歌（没有不能玩的，仅有想不到能玩的，只要大家开心，都能够玩）
          </p>
          <p><strong>七、活动流程：</strong></p>
          <p>
            14日上午12：00学校西门集中→12：30到银湖汽车站坐e11到南澳→然后包车到西冲鹤薮→中间休息→16：00团体进入海滩活动→19点烧烤活动开始→22点活动结束，回房洗澡睡觉进行晚间活动→15日早上9：00早餐时间→10：00后续活动→12：00午餐是时间→中午休息→15：00团体坐车回家
          </p>
          <p><strong>八、活动细则：</strong></p>
          <p>
            16：0019：00自由选择游泳、沙滩足球、沙滩排球，有兴趣者也可选择放风筝、捉螃蟹、沙雕、拾贝壳（异常注意：由于捉螃蟹的礁石位于海滩两端离活动地点有必须距离，前往必须要结伴而行且至少一男同行以确保安全）
          </p>
          <p>19：0019：30烧烤前的准备</p>
          <p>19：3022：00全体人员烧烤</p>
          <p>22：30以后自由安排（搓麻将、看电视、睡觉等）</p>
          <p>05：3007：00全体人员海边观日出</p>
          <p>07：0009：00全体人员早点时间（自我负责）</p>
          <p>10：0012：00后续活动</p>
          <p>12：00午饭时间</p>
          <p>15：00准时登车回到市区</p>
          <p><strong>九、注意事项：</strong></p>
          <p>
            1、安全、环保、自助的户外活动理念：本次活动地点为海滩，大海本就神秘莫测，加之西冲海滩并未完全开发，海岸处礁石林立，水下暗流涌动，极易构成水下漩涡，水况复杂，存在相当程度的风险，加之未知的天气、风浪等因素，极易出险，故要求参与者必须时刻保有安全第一的心态；不得单独下海、入睡后不允许再下海游泳，否则有任何安全事故由自我承担。
          </p>
          <p>
            2、自备垃圾收集袋等环保用品，鼓励拾捡垃圾，提倡环保，尽量不破坏植被、不留下污染的痕迹；原则上全程需独立自助，同时鼓励们同学们发挥团结友爱、互帮互助的精神；以此树立良好形象。
          </p>
          <p>
            3、不会游水者必须自备游泳圈才可下水（泳圈自备），否则不得下水，若下水一切后果自负；身体不适者必须告知负责人，并且不得下水。
          </p>
          <p>4、出发前请把组织人的电话号码留给家人或者朋友，以备紧急时联络；并请记住紧急求救电话；</p>
          <p>
            5、费用实行aa制，所有参与活动人员，按人数分摊活动费用，家属也是自费，费用以人数最终定夺；关于活动的文字、图片和策划书，将以邮件的方式发给各位。
          </p>
          <p>
            6、不排除根据当时的天气、路况实际情景对活动计划和路线做出调整的可能；请大家自觉遵守活动规则，多谢大家合作。
          </p>
          <p>
            7、活动中听从指挥，发扬团队协作精神，倡导自助与必要的互助相结合的户外理念；严禁单独行动，不遵守规则者将受到相应的处罚。
          </p>
          <p>8、此次活动能够带家属，限制每位只能带一位家属，家属安全由带家属者自我负责。</p>
          <p>
            9、本次活动每人的费用是150元（包括交100元+50元已交的组费），家属由于未交组费需交150元。（费用暂定的，会根据最终人数多少进行合理预算）。
          </p>
          <p>10、本次活动是海边，大家必须做好安全措施再下水，为了大家的安全，请不要去危险的海域，不要私自活动。</p>
          ......
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted } from "vue"
// 引入插件
import html2canvas, { Options } from "html2canvas"
import jsPDF from "jspdf"

const exportPDF = () => {
  const ele: HTMLElement | null = document.getElementById("main-charts")
  html2canvas(
    ele as HTMLElement,
    {
      dpi: 96, // 分辨率
      scale: 2, // 设置缩放
      useCORS: true, // 允许canvas画布内 可以跨域请求外部链接图片, 允许跨域请求。,
      // backgroundColor:'#ffffff',这样背景还是黑的
      bgcolor: "#ffffff", // 应该这样写
      logging: false // 打印日志用的 可以不加默认为false
    } as Partial<Options>
  ).then(canvas => {
    const contentWidth = canvas.width
    const contentHeight = canvas.height
    // 一页pdf显示html页面生成的canvas高度;
    const pageHeight = (contentWidth / 592.28) * 841.89
    // 未生成pdf的html页面高度
    let leftHeight = contentHeight
    // 页面偏移
    let position = 0
    // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    const imgWidth = 595.28
    const imgHeight = (595.28 / contentWidth) * contentHeight
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
    const pageData = canvas.toDataURL("image/jpeg", 1.0)
    const pdf = new jsPDF("" as "p", "pt", "a4")
    if (leftHeight < pageHeight) {
      // 在pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置在pdf中显示；
      pdf.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight)
    } else {
      // 分页
      while (leftHeight > 0) {
        pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight)
        leftHeight -= pageHeight
        position -= 841.89
        // 避免添加空白页
        if (leftHeight > 0) {
          pdf.addPage()
        }
      }
    }
    // 可动态生成
    pdf.save(`文件名.pdf`)
  })
}
</script>

<style lang="less" scoped>
.main-charts {
  margin-top: 20px;
  padding: 30px;
  height: 80vh;
}
</style>
