<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <el-button type="primary" size="default" @click="exportExcel">导出Excel</el-button>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
]

const exportExcel = () => {
  import("@/utils/Export2Excel.js").then((excel: any) => {
    // excel表示导入的模块对象      //import方法执行完毕返回的是一个promise对象，
    // 在then方法中我们可以拿到使用的模块对象
    // console.log(excel)
    excel.export_json_to_excel({
      header: ["姓名", "工资"], // 表头 必填
      data: [
        ["刘备", 100], //重点关注data的配置部分，我们发现它需要一个严格的二维数组
        ["关羽", 500]
      ], // 具体数据 必填
      filename: "excel-list", // 文件名称
      autoWidth: true, // 宽度是否自适应
      bookType: "xlsx" // 生成的文件类型
    })
  })
}
</script>
