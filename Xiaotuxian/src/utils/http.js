import axios from "axios";
import { useUserStore } from "@/stores/user";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
const userStore = useUserStore();
const httpInstance = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000
    
})

// 添加axios请求拦截器
httpInstance.interceptors.request.use(
  function (config) {
    //  从pinia获取token数据
    const userStore = useUserStore()
    //  按照后端的要求拼接token数据
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  function (error) {
    
    return Promise.reject(error);
  }
);

// 添加axios响应拦截器
httpInstance.interceptors.response.use(
  
  function (response) {

    return response;
  },
  function (error) {
    ElMessage({
      type: 'warning',
      message: error.response.data.message
    })
    if (error.response.status === 401) {
      userStore.clearUserInfo()
      router.push("/login")
    }
    return Promise.reject(error);
  }
);

export default httpInstance