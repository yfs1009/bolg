import comp from "D:/桌面数据/mybolg/blog/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"博客\",\"heroImage\":\"/logo1.png\",\"heroText\":\"YFS博客\",\"heroFullScreen\":true,\"tagline\":\"心有猛虎,细嗅蔷薇\",\"projects\":[{\"icon\":\"project\",\"name\":\"招标\",\"desc\":\"新标点项目\",\"link\":\"http://marker-new.com/outside/#/homepage\"},{\"icon\":\"link\",\"name\":\"小程序\",\"desc\":\"甘夏露营\"},{\"icon\":\"book\",\"name\":\"小程序\",\"desc\":\"车仆租车\"},{\"icon\":\"article\",\"name\":\"小程序\",\"desc\":\"鲤城招商数智人\"}],\"footer\":\"浮生若梦，人生几何\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/bolg/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"博客\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.71,\"words\":212},\"filePathRelative\":\"README.md\",\"excerpt\":\"<!-- 这是一个博客主页的案例。\\n\\n要使用此布局，你应该在页面前端设置 `layout: BlogHome` 和 `home: true`。\\n\\n相关配置文档请见 [博客主页](https://theme-hope.vuejs.press/zh/guide/blog/home.html)。 -->\\n\"}")
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
