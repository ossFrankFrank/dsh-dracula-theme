# dsh-dracula-theme

🧛 DeepSeek Harness (DSH) 的德古拉主题：经典暗色配色（外加 **Dracula Soft** 变体）接入内置主题运行时，在**设置 → 通用**里一键切换。

## 功能

- **两套忠实变体**，基于官方 [Dracula 色板](https://draculatheme.com) 构建：
  - `Dracula` —— 经典 `#282a36` 画布
  - `Dracula Soft` —— 更柔和的 `#343746` 背景
- 完整的 token 覆盖：中性色阶、画布色阶、品牌色（紫）、蓝色（青）、红/绿/琥珀状态色、别名表面、组件专属 token（侧边栏、气泡、输入框、菜单）以及官方德古拉语法配色（`--shiki-*` 代码高亮）。
- 从**设置 → 通用 → 德古拉主题**一键切换，选择持久保存。

## 预览

![德古拉主题应用在 DSH Web GUI 上的效果](assets/preview.png)

经典德古拉画布（`#282a36`）映射到 DSH 全部界面层 —— 侧边栏、会话、代码块，品牌点缀色取自官方 Dracula DeepSeek 移植版的紫/青配色。

## 色板

| 角色 | 颜色 |
| --- | --- |
| 背景 | `#282a36` |
| 当前行 / 选区 | `#44475a` |
| 前景 | `#f8f8f2` |
| 注释 | `#6272a4` |
| 紫色（品牌） | `#bd93f9` |
| 粉色（关键字） | `#ff79c6` |
| 青色（链接） | `#8be9fd` |
| 绿色（成功） | `#50fa7b` |
| 黄色（字符串） | `#f1fa8c` |
| 橙色（警告） | `#ffb86c` |
| 红色（错误） | `#ff5555` |

## 官方规范对齐

token 映射遵循官方 [Dracula 语法高亮规范](https://draculatheme.com/spec) 与经典 [dracula/sublime](https://github.com/dracula/sublime) 惯例：

| 角色 | 颜色 |
| --- | --- |
| 关键字与存储 | 粉 `#FF79C6` |
| 函数与方法 | 绿 `#50FA7B` |
| 类与类型 | 青 `#8BE9FD` |
| 字符串与文本 | 黄 `#F1FA8C` |
| 数字与常量 | 橙 `#FFB86C` |
| 注释 | `#6272A4` |
| 变量与参数 | 前景 `#F8F8F2` |
| 标点 | 前景 `#F8F8F2` |
| diff 新增 / 删除 | 绿 `#50FA7B` / 红 `#FF5555` |
| 链接 | 青 `#8BE9FD` |

界面表面遵循规范中「当前行 / 选区」的区分：文本选区为 `#44475A`（含 `::selection` 规则），当前行高亮使用纯色回退 `#353747`，浮动交互元素使用 `#343746` / `#424450`。状态色（错误/成功/警告）刻意沿用语法色板，与官方 Dracula DeepSeek 移植版保持一致，让整个界面处于同一套配色体系。

## 安装

```sh
# 从 npm（预构建，推荐）
dsh plugin --profile web add dsh-dracula-theme

# 或从源码
dsh plugin --profile web add https://github.com/ossFrankFrank/dsh-dracula-theme
```

重启 profile 后，在**设置 → 通用 → 德古拉主题**里选择皮肤。

## 开发

```sh
npm run generate   # 从 palette/dracula.json 重新生成 themes/*.json 与 lib/client.js
```

token 表是生成出来的：修改 `palette/dracula.json` 里的锚点（颜色、`grayRamp`、`soft.background`）后重新生成即可。`lib/client.js` 是浏览器端 bundle，由 DSH 客户端运行时加载；`lib/index.js` 是空的 host 入口。

## 许可

MIT —— 见 [LICENSE](LICENSE)。结构参考 [dsh-catppuccin](https://github.com/zhijun-dai/Catppuccin-dsh-theme)（MIT）。

## 开发工作流

1. 修改 `palette/dracula.json` 里的锚点——颜色、官方 canvas/brand/代码映射、`grayRamp`、`soft.background`。
2. `npm run generate` —— 重新生成 `themes/*.json` 与 `lib/client.js`（浏览器 bundle）。
3. 校验：`node scripts/check-themes.mjs`（token 结构检查）——CI 会跑同样的检查，外加生成产物 diff。
4. 在真实 profile 里测试：`dsh plugin --profile web add /path/to/this/repo`（本地 link），重启 profile，在**设置 → 通用 → 德古拉主题**里选择皮肤。
5. 发版：`package.json` 升 `version`，提交推送，`pnpm publish`，再把 profile 更新到已发布版本（`dsh plugin --profile web add dsh-dracula-theme`）并重启应用。profile 从 npm 安装，不走工作区——本地改动只有发布后（或通过本地 link）才会生效。
