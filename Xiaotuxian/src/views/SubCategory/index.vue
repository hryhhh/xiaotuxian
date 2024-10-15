<template>
  <div class="subcate-app">
    <div class="container">
      <!-- 面包屑导航 -->
      <div class="bread-nav">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }">{{ categoryData.parentName }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="sub-container">
        <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
          <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
          <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
          <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
        </el-tabs>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCategoryFilterAPI } from '@/apis/category'
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import GoodsItem from '../Home/components/GoodsItem.vue'



const filterData = ref({})
const route=useRoute()
const getCategoryFilter = async () => {
    try {
    const res = await getCategoryFilterAPI(route.params.id)
    filterData.value = res.data.result
    console.log(res.data.result);

    }
    catch (error){
      console.error("Error fetching category filter data:", error)
    }
}
onMounted(() => getCategoryFilter())
</script>

<style lang='scss' scoped>
</style>