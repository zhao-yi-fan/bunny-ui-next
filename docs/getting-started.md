# 快速开始

安装组件库：

```bash
npm install bunny-ui-next
```

在 Vue 3 项目中注册组件库：

```ts
import { createApp } from 'vue'
import BunnyUI from 'bunny-ui-next'
import 'bunny-ui-next/dist/bunnyUi.css'

const app = createApp(App)
app.use(BunnyUI)
app.mount('#app')
```

仓库中常用的构建命令：

```bash
npm run test:unit
npm run lib
npm run docs:serve
npm run docs:build
```

当前文档站基于 VitePress 构建，组件示例直接在 Markdown 中渲染源码组件。执行 `npm run docs:serve` 即可启动文档开发服务。
