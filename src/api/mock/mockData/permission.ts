import Mock from "mockjs"
export default {
  getMenu: (config: any) => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === "admin" && password === "admin") {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: "/home",
              name: "home",
              label: "首页",
              icon: "House",
              url: "Home/Home"
            },
            {
              path: "/introduce",
              name: "introduce",
              label: "项目介绍",
              icon: "Document",
              url: "Introduce/Introduce"
            },
            {
              path: "/user",
              name: "user",
              label: "用户管理",
              icon: "user",
              url: "User/User"
            },
            {
              path: "/menuTest",
              name: "menuTest",
              label: "动态菜单测试页",
              icon: "Open",
              url: "MenuTest/MenuTest"
            },
            {
              label: "错误页面",
              icon: "DocumentDelete",
              children: [
                {
                  path: "/401",
                  name: "401",
                  label: "401页面",
                  icon: "CloseBold",
                  url: "ErrorPage/401"
                },
                {
                  path: "/404",
                  name: "404",
                  label: "404页面",
                  icon: "CloseBold",
                  url: "ErrorPage/404"
                }
              ]
            },
            {
              label: "其他",
              icon: "location",
              children: [
                {
                  path: "/page1",
                  name: "page1",
                  label: "导出Excel",
                  icon: "setting",
                  url: "Others/PageOne"
                },
                {
                  path: "/page2",
                  name: "page2",
                  label: "导出PDF",
                  icon: "setting",
                  url: "Others/PageTwo"
                },
                {
                  path: "/page3",
                  name: "page3",
                  label: "导出PNG图片",
                  icon: "setting",
                  url: "Others/PageThree"
                }
              ]
            }
          ],
          userInfo: { username: "小陈1号", role: "超级管理员", preTime: new Date(), preAddr: "武汉" },
          token: Mock.Random.guid(),
          rightList: ["search", "add", "edit", "delete"],
          message: "获取成功"
        }
      }
    } else if (username === "user" && password === "user") {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: "/home",
              name: "home",
              label: "首页",
              icon: "House",
              url: "Home/Home"
            },
            {
              path: "/introduce",
              name: "introduce",
              label: "项目介绍",
              icon: "Document",
              url: "Introduce/Introduce"
            },
            {
              path: "/user",
              name: "user",
              label: "用户管理",
              icon: "user",
              url: "User/User"
            },
            {
              label: "错误页面",
              icon: "DocumentDelete",
              children: [
                {
                  path: "/401",
                  name: "401",
                  label: "401页面",
                  icon: "CloseBold",
                  url: "ErrorPage/401"
                },
                {
                  path: "/404",
                  name: "404",
                  label: "404页面",
                  icon: "CloseBold",
                  url: "ErrorPage/404"
                }
              ]
            },
            {
              label: "其他",
              icon: "location",
              children: [
                {
                  path: "/page1",
                  name: "page1",
                  label: "页面1",
                  icon: "setting",
                  url: "Others/PageOne"
                },
                {
                  path: "/page2",
                  name: "page2",
                  label: "页面2",
                  icon: "setting",
                  url: "Others/PageTwo"
                },
                {
                  path: "/page3",
                  name: "page3",
                  label: "导出PNG图片",
                  icon: "setting",
                  url: "Others/PageThree"
                }
              ]
            }
          ],
          userInfo: { username: "小陈2号", role: "普通用户", preTime: new Date(), preAddr: "武汉" },
          token: Mock.Random.guid(),
          rightList: ["search", "add"],
          message: "获取成功"
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: "密码错误"
        }
      }
    }
  }
}
