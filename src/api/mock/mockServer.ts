import Mock from "mockjs"
import homeAPI from "./mockData/home"
import userAPI from "./mockData/user"
import permissionAPI from "./mockData/permission"

// api前不写斜杠报错
Mock.mock("/api/home/getTableData", homeAPI.getTableData)

Mock.mock(/api\/user\/getUserData/, "get", userAPI.getUserList)

Mock.mock(/api\/user\/addUserInfo/, "post", userAPI.createUser)

Mock.mock(/api\/user\/updateUserInfo/, "put", userAPI.updateUser)

Mock.mock(/api\/user\/deleteUserInfo/, "delete", userAPI.deleteUser)

Mock.mock(/api\/permission\/getMenu/, "post", permissionAPI.getMenu)
