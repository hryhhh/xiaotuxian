<template>
    <div class="home-banner">
        <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script setup>
import { getBannerAPI } from '@/apis/home'
import { ref, onMounted } from 'vue'

const bannerList = ref([])

const getBanner = async () => {
    const res = await getBannerAPI()
    bannerList.value=res.data.result
}
onMounted(() => getBanner())

</script>

<style lang='scss' scoped>
.home-banner {
  width: 80%;
  height: 500px;
  position: absolute;
  left: 140px;
  top: 120px;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>