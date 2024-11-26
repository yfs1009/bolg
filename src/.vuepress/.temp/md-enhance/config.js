import CodeDemo from "D:/桌面数据/mybolg/新建文件夹/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/桌面数据/mybolg/新建文件夹/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "D:/桌面数据/mybolg/新建文件夹/blog/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "D:/桌面数据/mybolg/新建文件夹/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
