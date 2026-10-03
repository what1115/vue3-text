# xu520

基于 Valaxy 的个人博客项目，记录 vue3 学习笔记与日常随笔。

## 使用

```bash
# 安装依赖
npm i
# 或 pnpm i

# 启动本地开发
npm run dev
# 或 pnpm dev
```

启动后在浏览器打开 `http://localhost:4859/` 即可预览。

其他常用命令：

```bash
npm run build:ssg   # 构建 SSG 静态站点（用于上线部署）
npm run build:spa   # 构建 SPA 站点
npm run rss         # 生成 RSS 订阅源
npm run serve       # 本地预览构建产物
```

### 配置

- `valaxy.config.ts`：主题与导航配置（banner、页脚、自定义导航页、图标白名单等）
- `site.config.ts`：站点信息配置（标题、作者、社交链接、搜索、打赏等）

### Docker 部署

```bash
docker build . -t your-valaxy-blog-name:latest
```

## 目录结构

大多数情况下，你只需要在 `pages` 目录中编写内容。

### 主要目录

- `pages`：所有页面内容
  - `posts`：博客文章放在这里，会自动计入归档、分类与标签
- `styles`：覆盖主题样式，`index.scss` / `index.css` 会被自动加载
- `components`：自定义 Vue 组件（会被自动注册）
- `layouts`：自定义布局（在 md 中通过 `layout: xxx` 使用）
- `locales`：自定义多语言文案

### 其他文件

- `.vscode`：推荐的插件与编辑器配置
- `.github`：GitHub Actions，推送到 main 后自动构建并部署到 GitHub Pages
- `netlify.toml`：[Netlify](https://www.netlify.com/) 部署配置
- `vercel.json`：[Vercel](https://vercel.com/) 部署配置

## Git 操作

### 提交信息规范

采用 **Conventional Commits** 风格，`type` 用英文，描述可用中文。

| type | 含义 |
|------|------|
| feat | 新功能、新文章、新页面 |
| fix | 修复问题 |
| docs | 仅文档或 README 改动 |
| style | 代码格式（不影响逻辑） |
| refactor | 重构（不加功能、不修 bug） |
| test | 测试相关 |
| chore | 构建、配置、依赖等杂务 |

格式：`<type>(<scope>): <描述>`，例如：

```bash
git commit -m "docs(README): 添加 Git 操作指引"
git commit -m "feat(posts): 新增 2026 中秋节笔记"
git commit -m "fix(links): 修复友链页外链失效"
```

### 基本操作

```bash
# 查看当前改动
git status

# 加入暂存
git add pages/posts/xxx.md   # 只加某个文件
git add .                    # 加所有改动

# 提交
git commit -m "docs: 更新操作说明"

# 查看历史
git log --oneline -10

# 对比未提交的改动
git diff

# 推送到远程（main 分支会自动触发部署）
git push origin main

# 同步远程
git pull origin main
git pull --rebase            # 减少多余的合并提交

# 撤销失误
git reset HEAD file.md       # 取消暂存某个文件
git restore file.md          # 丢弃未提交的改动
git reflog                   # 查看全部操作历史（救命）
```

### 分支管理

```bash
git branch                   # 查看分支
git checkout -b feature/xxx  # 新建并切换分支
git merge feature/xxx        # 把功能分支合入当前分支
git branch -d feature/xxx    # 删除已合并的分支
```

### 回滚

```bash
# 撤销最近一次提交，但保留改动在工作区
git revert HEAD~1

# 丢弃某文件未提交的改动
git restore file.md

# 已暂存的文件回到已提交版本
git restore --staged file.md
git restore file.md
```

> 本项目通过 GitHub Actions 在推送 `main` 时自动构建并部署到 GitHub Pages（见 `.github/workflows/gh-pages.yml`），日常无需手动部署。
