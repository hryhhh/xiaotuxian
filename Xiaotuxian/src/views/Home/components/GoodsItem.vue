<template>
  <RouterLink to="/" class="goods-item">
    <img v-img-lazy="goods.picture" width="180px" height="180px" />
    <p class="name">{{ goods.name }}</p>
    <p class="desc">{{ goods.desc }}</p>
    <p class="price">￥{{ goods.price }}</p>
  </RouterLink>
</template>

<script setup>
defineProps({
  goods: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang='scss' scoped>
.goods-item {
  width: 220px;
  display: block;
  padding: 20px 20px;
  text-align: center;
  transition: all 0.5s;
  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0 8px 8px 0 grey;
  }
}

p {
  text-align: center;
  padding: 5px 5px;
  white-space: nowrap; //禁止文本换行
  overflow: hidden;
  text-overflow: ellipsis; //省略号表示被裁减的部分
}
.name {
  width: 190px;
  color: #333;
}
.desc {
  width: 180px;
  font-size: small;
  color: #666;
}
.price {
  color: $priceColor;
}
</style>