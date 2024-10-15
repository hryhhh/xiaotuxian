<template>
  <div class="detail-app">
    <div class="container" v-if="goods.details">
      <div class="bread-nav">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path:`/category/${goods.categories[1].id}`}">{{ goods.categories[1].name}}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path:`/category/sub/${goods.categories[0].id}`}">{{ goods.categories[0].name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="info-container">
        <div class="media">

            <ul class="goods-sales">
                <li>
                    <p>销量人气</p>
                    <p> {{goods.salesCount}} </p>
                    <p>销量人气</p>
                </li>
                <li>
                    <p>商品评价</p>
                    <p>{{ goods.commentCount }} </p>
                    <p>查看评价</p>
                </li>
                <li>
                    <p>收藏人气</p>
                    <p> {{ goods.collectCount }} </p>
                    <p>收藏商品</p>
                </li>
                <li>
                    <p>品牌信息</p>
                    <p>{{ goods.brand.name}}</p>
                    <p> 400+ </p>
                </li>
            </ul>
        </div>
        <div class="infos">
            <p class="name">{{ goods.name }}</p>
            <p class="desc">{{ goods.desc }}</p>
            <p class="price">
                <span>{{ goods.price }}</span>
                <span>{{ goods.oldPrice }}</span>
            </p>
            <div class="service">
                <dl>
                  <dt>促销</dt>
                  <dd>12月好物放送, App领券购买直降120元</dd>
                </dl>
                <dl>
                  <dt>服务</dt>
                  <dd>
                    <span>无忧退货</span>
                    <span>快速退款</span>
                    <span>免费包邮</span>
                    <a>了解详情</a>
                  </dd>
                </dl>
            </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { getDetailAPI } from '@/apis/detail'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

const goods = ref({})
const route = useRoute()

const getGoods = async () => {
    const res = await getDetailAPI(route.params.id)
    goods.value = res.data.result
    // console.log(res.data.result);
    
}
onMounted(()=>getGoods())
</script>

<style lang='scss' scoped>
.detail-app {
    .container{
        width: 80%;
        margin: auto;
    }
  .goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;

    .media {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
    }

    .spec {
      flex: 1;
      padding: 30px 30px 30px 0;
    }
  }

  .goods-footer {
    display: flex;
    margin-top: 20px;

    .goods-article {
      width: 940px;
      margin-right: 20px;
    }

    .goods-aside {
      width: 280px;
      min-height: 1000px;
    }
  }

  .goods-tabs {
    min-height: 600px;
    background: #fff;
  }

  .goods-warn {
    min-height: 600px;
    background: #fff;
    margin-top: 20px;
  }

  .number-box {
    display: flex;
    align-items: center;

    .label {
      width: 60px;
      color: #999;
      padding-left: 10px;
    }
  }

  .name {
    font-size: 22px;
  }

  .desc {
    color: #999;
    margin-top: 10px;
  }

  .price {
    margin-top: 10px;

    span {
      &::before {
        content: "¥";
        font-size: 14px;
      }

      &:first-child {
        color: $priceColor;
        margin-right: 10px;
        font-size: 22px;
      }

      &:last-child {
        color: #999;
        text-decoration: line-through;
        font-size: 16px;
      }
    }
  }

  .service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;

    dl {
      padding-bottom: 20px;
      display: flex;
      align-items: center;

      dt {
        width: 50px;
        color: #999;
      }

      dd {
        color: #666;

        &:last-child {
          span {
            margin-right: 10px;

            &::before {
              content: "•";
              color: $xtxColor;
              margin-right: 2px;
            }
          }

          a {
            color: $xtxColor;
          }
        }
      }
    }
  }

  
}

.goods-tabs {
  min-height: 600px;
  background: #fff;

  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;

    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;

      >span {
        color: $priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
}

.goods-detail {
  padding: 40px;

  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;

      .dt {
        width: 100px;
        color: #999;
      }

      .dd {
        flex: 1;
        color: #666;
      }
    }
  }

  >img {
    width: 100%;
  }
}

.bread-nav {
  padding: 25px 0;
}
</style>