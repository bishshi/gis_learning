# GIS 原理学习图谱

根据《地理信息系统教程（第二版）》和课程课件整理的静态学习网站，包含章节知识、教材图例、例题和可跳转的知识导图。

## 使用与部署

无需安装依赖或构建。可在项目根目录运行 `python -m http.server 8000`，然后访问 `http://localhost:8000/dist/`。

在 Vercel 中导入此仓库即可部署；`vercel.json` 已将静态输出目录设置为 `dist`。如手动配置，Framework Preset 选择 Other，Build Command 留空，Output Directory 设置为 `dist`。

学习进度保存在当前浏览器的 localStorage，不会自动跨设备同步。

## 内容与维护

`dist/index.html`、`dist/style.css` 和 `dist/app.js` 负责界面与交互；章节知识保存在 `dist/lessons.js`、`dist/extra.js`、`dist/deep.js`、`dist/detailed-all.js` 及 `dist/chapter*-deep.js`；`dist/images/` 存放引用的教材图例。

内容仍在整理中，尚未逐一覆盖教材全部细节及课件例题。图形、公式与题目请结合原资料核对；自编练习已注明。教材和课件的图例及其相关权利归原权利人所有。
