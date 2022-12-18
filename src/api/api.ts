import { AxiosResponse } from "axios"
import request from "./axios/request"

export const getTableDataAPI = () => {
  return request({
    url: "/home/getTableData",
    method: "get",
    mock: true
  })
}

export const getCountDataAPI = () => {
  return request({
    url: "/home/getCountData",
    method: "get",
    mock: true
  })
}

export const getEchartsData = () => {
  return request({
    url: "/home/getEchartsData",
    method: "get",
    mock: true
  })
}

export const getUserDataAPI = (params?: any) => {
  return request({
    url: "/user/getUserData",
    method: "get",
    mock: false,
    data: params
  })
}

interface ManageResData {
  code?: number
  data?: any
}

export const addUserInfoAPI = (params?: any): Promise<ManageResData> => {
  return request({
    url: "/user/addUserInfo",
    method: "post",
    mock: false,
    data: params
  })
}

export const updateUserInfoAPI = (params?: any): Promise<ManageResData> => {
  return request({
    url: "/user/updateUserInfo",
    method: "put",
    mock: false,
    data: params
  })
}

export const deleteUserInfoAPI = (params?: any): Promise<ManageResData> => {
  return request({
    url: "/user/deleteUserInfo",
    method: "delete",
    mock: false,
    data: params
  })
}

export const getMenuAPI = (params?: any): Promise<ManageResData> => {
  return request({
    url: "/permission/getMenu",
    method: "post",
    mock: false,
    data: params
  })
}

export const formatDateUtils = (time: string) => {
  let date = new Date(time)
  let year = date.getFullYear(),
    month: number | string = date.getMonth() + 1, //月份是从0开始的
    day: number | string = date.getDate()
  month = month - 10 < 0 ? "0" + month : month
  day = day - 10 < 0 ? "0" + day : day
  let newTime = year + "-" + month + "-" + day + " "
  return newTime
}
