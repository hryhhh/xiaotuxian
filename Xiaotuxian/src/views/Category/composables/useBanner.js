//封装banner轮播图相关业务
import { ref, onMounted } from "vue";
import { getBannerAPI } from "@/apis/home";
export function useBanner() {
  //获取banner轮播图数据
  const bannerList = ref([]);
  const getBanner = async () => {
    const res = await getBannerAPI({
      //传入参数为2
      distributionSite: "2",
    });
    bannerList.value = res.data.result;
  };
    onMounted(() => getBanner());
    
    return {
        bannerList
    }
}
