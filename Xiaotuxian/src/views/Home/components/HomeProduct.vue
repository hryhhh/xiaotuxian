<template>
  <div class="pro-app">
    <HomePanel :title="item.name" v-for="item in goodsProduct" :key="item.id">
      <div class="product">
        <div class="pic">
          <img v-img-lazy="item.picture" style="width: 240px; height: 610px" />
          <div class="word">
            <span>{{ item.name }}馆</span>
            <span>{{ item.saleInfo }}</span>
          </div>
        </div>

        <ul class="goods-list">
          <li v-for="goods in item.goods" :key="goods.id">
            <GoodsItem :goods="goods"/>
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<script setup>
import HomePanel from "./HomePanel.vue";
import GoodsItem from "./GoodsItem.vue";
import { getGoodsAPI } from "@/apis/home";
import { ref, onMounted } from "vue";

const goodsProduct = ref([]);
const getGoods = async () => {
  const res = await getGoodsAPI();
  goodsProduct.value = res.data.result;
  // console.log(res.data.result);
};
onMounted(() => getGoods());
</script>

<style lang='scss' scoped>
.product {
  display: flex;
  position: relative;
}
.word {
  height: 66px;
  display: flex;
  font-size: 18px;
  color: #fff;
  line-height: 66px;
  font-weight: normal;
  text-align: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  span {
    &:first-child {
      width: 76px;
      background: #090909;
    }

    &:last-child {
      padding: 0 10px;
      font-size: 16px;
      background: rgba(0, 0, 0, 0.7);
    }
  }
}
.goods-list{
 display: flex; 
 width: 1000px;
 flex-wrap: wrap;
}

</style> 