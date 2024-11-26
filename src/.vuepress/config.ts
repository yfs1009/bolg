/*
 * @Author: youfusheng you9026131008@163.com
 * @Date: 2024-11-26 14:30:29
 * @LastEditors: youfusheng you9026131008@163.com
 * @LastEditTime: 2024-11-26 15:34:12
 * @FilePath: \blog\src\.vuepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
<<<<<<< HEAD
  base: "/bolg/",
=======
  base:"/bolg/",
>>>>>>> b72970f7 (yfs)

  lang: "zh-CN",
  title: "YFS",
  description: "YFS的博客",

  theme,
  

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
