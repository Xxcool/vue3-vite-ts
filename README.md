[![Security Status](https://s.murphysec.com/badge/Xxcool/vue3-vite-ts.svg)](https://www.murphysec.com/p/Xxcool/vue3-vite-ts)

## 说明

使用最新的前端技术栈 Vue3、Vite3、TypeScript、NaiveUI、Pinia 和 UnoCSS

## 安装使用

- 克隆代码

```bash
git clone https://github.com/Xxcool/study.git
```

- 安装依赖

```bash
pnpm i
```

- 运行

```bash
pnpm vite
```

- 打包

```bash
pnpm build
```

## 目录结构

```
├─ public
│  └─ vite.svg
├─ src
│  ├─ assets
│  │  └─ vue.svg
│  ├─ components
│  │  └─ common
│  ├─ plugins
│  │  ├─ assets.ts
│  │  └─ index.ts
│  ├─ router
│  │  ├─ routes
│  │  │  └─ constants.ts
│  │  └─ index.ts
│  ├─ store
│  │  ├─ modules
│  │  └─ index.ts
│  ├─ styles
│  │  ├─ css
│  │  │  ├─ global.css
│  │  │  ├─ reset.css
│  │  │  ├─ scrollbar.css
│  │  │  └─ transition.css
│  │  ├─ scss
│  │  │  ├─ global.scss
│  │  │  └─ scrollbar.scss
│  │  └─ index.ts
│  ├─ views
│  │  └─ login
│  │     └─ index.vue
│  ├─ App.vue
│  ├─ main.ts
│  └─ vite-env.d.ts
├─ README.md
├─ commitlint.config.js
├─ components.d.ts
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ tsconfig.json
├─ uno.config.ts
└─ vite.config.ts
```
