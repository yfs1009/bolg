import comp from "D:/桌面数据/mybolg/blog/src/.vuepress/.temp/pages/posts/cherry.html.vue"
const data = JSON.parse("{\"path\":\"/posts/cherry.html\",\"title\":\"樱桃\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-09T00:00:00.000Z\",\"category\":[\"樱桃\"],\"tag\":[\"红\",\"小\",\"圆\"],\"description\":\"樱桃 标题 2 这里是内容。 标题 3 11 这里是内容。\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"标题 2\",\"slug\":\"标题-2\",\"link\":\"#标题-2\",\"children\":[{\"level\":3,\"title\":\"标题 3\",\"slug\":\"标题-3\",\"link\":\"#标题-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.11,\"words\":34},\"filePathRelative\":\"posts/cherry.md\",\"localizedDate\":\"2022年1月9日\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>11\\n这里是内容。</p>\\n\",\"autoDesc\":true}")
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
