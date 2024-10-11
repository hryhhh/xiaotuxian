<template>
  <div class="app">
    <div class="nav">
      <template v-if="userStore.userInfo.token">
        <li>
          <a class="name">{{ userStore.userInfo.account }}</a>
        </li>
        <li>
          <el-popconfirm
            @confirm="confirm"
            title="确认退出吗?"
            confirm-button-text="确认"
            cancel-button-text="取消"
          >
            <template #reference>
              <a>退出登录</a>
            </template>
          </el-popconfirm>
        </li>
        <li><a>我的订单</a></li>
        <li><a>会员中心</a></li>
      </template>
      <template v-else>
        <a @click="$router.push('/login')"> 请先登录</a>
        <a>帮助中心</a>
        <a>关于我们</a>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const userStore = useUserStore();

// 退出登录业务逻辑实现
const confirm = () => {
  console.log("用户要退出登录了");

  userStore.clearUserInfo(); // 清除用户信息 触发action

  router.push("/login");
};
</script>

<style lang='scss' scoped>
.app {
  background-color: #333;
}
.nav {
  display: flex;
  justify-content: end;
  height: 40px;
  margin: auto;
  padding: 9px;
  color: white;
  width: 80%;
}

a {
  padding: 0 8px;
  color: #bbb9b9;
  font-size: 14px;
  &:hover {
    color: $xtxColor;
  }
  border-right: 2px solid #666;
  &:last-child {
    border-right: none;
  }
}
</style>