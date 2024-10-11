//定义图片懒加载插件
import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
    install(app) {
        app.directive("img-lazy", {
          mounted(el, binding) {
            // console.log(el, binding.value);
            useIntersectionObserver(el, ([{ isIntersecting }]) => {
            //   console.log(isIntersecting);
              if (isIntersecting) {
                  el.src = binding.value;
                  // stop()
              }
            });
          },
        });

    }
}