# Changelog / 更新日志

## 1.0.0 (2026-08-20)

### English

**Official spec alignment** — tokens and surfaces now follow [draculatheme.com/spec](https://draculatheme.com/spec) and the classic [dracula/sublime](https://github.com/dracula/sublime) convention:

- **Syntax highlighting**: numbers/constants/booleans are now **orange** (`#FFB86C`, spec: *Numbers and Constants → Orange*); variables/parameters follow the **foreground** (`#F8F8F2`, spec: *Variables and Parameters → Foreground*); diff insertions are **green** (`#50FA7B`); links are **cyan** (`#8BE9FD`). Keywords stay pink, functions green, strings yellow, comments `#6272A4` — matching the spec's token classification.
- **Current line vs selection**: the spec distinguishes the current-line highlight (translucent `#6272A4`, opaque fallback `#353747`) from text selection (`#44475A`). Hover/active surfaces (`interactive-bg-hover-solid`, sidebar active item, bubble highlight) now use `#353747`; multi-select keeps selection `#44475A`; a `::selection { background: #44475A }` rule is applied while a Dracula skin is active.
- **Floating surfaces**: overlays, tooltips and floating buttons use the spec's floating palette — `#343746` (idle) and `#424450` (hover).
- Soft variant blends the new surfaces toward its softer current line.

### 中文

**官方规范对齐** — token 与界面表面遵循 [draculatheme.com/spec](https://draculatheme.com/spec) 与经典 [dracula/sublime](https://github.com/dracula/sublime) 惯例：

- **语法高亮**：数字/常量/布尔改为**橙色**（`#FFB86C`，规范：*Numbers and Constants → Orange*）；变量/参数改为**前景色**（`#F8F8F2`，规范：*Variables and Parameters → Foreground*）；diff 新增改为**绿色**（`#50FA7B`）；链接改为**青色**（`#8BE9FD`）。关键字保持粉色、函数绿色、字符串黄色、注释 `#6272A4`，与规范的 token 分类一致。
- **当前行 vs 选区**：规范区分当前行高亮（半透明 `#6272A4`，纯色回退 `#353747`）与文本选区（`#44475A`）。hover/激活表面（`interactive-bg-hover-solid`、侧边栏激活项、气泡高亮）改用 `#353747`；多选保持选区色 `#44475A`；德古拉皮肤激活时应用 `::selection { background: #44475A }`。
- **浮动表面**：浮层、提示框与浮动按钮使用规范的浮动色板——`#343746`（常态）与 `#424450`（hover）。
- Soft 变体将新表面色向其柔和的当前行混合。

---

## 0.1.5 (2026-08-20)

### English

- Align UI and code tokens with the official Dracula spec (numbers orange, parameters foreground, diff insertions green, links cyan; current-line `#353747` vs selection `#44475A`; floating surfaces `#343746`/`#424450`; `::selection` rule).

### 中文

- 将 UI 与代码 token 对齐官方 Dracula 规范（数字橙色、参数前景色、diff 新增绿色、链接青色；当前行 `#353747` 与选区 `#44475A` 区分；浮动表面 `#343746`/`#424450`；`::selection` 规则）。

## 0.1.4 (2026-08-19)

### English

- **Hold the skin against mid-session adoptions**: the ThemeService re-adopts its durable built-in preference on every settings-document sync, not only at boot. A durable-value tracker now distinguishes adoption echoes of an unchanged document (re-assert the skin, indefinitely) from real Appearance-row changes (respect the user, drop the stored skin), so the theme can no longer silently revert mid-session.

### 中文

- **会话中持续防回退**：主题服务会在每次设置文档同步时重新采纳内置持久偏好，而不仅是启动时。现在通过持久值跟踪器区分「未变化文档的采纳回声」（无限期重新断言皮肤）与「用户真实切换外观」（尊重用户并清除存储的皮肤），主题不再会在会话中悄悄回退。

## 0.1.3 (2026-08-18)

### English

- Include `assets/` in the published package so the npm README preview image renders.

### 中文

- 发布包包含 `assets/` 目录，修复 npm 包页面 README 预览图裂图问题。

## 0.1.2 (2026-08-17)

### English

- **Fix theme not persisting across desktop launches**: the desktop client boots on a fresh random port every launch, and localStorage is scoped per origin including the port. The saved skin is now mirrored into a host-scoped cookie (port-agnostic) as well; reads prefer the cookie and fall back to localStorage.

### 中文

- **修复桌面端重启后主题丢失**：桌面客户端每次启动使用随机端口，而 localStorage 按「协议+主机+端口」隔离。现在皮肤选择同时镜像到按主机隔离的 cookie（不受端口影响）；读取时 cookie 优先、localStorage 兜底。

## 0.1.1 (2026-08-17)

### English

- **Fix theme reverting to default in the desktop client**: replaced the time-boxed boot restore with an event-driven guard that survives the boot adoption storm.

### 中文

- **修复桌面端启动恢复默认主题**：将固定时长的启动恢复改为事件驱动守卫，扛过启动期的偏好采纳风暴。
