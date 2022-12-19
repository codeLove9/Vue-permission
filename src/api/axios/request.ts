import axios, { AxiosInstance } from "axios"
import config from "./config"
import { ElMessage } from "element-plus"
import router from '@/router/index'

interface optionsITF {
  url: string
  method: string
  data?: {}
  mock?: boolean
  params?: any
}

const NETWORK_ERROR = "网络请求异常，请稍后重试....."
const service: AxiosInstance = axios.create({
  baseURL: config.baseApi,
  timeout: 1000
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response: any) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.status === 200) {
      if (response.data.code == 200) {
        return response.data
      } else if (response.data.code === 401) {
        //token过期或者篡改了token，跳往401
        window.localStorage.clear()
        router.push('/401')
      } else {
        ElMessage.error(response.msg || NETWORK_ERROR)
        return Promise.reject(response.msg || NETWORK_ERROR)
      }
    } else {
      return Promise.reject(response)
    }
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

function request(options: optionsITF) {
  options.method = options.method || "get"
  if (options.method.toLowerCase() == "get") {
    options.params = options.data
  }
  // 对Mock处理
  let isMock = options.mock
  if (typeof isMock !== "undefined") {
    isMock = options.mock
  }
  // 对线上环境处理
  if (config.env == "production") {
    // service.defaults.baseURL = config.baseApi
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
  }

  return service(options)
}

export default request
