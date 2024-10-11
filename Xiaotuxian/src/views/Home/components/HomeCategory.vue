<template>
  <div class="app">
    <div class="container">
      <ul class="menu">
        <li 
        v-for="(item,index) in categoryStore.categoryList" 
        :key="item.id"
        @mouseover="hoveredIndex=index"
        @mouseleave="hoveredIndex=null"
        :class="{'hovered':hoveredIndex === index }"
        >
          <RouterLink to="/">{{ item.name }}</RouterLink>
          <RouterLink
            v-for="i in item.children.slice(0, 2)"
            :key="i"
            to="/"
            style="font-size: small; color: #999"
            >{{ i.name }}</RouterLink
          >
        </li>
      </ul>
      <div class="layer" v-show="hoveredIndex !== null">
        <div class="word">
          <span><strong>分类推荐 </strong>根据您的购买或浏览记录推荐</span>
        </div>
        <ul>
          <li v-for="i in categoryStore.categoryList" :key="i.id">
            <div v-for="good in i.goods" :key="good.id">
              <RouterLink to="/">
                <img :src="good.pictureL" />
                <div class="info">
                  <p class="name">
                    {{ good.name }}
                  </p>
                  <p class="des">
                    {{ good.desc }}
                  </p>
                  <p class="price">￥{{ good.price }}</p>
                </div>
              </RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCategoryStore } from "@/stores/categoryStore";
import { ref } from "vue";
const categoryStore = useCategoryStore();
const hoveredIndex = ref(null);
</script>

<style lang='scss' scoped>
.app {
  background-color: #f4f4f4;
  height: 500px;
}
.container {
  width: 80%;
  margin: auto;
  display: flex;
}
.menu {
  width: 250px;
  height: 500px;
  background-color: rgb(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  li {
    padding-left: 40px;
    height: 55px;
    line-height: 55px;
    &:hover {
      background: $xtxColor;
    }
    a {
      margin-right: 4px;
      color: #fff;
    }
  }
}
.layer {
  width: 990px;
  height: 500px;
  background: #d2d2d2;
  position: absolute;
  display: none;
  padding: 20px 15px;
  // z-index: 999;
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 310px;
      height: 120px;
      margin-right: 15px;
      margin-bottom: 15px;
      border: 1px solid #eee;
      border-radius: 4px;
      background: #fff;

      &:nth-child(3n) {
        margin-right: 0;
      }
      a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: 10px;
        small {
          color: #666;
        }
        &:hover {
          background: #e3f9f4;
        }

        img {
          width: 95px;
          height: 95px;
        }

        .info {
          padding-left: 10px;
          line-height: 24px;
          overflow: hidden;

          .name {
            font-size: 16px;
            color: #666;
          }

          .des {
            color: #999;
          }

          .price {
            font-size: 22px;
            color: $priceColor;
          }
        }
      }
    }
  }
}
span {
  display: inline-block;
  font-size: 16px;
  padding: 10px;
}
strong {
  font-size: 20px;
}
</style>