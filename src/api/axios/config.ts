// 当前的环境
const env = import.meta.env.MODE || "production"

interface EnvConfigITF {
  [k: string]: {}
}

interface config {
  env: string
  mock: boolean
  baseApi?: string
  mockApi?: string
}

const EnvConfig: EnvConfigITF = {
  development: {
    baseApi: "/api",
    mockApi: " https://www.fastmock.site/mock/89e911b92b4c30a955ca1d339a96e9f2/api"
  },
  test: {
    baseApi: "test/future.com/api",
    mockApi: " https://www.fastmock.site/mock/89e911b92b4c30a955ca1d339a96e9f2/api"
  },
  prod: {
    baseApi: "/future.com/api",
    mockApi: " https://www.fastmock.site/mock/89e911b92b4c30a955ca1d339a96e9f2/api"
  }
}
const config: config = {
  env,
  // mock的总开关
  mock: true,
  ...EnvConfig[env]
}
export default config
