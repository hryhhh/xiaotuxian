import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([]);

    const getCategory = async () => {
      const res = await getCategoryAPI();
      categoryList.value = res.data.result;
      // console.log(res);
      // console.log(res.data.result[0].goods);
      
    };
    return {
        categoryList,
        getCategory 
   }
})