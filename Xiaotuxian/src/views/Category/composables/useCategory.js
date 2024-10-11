//封装分类列表相关业务
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { getCategoryAPI } from "@/apis/category";

export function useCategory() {
  //获取分类列表数据
  const categoryData = ref([]);
  const route = useRoute();
  //函数接受一个可选参数 id，默认为当前路由参数中的 id
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.data.result;
    console.log(res.data.result);
    
  };
  onMounted(() => getCategory());

  onBeforeRouteUpdate((to) => {
    // console.log(to);
    //在路由更新前，根据新的路由参数中的 id 获取分类列表数据
    getCategory(to.params.id);
  });

  return {
    categoryData,
  };
}
