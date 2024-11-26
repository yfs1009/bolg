export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"vue2":{"path":"/category/vue2/","indexes":[0]},"canvas":{"path":"/category/canvas/","indexes":[1]},"fetch":{"path":"/category/fetch/","indexes":[2]},"video":{"path":"/category/video/","indexes":[3]},"WebAudio":{"path":"/category/webaudio/","indexes":[4]}}}},"tag":{"/":{"path":"/tag/","map":{}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

