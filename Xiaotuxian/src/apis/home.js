import  httpInstance  from '@/utils/http'

export function getBannerAPI(params = {}) {
  //默认为1（首页轮播图） 商品页为2
  const { distributionSite = '1' } = params
    return httpInstance({
      url: "/home/banner",
      params: {
        distributionSite,
      },
      //
    });
}
export function getNewAPI() {
    return httpInstance({
      url: "/home/new",
    });
}
export function getHotAPI() {
    return httpInstance({
      url: "/home/hot",
    });
}
export function getGoodsAPI() {
    return httpInstance({
      url: "/home/goods",
    });
}