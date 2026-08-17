# dsh-dracula-theme

🧛 DeepSeek Harness (DSH) 的德古拉主题：经典暗色配色（外加 **Dracula Soft** 变体）接入内置主题运行时，在**设置 → 通用**里一键切换。

## 功能

- **两套忠实变体**，基于官方 [Dracula 色板](https://draculatheme.com) 构建：
  - `Dracula` —— 经典 `#282a36` 画布
  - `Dracula Soft` —— 更柔和的 `#343746` 背景
- 完整的 token 覆盖：中性色阶、画布色阶、品牌色（紫）、蓝色（青）、红/绿/琥珀状态色、别名表面、组件专属 token（侧边栏、气泡、输入框、菜单）以及官方德古拉语法配色（`--shiki-*` 代码高亮）。
- 从**设置 → 通用 → 德古拉主题**一键切换，选择持久保存。

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

## 安装

```sh
# 从 npm（预构建，推荐）
dsh plugin --profile web add dsh-dracula-theme

# 或从源码
dsh plugin --profile web add https://github.com/<you>/dsh-dracula-theme
```

重启 profile 后，在**设置 → 通用 → 德古拉主题**里选择皮肤。

## 开发

```sh
npm run generate   # 从 palette/dracula.json 重新生成 themes/*.json 与 lib/client.js
```

token 表是生成出来的：修改 `palette/dracula.json` 里的锚点（颜色、`grayRamp`、`soft.background`）后重新生成即可。`lib/client.js` 是浏览器端 bundle，由 DSH 客户端运行时加载；`lib/index.js` 是空的 host 入口。

## 许可

MIT —— 见 [LICENSE](LICENSE)。结构参考 [dsh-catppuccin](https://github.com/zhijun-dai/Catppuccin-dsh-theme)（MIT）。
