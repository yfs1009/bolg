import comp from "D:/桌面数据/mybolg/blog/src/.vuepress/.temp/pages/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/\",\"title\":\"Demo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Demo\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/bolg/demo/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"YFS\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Demo\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Demo\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
