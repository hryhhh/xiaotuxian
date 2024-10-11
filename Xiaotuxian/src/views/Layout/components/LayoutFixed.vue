<template>
<div class="app">
    <div class="header-sticky" :class="{ show : y > 78 }">
        <div class="container">
            <router-link class="logo" to="/"></router-link>
            <LayoutHeaderNav/>
            <div class="right">
                <RouterLink to="/">品牌</RouterLink>
                <RouterLink to="/">专题</RouterLink>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import LayoutHeaderNav from './LayoutHeaderNav.vue';
import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)

</script>

<style lang='scss' scoped>
.header-sticky{
  width: 100%;
  height: 80px;
  position: fixed;//使头部固定在视口内的指定位置，即使页面滚动也会保持在那里
  left: 0;
  top: 0;
  z-index: 999;//确保头部在页面的其他元素之上显示
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);//将头部向上平移其自身高度的100%，即完全移出视口,保证在头部需要显示之前，它是不可见的。
  opacity: 0; //确保在显示之前不可见
  &.show {
    transition: all 0.3s linear;//过渡效果
    transform: none;
    opacity: 1;
  }

  .container {
    margin: auto;
    display: flex;
    align-items: center;
    width: 80%;
  }
  
  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      color: #333;
      &:hover {
        color: $xtxColor;
      }
    }
  }
}
</style>