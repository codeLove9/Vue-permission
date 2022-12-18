<template>
  <div class="user-header">
    <el-button type="primary" @click="dialogVisible = true" v-permission="{ right: 'add', isAbled: false }"
      >+新增</el-button
    >
    <el-form :inline="true" :model="formInline">
      <el-form-item>
        <el-input v-model="formInline.keyword" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSerch" v-permission="{ right: 'search', isAbled: true }"
          >搜索</el-button
        >
      </el-form-item>
    </el-form>
  </div>
  <div class="table">
    <el-table :data="tableData" style="width: 100%; height: 650px">
      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 180"
      />
      <el-table-column fixed="right" label="操作" width="220">
        <template #default="{ row }">
          <el-button
            type="primary"
            size="small"
            @click="handleEdit(row)"
            v-permission="{ right: 'edit', isAbled: false }"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            @click="handleDelete(row)"
            v-permission="{ right: 'delete', isAbled: false }"
            >删除</el-button
          >
          <el-button
            type="info"
            v-if="role === '普通用户'"
            v-permission="{ right: 'delete', isAbled: true }"
            >您没有权限,请联系管理员</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="config.total"
      :default-page-size="20"
      @current-change="changePageHandle"
      style="margin: 40px 500px"
    />
  </div>
  <el-dialog
    v-model="dialogVisible"
    :title="action === 'edit' ? '编辑用户' : '添加用户'"
    width="33%"
    :before-close="handleClose"
  >
    <el-form
      :inline="true"
      :model="formUser"
      class="demo-form-inline"
      label-position="left"
      label-width="70px"
      ref="userForm"
    >
      <el-form-item
        label="姓名"
        prop="name"
        :rules="[
          { required: true, message: '姓名是必填项' },
          { type: 'string', message: '所填项必须是汉字' }
        ]"
      >
        <el-input v-model="formUser.name" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item
        label="年龄"
        prop="age"
        :rules="[
          { required: true, message: '年龄是必填项' },
          { type: 'number', message: '所填项必须是数字' }
        ]"
        label-width="81px"
      >
        <el-input v-model.number="formUser.age" placeholder="请输入年龄" style="width: 180px" />
      </el-form-item>
      <el-form-item label="性别" prop="sex" :rules="[{ required: true, message: '性别是必填项' }]">
        <el-select v-model="formUser.sex" placeholder="请选择性别" style="width: 193px">
          <el-option label="男" value="1" />
          <el-option label="女" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期" prop="birth" :rules="[{ required: true, message: '必填项' }]" label-width="80px">
        <el-date-picker
          v-model="formUser.birth"
          type="date"
          label="日期"
          placeholder="请选择日期"
          style="width: 180px"
        />
      </el-form-item>
      <el-form-item label="地址" prop="addr" :rules="[{ required: true, message: '必填项' }]">
        <el-input v-model="formUser.addr" placeholder="请输入地址" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="submit"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, nextTick } from "vue"
import { getUserDataAPI, addUserInfoAPI, updateUserInfoAPI, deleteUserInfoAPI, formatDateUtils } from "@/api/api"
const { role } = JSON.parse(window.localStorage.getItem("userInfo") as string)

const state = reactive<any>({
  tableData: [],
  tableLabel: [
    {
      prop: "name",
      label: "姓名",
      width: 200
    },
    {
      prop: "age",
      label: "年龄",
      width: 200
    },
    {
      prop: "sex",
      label: "性别",
      width: 200
    },
    {
      prop: "birth",
      label: "出生日期",
      width: 300
    },
    {
      prop: "addr",
      label: "地址",
      width: 400
    }
  ],
  config: {
    total: "" || 10,
    page: 1
  },
  formInline: {
    keyword: ""
  },
  dialogVisible: false,
  formUser: {
    name: "",
    age: "",
    sex: "",
    birth: "",
    addr: ""
  },
  action: ""
})
let { tableData, tableLabel, config, formInline, dialogVisible, formUser, action } = toRefs(state)

const userForm = ref()

const changePageHandle = (pageNo: number) => {
  config.value.page = pageNo
  getDataList(config.value)
}

const getDataList = async (config: any) => {
  const { data: res } = await getUserDataAPI(config)

  //   BUG: 传进来的参数已经是个proxy对象了， 不需要再.value，否则报错！！！
  //   console.log("参数config的值", config) 打印出来是一个proxy
  config.total = res.count

  const newList = res.list.map((item: any) => {
    item.sex = item.sex === 0 ? "女" : "男"
    return item
  })
  tableData.value = newList
}

const handleSerch = () => {
  const name = formInline.value.keyword
  getDataList({ name })
}

const submit = async () => {
  if (!userForm) return
  await userForm.value.validate(async (valid: boolean) => {
    if (valid) {
      if (action.value === "edit") {
        formUser.value.sex = formUser.value.sex == "女" ? 0 : formUser.value.sex
        const res = await updateUserInfoAPI(formUser.value)
        if (res.code == 200) {
          getDataList(config.value)
        }
      } else {
        formUser.value.birth = formatDateUtils(formUser.value.birth)

        const res = await addUserInfoAPI(formUser.value)
        if (res.code === 200) {
          getDataList(config.value)
        }
      }
      userForm.value.resetFields()
      dialogVisible.value = false
    } else {
      ElMessage({
        message: "请输入正确的信息！",
        type: "error"
      })
    }
  })
}

const cancel = () => {
  dialogVisible.value = false
  userForm.value.resetFields()
}

const handleClose = (done: () => void) => {
  ElMessageBox.confirm("确定关闭吗?")
    .then(() => {
      userForm.value.resetFields()
      done()
    })
    .catch(() => {
      // catch error
      ElMessage({
        message: "网络繁忙，请稍后重试....",
        type: "error"
      })
    })
}
interface RowITF {
  id: string
  name: string
  age: string
  sex: string
  birth: string
  addr: string
}
const handleEdit = async (row: RowITF) => {
  action.value = "edit"
  dialogVisible.value = true
  nextTick(() => {
    formUser.value = { ...row }
  })
}

const handleDelete = async ({ id }: { id: string }) => {
  ElMessageBox.confirm("确定要删除吗?")
    .then(async () => {
      const res = await deleteUserInfoAPI({ id })
      if (res.code == 200) {
        getDataList(config.value)
      } else {
        ElMessage({
          message: "请求发送失败....",
          type: "error"
        })
      }
    })
    .catch(() => {
      // catch error
      ElMessage({
        message: "网络繁忙，请稍后重试....",
        type: "error"
      })
    })
}

onMounted(() => {
  getDataList(config.value)
})
</script>

<style lang="less" scoped>
.user-header {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
