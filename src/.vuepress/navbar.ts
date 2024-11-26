import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "代码笔记",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      { text: "axios", icon: "pen-to-square", link: "axios" },
      { text: "canvas", icon: "pen-to-square", link: "canvas" },
      { text: "fetch", icon: "pen-to-square", link: "fetch" },
      { text: "video", icon: "pen-to-square", link: "video" },
      { text: "webaudio", icon: "pen-to-square", link: "webaudio" },

      // {
      //   text: "苹果",
      //   icon: "pen-to-square",
      //   prefix: "apple/",
      //   children: [
      //     { text: "苹果1", icon: "pen-to-square", link: "1" },
      //     { text: "苹果2", icon: "pen-to-square", link: "2" },
      //     "3",
      //     "4",
      //   ],
      // },
      // {
      //   text: "香蕉",
      //   icon: "pen-to-square",
      //   prefix: "banana/",
      //   children: [
      //     {
      //       text: "香蕉 1",
      //       icon: "pen-to-square",
      //       link: "1",
      //     },
      //     {
      //       text: "香蕉 2",
      //       icon: "pen-to-square",
      //       link: "2",
      //     },
      //     "3",
      //     "4",
      //   ],
      // },
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "tomato",
      // "strawberry",
    ]
  }
]);
