<template>
    <home-panel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
        <ul class="newList">
            <li v-for="item in newList" :key="item.id">
                <img v-img-lazy="item.picture" alt="" width="280px" height="280px"
                />
                <p class="name">{{ item.name }}</p>
                <p class="price" style="color: #C6605F;">￥{{ item.price }}</p>
            </li>
        </ul>
    </home-panel>

</template>

<script setup>
import HomePanel from './HomePanel.vue';
import { getNewAPI } from '@/apis/home';
import { ref, onMounted } from 'vue'

const newList = ref([])
const getNewList = async () => {
    const res = await getNewAPI()
    newList.value = res.data.result
    // console.log(res.data.result);
        
}
onMounted(()=>getNewList())

</script>

<style lang='scss' scoped>
.newList{
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
</style>