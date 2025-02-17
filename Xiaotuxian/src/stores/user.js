import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
  //定义管理用户数据的state
  const userInfo = ref([]);
  //定义获取接口数据的action函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password });
    userInfo.value = res.data.result;
    // console.log(res.data.result);
  };

  // 退出时清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {};
  };
  return {
    userInfo,
    getUserInfo,
    clearUserInfo,
  };
},
    {
     persist: true,
    }
)