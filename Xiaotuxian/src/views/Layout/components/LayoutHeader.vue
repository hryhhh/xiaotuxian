<template>
  <div class="app">
    <div class="container">
      <div class="logo">
        <img
          src="@/assets/images/logo.png"
          alt="logo"
          style="width: 200px; height: auto"
        />
      </div>
      <LayoutHeaderNav/>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜一搜" />
        <i class="iconfont icon-gouwuchekong" style="font-size:20px"></i>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import LayoutHeaderNav from "./LayoutHeaderNav.vue";

</script>

<style lang='scss' scoped>
.container {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.search{
  display: flex;
  gap: 8px;//设置图标和输入框之间的间距
}
input{
  width: 150px;
  height: 20px;
  padding-left: 2px;
  color: #666;
  border: 1px solid #f2f2f2;
}

</style>