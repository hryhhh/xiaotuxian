<template>
  <div class="app">
    <div class="cate-container">
      <!-- 面包屑导航 -->
      <div class="bread-nav">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 分类列表 -->
      <div class="cate-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="item in categoryData.children" :key="item.id">
            
              <router-link to="`/category/sub/${item.id}`">
                <img :src="item.picture" />
                <p>{{ item.name }}</p>
              </router-link>
            
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="i in categoryData.children" :key="i.id">
        <div class="head">
          <h3>- {{ i.name }} -</h3>
        </div>
        <div class="good">
          <GoodsItem
            v-for="good in i.goods"
            :goods="good"
            :key="good.id"
          ></GoodsItem>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import GoodsItem from "../Home/components/GoodsItem.vue";
import { ArrowRight } from "@element-plus/icons-vue";
import { useBanner } from "./composables/useBanner";
import { useCategory } from "./composables/useCategory";

const { bannerList } = useBanner();
const { categoryData } = useCategory();
</script>

<style lang='scss' scoped>
.home-banner {
  height: 500px;
  margin: auto;

  img {
    width: 100%;
    height: 500px;
  }
}
.app {
  background-color: #f4f4f4;
}
.cate-container {
  width: 80%;
  margin: auto;
  .bread-nav {
    padding: 5px 10px;
  }
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .cate-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .good {
      width: 100%;
      height: 360px;
      display: flex;
      justify-content: space-around;
      padding: 0 10px;
    }
  }
}
</style>

