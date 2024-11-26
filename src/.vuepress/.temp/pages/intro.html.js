import comp from "D:/桌面数据/mybolg/blog/src/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"介绍页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"circle-info\",\"cover\":\"/assets/images/cover3.jpg\",\"description\":\"介绍页 尤福生\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/bolg/intro.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"介绍页\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"介绍页 尤福生\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://mister-hope.github.io/bolg/assets/images/cover3.jpg\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:src\",\"content\":\"https://mister-hope.github.io/bolg/assets/images/cover3.jpg\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"介绍页\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"介绍页\\\",\\\"image\\\":[\\\"https://mister-hope.github.io/bolg/assets/images/cover3.jpg\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Hope\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.19,\"words\":58},\"filePathRelative\":\"intro.md\",\"excerpt\":\"\\n<p>尤福生</p>\\n<!-- ,前端工作经验2-3年，熟悉uniapp,vue2,vue3,html+css+js+jq,axios,小程序开发,了解andriod如何内嵌html进行交互（例如自定义闹钟,日历提醒） -->\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
