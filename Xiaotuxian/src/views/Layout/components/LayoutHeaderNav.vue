<template>
<div class="app">
    <ul class="header-nav">
        <li >
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li
          class="home"
          v-for="item in categoryStore.categoryList"
          :key="item.id">
          <RouterLink active-class="active" :to="`/category/${item.id}`">
            {{ item.name }}
          </RouterLink>
        </li>
    </ul>
</div>
</template>

<script setup>
import { useCategoryStore } from '@/stores/categoryStore'
const categoryStore = useCategoryStore()
</script>

<style lang='scss' scoped>
.header-nav{
  width: 700px;
  display: flex;
  padding-left: 30px;
  position: relative;
  z-index: 999;
  justify-content: space-around;
}
li{
  margin-right: 30px;
  a{
    font-size: 16px;
    color: #333;
    &:hover {
      color: $xtxColor;
    }
  }
}
.active{
  color: $xtxColor;
  border-bottom: 1px solid $xtxColor;
}
</style>