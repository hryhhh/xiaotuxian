<template>
    <home-panel title="人气推荐" sub-title="人气爆款 不容错过">
        <ul class="hotList">
            <li v-for="item in hotList" :key="item.id">
                <img v-img-lazy="item.picture" alt="" width="280px" height="280px"
                />
                <p class="title">{{ item.title }}</p>
                <p class="alt">{{ item.alt }}</p>
                
            </li>
        </ul>
    </home-panel>

</template>

<script setup>
import HomePanel from './HomePanel.vue';
import { getHotAPI } from '@/apis/home';
import { ref, onMounted } from 'vue'

const hotList = ref([])
const getHotList = async () => {
    const res = await getHotAPI()
    hotList.value = res.data.result
    //  console.log(res.data.result);
        
}
onMounted(()=>getHotList())

</script>

<style lang='scss' scoped>
.hotList{
    width: 80%;
    height: 330px;
    display: flex;
    justify-content: space-between;
}
li{
    background-color: #F1F9F5;
    transition: all 0.5s;
    text-align: center;
    &:hover{
        box-shadow: 0 8px 8px 0 grey;
        transform: translate(0,-5px);
    }
}
.alt{
    color: #ADADAD;
    margin-top: 5px;
    font-size: small;
}

</style>