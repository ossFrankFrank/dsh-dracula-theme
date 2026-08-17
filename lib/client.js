// dsh-dracula-theme — browser half (client plugin bundle). GENERATED FILE:
// run `node scripts/gen-themes.mjs` to regenerate from lib/client.tpl.js.
//
// Loaded by dsh-client-modules at /plugins/dsh-dracula/client.js and
// executed through the vendored cordis Loader's lazy-CJS module table
// (window.__ModuleLoader__.load). The factory body is plain CJS with
// require() resolved against the shell's module table — the same shape the
// shipped ui-* packages' tsdown bundles emit.
//
// Structure modeled on dsh-catppuccin (MIT, zhijun-dai) — thanks.
window.__ModuleLoader__.load({
	id: "dsh-dracula",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let _runtime_client = require("@deepseek-ai/dsh-client-runtime/client");

		//#region dsh-dracula: definitions
		/** The settings row's locale namespace. */
		const SETTINGS_NS = "settings.dracula";
		/** localStorage key holding the selected theme id. */
		const STORAGE_KEY = "dsh-dracula:skin";
		/** Sentinel meaning "no custom theme — follow the built-in appearance". */
		const DEFAULT_SKIN = "system";

		/**
		 * The Dracula theme catalog, generated from palette/dracula.json.
		 * Each entry is a third-party theme for the built-in ThemeRuntime:
		 * an id, the base palette it builds on (colorScheme drives
		 * body[data-ds-dark-theme]), and --dsw-alias-* / --dsw-specific-* /
		 * --shiki-* overrides applied as inline custom properties on <body>
		 * by ui-layout's ThemePresenter, plus the underlying --dsw-static-*
		 * ramps. Values are concrete CSS colors (no var() indirection).
		 */
		const SKINS = [
		{
		  "id": "dracula",
		  "name": "Dracula",
		  "colorScheme": "dark",
		  "tokens": {
		    "--dsw-static-neutral-50": "#efefe9",
		    "--dsw-static-neutral-100": "#e2e2da",
		    "--dsw-static-neutral-150": "#d8d8d0",
		    "--dsw-static-neutral-200": "#cdcdc5",
		    "--dsw-static-neutral-250": "#c2c2ba",
		    "--dsw-static-neutral-300": "#b6b6ae",
		    "--dsw-static-neutral-400": "#8f8f96",
		    "--dsw-static-neutral-500": "#6d6d7a",
		    "--dsw-static-neutral-550": "#5c5c6b",
		    "--dsw-static-neutral-600": "#4d4d5e",
		    "--dsw-static-neutral-700": "#3e3e50",
		    "--dsw-static-neutral-800": "#30303f",
		    "--dsw-static-neutral-850": "#282a36",
		    "--dsw-static-neutral-900": "#20212b",
		    "--dsw-static-neutral-1000": "#191a21",
		    "--dsw-static-neutral-00": "#f8f8f2",
		    "--dsw-static-neutral-bluish-50": "#e3e5e7",
		    "--dsw-static-neutral-bluish-60": "#dde0e4",
		    "--dsw-static-neutral-bluish-75": "#d4d8df",
		    "--dsw-static-neutral-bluish-100": "#cbd0db",
		    "--dsw-static-neutral-bluish-150": "#bfc5d4",
		    "--dsw-static-neutral-bluish-200": "#b3bace",
		    "--dsw-static-neutral-bluish-250": "#a7b0c8",
		    "--dsw-static-neutral-bluish-300": "#9ba5c2",
		    "--dsw-static-neutral-bluish-400": "#8995b8",
		    "--dsw-static-neutral-bluish-500": "#7986b0",
		    "--dsw-static-neutral-bluish-600": "#6272a4",
		    "--dsw-static-neutral-bluish-700": "#3b3d52",
		    "--dsw-static-neutral-bluish-750": "#353749",
		    "--dsw-static-neutral-bluish-800": "#2e3040",
		    "--dsw-static-neutral-bluish-850": "#282a36",
		    "--dsw-static-neutral-bluish-875": "#21222c",
		    "--dsw-static-neutral-bluish-900": "#1f2029",
		    "--dsw-static-neutral-bluish-950": "#1c1d26",
		    "--dsw-static-neutral-bluish-1000": "#171821",
		    "--dsw-static-neutral-bluish-00": "#f8f8f2",
		    "--dsw-static-deepseek-50": "#f5f0fe",
		    "--dsw-static-deepseek-100": "#ece1fc",
		    "--dsw-static-deepseek-200": "#dfccfa",
		    "--dsw-static-deepseek-300": "#cdb1f7",
		    "--dsw-static-deepseek-400": "#bd93f9",
		    "--dsw-static-deepseek-450": "#ac7ef2",
		    "--dsw-static-deepseek-500": "#9a68ea",
		    "--dsw-static-deepseek-600": "#8353d4",
		    "--dsw-static-deepseek-800": "#4a2f85",
		    "--dsw-static-deepseek-900": "#3b2569",
		    "--dsw-static-deepseek-700-delete": "#5f3ba6",
		    "--dsw-static-blue-50": "#eafcff",
		    "--dsw-static-blue-75": "#c6f3fd",
		    "--dsw-static-blue-100": "#b0edfc",
		    "--dsw-static-blue-300": "#8be9fd",
		    "--dsw-static-blue-400": "#6fd8f0",
		    "--dsw-static-blue-450": "#58c6e2",
		    "--dsw-static-blue-500": "#41b0cf",
		    "--dsw-static-blue-600": "#2b94b5",
		    "--dsw-static-blue-800": "#1c6a86",
		    "--dsw-static-blue-900": "#165064",
		    "--dsw-static-blue-950": "#103d4d",
		    "--dsw-static-blue-50p": "#d9f8fe",
		    "--dsw-static-red-50": "#ffecec",
		    "--dsw-static-red-100": "#ffd9d9",
		    "--dsw-static-red-400": "#ff5555",
		    "--dsw-static-red-500": "#ec4d4d",
		    "--dsw-static-red-600": "#cd4141",
		    "--dsw-static-red-900": "#5e2727",
		    "--dsw-static-green-100": "#dcfce6",
		    "--dsw-static-green-400": "#50fa7b",
		    "--dsw-static-green-500": "#3fdd68",
		    "--dsw-static-green-900": "#205c38",
		    "--dsw-static-amber-100": "#fff0dc",
		    "--dsw-static-amber-400": "#ffb86c",
		    "--dsw-static-amber-500": "#f2a352",
		    "--dsw-static-amber-600": "#d48b43",
		    "--dsw-static-amber-900": "#6b4521",
		    "--dsw-alias-bg-base": "#1c1d26",
		    "--dsw-alias-bg-layer-1": "#21222c",
		    "--dsw-alias-bg-layer-2": "#282a36",
		    "--dsw-alias-bg-layer-3": "#2e3040",
		    "--dsw-alias-bg-module-platform": "#2e3040",
		    "--dsw-alias-bg-overlay": "#3b3d52",
		    "--dsw-alias-bg-multi-select": "#353749",
		    "--dsw-alias-bg-skeleton": "rgba(248, 248, 242, 0.05)",
		    "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.45)",
		    "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.55)",
		    "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.65)",
		    "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
		    "--dsw-alias-bg-mask-drop": "rgba(28, 29, 38, 0.7)",
		    "--dsw-alias-border-l1": "rgba(248, 248, 242, 0.06)",
		    "--dsw-alias-border-l2": "rgba(248, 248, 242, 0.12)",
		    "--dsw-alias-border-l3": "rgba(248, 248, 242, 0.16)",
		    "--dsw-alias-border-l4": "rgba(248, 248, 242, 0.2)",
		    "--dsw-alias-border-inverted": "rgba(0, 0, 0, 0.08)",
		    "--dsw-alias-border-inverted2": "rgba(0, 0, 0, 0.12)",
		    "--dsw-alias-border-l2-darkmode-thin": "rgba(248, 248, 242, 0.08)",
		    "--dsw-alias-brand-primary": "#bd93f9",
		    "--dsw-alias-brand-primary-invert": "#f8f8f2",
		    "--dsw-alias-brand-primary-new-colorprimary-new-color": "#bd93f9",
		    "--dsw-alias-brand-text": "#1c1d26",
		    "--dsw-alias-button-contrast-fill": "#f8f8f2",
		    "--dsw-alias-button-elevated-fill": "#2e3040",
		    "--dsw-alias-button-floating-fill": "#353749",
		    "--dsw-alias-button-floating-hover": "#3b3d52",
		    "--dsw-alias-button-ghost-active-border": "#6272a4",
		    "--dsw-alias-button-ghost-active-fill": "#2e3040",
		    "--dsw-alias-button-ghost-active-hover": "#353749",
		    "--dsw-alias-button-info-fill": "#bd93f9",
		    "--dsw-alias-button-info-hover": "#63479e",
		    "--dsw-alias-button-primary-dimmed": "#6d5b93",
		    "--dsw-alias-button-primary-fill": "#bd93f9",
		    "--dsw-alias-button-primary-hover": "#caa9fa",
		    "--dsw-alias-button-tool-bar-fill": "rgba(248, 248, 242, 0.07)",
		    "--dsw-alias-button-tool-bar-fill-invisible": "rgba(248, 248, 242, 0.04)",
		    "--dsw-alias-button-tool-bar-hover": "rgba(248, 248, 242, 0.12)",
		    "--dsw-alias-interactive-bg-active": "rgba(248, 248, 242, 0.14)",
		    "--dsw-alias-interactive-bg-hover": "rgba(248, 248, 242, 0.08)",
		    "--dsw-alias-interactive-bg-hover-accent": "rgba(189, 147, 249, 0.14)",
		    "--dsw-alias-interactive-bg-hover-danger": "rgba(255, 85, 85, 0.14)",
		    "--dsw-alias-interactive-bg-hover-solid": "#3b3d52",
		    "--dsw-alias-label-caption": "#6272a4",
		    "--dsw-alias-label-dimmed": "#46536f",
		    "--dsw-alias-label-primary": "#f8f8f2",
		    "--dsw-alias-label-primary-bluish": "#f8f8f2",
		    "--dsw-alias-label-primary-dimmed": "#aab3d1",
		    "--dsw-alias-label-primary-foreground": "#1c1d26",
		    "--dsw-alias-label-primary-inverted": "#353749",
		    "--dsw-alias-label-secondary": "#6272a4",
		    "--dsw-alias-label-tertiary": "#55638a",
		    "--dsw-alias-markdown-citation": "#353749",
		    "--dsw-alias-markdown-code-block": "#1e1f28",
		    "--dsw-alias-markdown-code-block-banner": "#21222c",
		    "--dsw-alias-markdown-code-segment-selected": "#353749",
		    "--dsw-alias-markdown-code-segment-unselected": "#1e1f28",
		    "--dsw-alias-markdown-inline-code": "#353749",
		    "--dsw-alias-markdown-placeholder": "#46536f",
		    "--dsw-alias-markdown-tag": "#bd93f9",
		    "--dsw-alias-scrollbar-bg-l1": "#353749",
		    "--dsw-alias-scrollbar-bg-l2": "#3b3d52",
		    "--dsw-alias-scrollbar-hover-l1": "#6272a4",
		    "--dsw-alias-scrollbar-hover-l2": "#6272a4",
		    "--dsw-alias-separator-primary": "rgba(189, 147, 249, 0.8)",
		    "--dsw-alias-state-business-primary": "#8be9fd",
		    "--dsw-alias-state-business-tertiary": "rgba(139, 233, 253, 0.1)",
		    "--dsw-alias-state-error-primary": "#ff5555",
		    "--dsw-alias-state-error-secondary": "rgba(255, 85, 85, 0.16)",
		    "--dsw-alias-state-success-primary": "#50fa7b",
		    "--dsw-alias-state-success-secondary": "rgba(80, 250, 123, 0.16)",
		    "--dsw-alias-state-success-tertiary": "rgba(80, 250, 123, 0.1)",
		    "--dsw-alias-state-warn-label": "#ffca80",
		    "--dsw-alias-state-warn-primary": "#ffb86c",
		    "--dsw-alias-state-warn-secondary": "rgba(255, 184, 108, 0.16)",
		    "--dsw-alias-state-warn-tertiary": "rgba(255, 184, 108, 0.1)",
		    "--dsw-alias-toast-bg": "#2e3040",
		    "--dsw-alias-tooltip-bg": "#353749",
		    "--dsw-specific-sidebar-fill": "#21222c",
		    "--dsw-specific-sidebar-nav-item-active": "#353749",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(189, 147, 249, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "#2e3040",
		    "--dsw-specific-bubble": "#2e3040",
		    "--dsw-specific-bubble-highlight": "#3b3d52",
		    "--dsw-specific-input-major": "#21222c",
		    "--dsw-specific-login-input": "#21222c",
		    "--dsw-specific-menu": "#2e3040",
		    "--dsw-specific-selector": "#3b3d52",
		    "--dsw-specific-tip": "#2e3040",
		    "--shiki-foreground": "#f8f8f2",
		    "--shiki-background": "#282a36",
		    "--shiki-token-constant": "#bd93f9",
		    "--shiki-token-string": "#f1fa8c",
		    "--shiki-token-comment": "#6272a4",
		    "--shiki-token-keyword": "#ff79c6",
		    "--shiki-token-parameter": "#ffb86c",
		    "--shiki-token-function": "#50fa7b",
		    "--shiki-token-string-expression": "#f1fa8c",
		    "--shiki-token-punctuation": "#f8f8f2",
		    "--shiki-token-link": "#8be9fd",
		    "--shiki-token-inserted": "#50fa7b",
		    "--shiki-token-deleted": "#ff5555",
		    "--shiki-token-changed": "#ffb86c"
		  }
		},
		{
		  "id": "dracula-soft",
		  "name": "Dracula Soft",
		  "colorScheme": "dark",
		  "tokens": {
		    "--dsw-static-neutral-50": "#efefe9",
		    "--dsw-static-neutral-100": "#e2e2da",
		    "--dsw-static-neutral-150": "#d8d8d0",
		    "--dsw-static-neutral-200": "#cdcdc5",
		    "--dsw-static-neutral-250": "#c2c2ba",
		    "--dsw-static-neutral-300": "#b6b6ae",
		    "--dsw-static-neutral-400": "#8f8f96",
		    "--dsw-static-neutral-500": "#6d6d7a",
		    "--dsw-static-neutral-550": "#5c5c6b",
		    "--dsw-static-neutral-600": "#4d4d5e",
		    "--dsw-static-neutral-700": "#3e3e50",
		    "--dsw-static-neutral-800": "#30303f",
		    "--dsw-static-neutral-850": "#282a36",
		    "--dsw-static-neutral-900": "#20212b",
		    "--dsw-static-neutral-1000": "#191a21",
		    "--dsw-static-neutral-00": "#f8f8f2",
		    "--dsw-static-neutral-bluish-50": "#e3e5e7",
		    "--dsw-static-neutral-bluish-60": "#dde0e4",
		    "--dsw-static-neutral-bluish-75": "#d4d8df",
		    "--dsw-static-neutral-bluish-100": "#cbd0db",
		    "--dsw-static-neutral-bluish-150": "#bfc5d4",
		    "--dsw-static-neutral-bluish-200": "#b3bace",
		    "--dsw-static-neutral-bluish-250": "#a7b0c8",
		    "--dsw-static-neutral-bluish-300": "#9ba5c2",
		    "--dsw-static-neutral-bluish-400": "#8995b8",
		    "--dsw-static-neutral-bluish-500": "#7986b0",
		    "--dsw-static-neutral-bluish-600": "#6272a4",
		    "--dsw-static-neutral-bluish-700": "#3b3d52",
		    "--dsw-static-neutral-bluish-750": "#353749",
		    "--dsw-static-neutral-bluish-800": "#2e3040",
		    "--dsw-static-neutral-bluish-850": "#343746",
		    "--dsw-static-neutral-bluish-875": "#262733",
		    "--dsw-static-neutral-bluish-900": "#1f2029",
		    "--dsw-static-neutral-bluish-950": "#232530",
		    "--dsw-static-neutral-bluish-1000": "#171821",
		    "--dsw-static-neutral-bluish-00": "#f8f8f2",
		    "--dsw-static-deepseek-50": "#f5f0fe",
		    "--dsw-static-deepseek-100": "#ece1fc",
		    "--dsw-static-deepseek-200": "#dfccfa",
		    "--dsw-static-deepseek-300": "#cdb1f7",
		    "--dsw-static-deepseek-400": "#bd93f9",
		    "--dsw-static-deepseek-450": "#ac7ef2",
		    "--dsw-static-deepseek-500": "#9a68ea",
		    "--dsw-static-deepseek-600": "#8353d4",
		    "--dsw-static-deepseek-800": "#4a2f85",
		    "--dsw-static-deepseek-900": "#3b2569",
		    "--dsw-static-deepseek-700-delete": "#5f3ba6",
		    "--dsw-static-blue-50": "#eafcff",
		    "--dsw-static-blue-75": "#c6f3fd",
		    "--dsw-static-blue-100": "#b0edfc",
		    "--dsw-static-blue-300": "#8be9fd",
		    "--dsw-static-blue-400": "#6fd8f0",
		    "--dsw-static-blue-450": "#58c6e2",
		    "--dsw-static-blue-500": "#41b0cf",
		    "--dsw-static-blue-600": "#2b94b5",
		    "--dsw-static-blue-800": "#1c6a86",
		    "--dsw-static-blue-900": "#165064",
		    "--dsw-static-blue-950": "#103d4d",
		    "--dsw-static-blue-50p": "#d9f8fe",
		    "--dsw-static-red-50": "#ffecec",
		    "--dsw-static-red-100": "#ffd9d9",
		    "--dsw-static-red-400": "#ff5555",
		    "--dsw-static-red-500": "#ec4d4d",
		    "--dsw-static-red-600": "#cd4141",
		    "--dsw-static-red-900": "#5e2727",
		    "--dsw-static-green-100": "#dcfce6",
		    "--dsw-static-green-400": "#50fa7b",
		    "--dsw-static-green-500": "#3fdd68",
		    "--dsw-static-green-900": "#205c38",
		    "--dsw-static-amber-100": "#fff0dc",
		    "--dsw-static-amber-400": "#ffb86c",
		    "--dsw-static-amber-500": "#f2a352",
		    "--dsw-static-amber-600": "#d48b43",
		    "--dsw-static-amber-900": "#6b4521",
		    "--dsw-alias-bg-base": "#232530",
		    "--dsw-alias-bg-layer-1": "#262733",
		    "--dsw-alias-bg-layer-2": "#343746",
		    "--dsw-alias-bg-layer-3": "#353748",
		    "--dsw-alias-bg-module-platform": "#353748",
		    "--dsw-alias-bg-overlay": "#3e4054",
		    "--dsw-alias-bg-multi-select": "#3a3c4e",
		    "--dsw-alias-bg-skeleton": "rgba(248, 248, 242, 0.05)",
		    "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.45)",
		    "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.55)",
		    "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.65)",
		    "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
		    "--dsw-alias-bg-mask-drop": "rgba(28, 29, 38, 0.7)",
		    "--dsw-alias-border-l1": "rgba(248, 248, 242, 0.06)",
		    "--dsw-alias-border-l2": "rgba(248, 248, 242, 0.12)",
		    "--dsw-alias-border-l3": "rgba(248, 248, 242, 0.16)",
		    "--dsw-alias-border-l4": "rgba(248, 248, 242, 0.2)",
		    "--dsw-alias-border-inverted": "rgba(0, 0, 0, 0.08)",
		    "--dsw-alias-border-inverted2": "rgba(0, 0, 0, 0.12)",
		    "--dsw-alias-border-l2-darkmode-thin": "rgba(248, 248, 242, 0.08)",
		    "--dsw-alias-brand-primary": "#bd93f9",
		    "--dsw-alias-brand-primary-invert": "#f8f8f2",
		    "--dsw-alias-brand-primary-new-colorprimary-new-color": "#bd93f9",
		    "--dsw-alias-brand-text": "#1c1d26",
		    "--dsw-alias-button-contrast-fill": "#f8f8f2",
		    "--dsw-alias-button-elevated-fill": "#353748",
		    "--dsw-alias-button-floating-fill": "#3a3c4e",
		    "--dsw-alias-button-floating-hover": "#3e4054",
		    "--dsw-alias-button-ghost-active-border": "#6272a4",
		    "--dsw-alias-button-ghost-active-fill": "#353748",
		    "--dsw-alias-button-ghost-active-hover": "#3a3c4e",
		    "--dsw-alias-button-info-fill": "#bd93f9",
		    "--dsw-alias-button-info-hover": "#63479e",
		    "--dsw-alias-button-primary-dimmed": "#6d5b93",
		    "--dsw-alias-button-primary-fill": "#bd93f9",
		    "--dsw-alias-button-primary-hover": "#caa9fa",
		    "--dsw-alias-button-tool-bar-fill": "rgba(248, 248, 242, 0.07)",
		    "--dsw-alias-button-tool-bar-fill-invisible": "rgba(248, 248, 242, 0.04)",
		    "--dsw-alias-button-tool-bar-hover": "rgba(248, 248, 242, 0.12)",
		    "--dsw-alias-interactive-bg-active": "rgba(248, 248, 242, 0.14)",
		    "--dsw-alias-interactive-bg-hover": "rgba(248, 248, 242, 0.08)",
		    "--dsw-alias-interactive-bg-hover-accent": "rgba(189, 147, 249, 0.14)",
		    "--dsw-alias-interactive-bg-hover-danger": "rgba(255, 85, 85, 0.14)",
		    "--dsw-alias-interactive-bg-hover-solid": "#3e4054",
		    "--dsw-alias-label-caption": "#6272a4",
		    "--dsw-alias-label-dimmed": "#46536f",
		    "--dsw-alias-label-primary": "#f8f8f2",
		    "--dsw-alias-label-primary-bluish": "#f8f8f2",
		    "--dsw-alias-label-primary-dimmed": "#aab3d1",
		    "--dsw-alias-label-primary-foreground": "#1c1d26",
		    "--dsw-alias-label-primary-inverted": "#353749",
		    "--dsw-alias-label-secondary": "#6272a4",
		    "--dsw-alias-label-tertiary": "#55638a",
		    "--dsw-alias-markdown-citation": "#3a3c4e",
		    "--dsw-alias-markdown-code-block": "#1e1f28",
		    "--dsw-alias-markdown-code-block-banner": "#21222c",
		    "--dsw-alias-markdown-code-segment-selected": "#353749",
		    "--dsw-alias-markdown-code-segment-unselected": "#1e1f28",
		    "--dsw-alias-markdown-inline-code": "#3a3c4e",
		    "--dsw-alias-markdown-placeholder": "#46536f",
		    "--dsw-alias-markdown-tag": "#bd93f9",
		    "--dsw-alias-scrollbar-bg-l1": "#3a3c4e",
		    "--dsw-alias-scrollbar-bg-l2": "#3e4054",
		    "--dsw-alias-scrollbar-hover-l1": "#6272a4",
		    "--dsw-alias-scrollbar-hover-l2": "#6272a4",
		    "--dsw-alias-separator-primary": "rgba(189, 147, 249, 0.8)",
		    "--dsw-alias-state-business-primary": "#8be9fd",
		    "--dsw-alias-state-business-tertiary": "rgba(139, 233, 253, 0.1)",
		    "--dsw-alias-state-error-primary": "#ff5555",
		    "--dsw-alias-state-error-secondary": "rgba(255, 85, 85, 0.16)",
		    "--dsw-alias-state-success-primary": "#50fa7b",
		    "--dsw-alias-state-success-secondary": "rgba(80, 250, 123, 0.16)",
		    "--dsw-alias-state-success-tertiary": "rgba(80, 250, 123, 0.1)",
		    "--dsw-alias-state-warn-label": "#ffca80",
		    "--dsw-alias-state-warn-primary": "#ffb86c",
		    "--dsw-alias-state-warn-secondary": "rgba(255, 184, 108, 0.16)",
		    "--dsw-alias-state-warn-tertiary": "rgba(255, 184, 108, 0.1)",
		    "--dsw-alias-toast-bg": "#353748",
		    "--dsw-alias-tooltip-bg": "#3a3c4e",
		    "--dsw-specific-sidebar-fill": "#262733",
		    "--dsw-specific-sidebar-nav-item-active": "#353749",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(189, 147, 249, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "#2e3040",
		    "--dsw-specific-bubble": "#2e3040",
		    "--dsw-specific-bubble-highlight": "#3b3d52",
		    "--dsw-specific-input-major": "#262733",
		    "--dsw-specific-login-input": "#262733",
		    "--dsw-specific-menu": "#2e3040",
		    "--dsw-specific-selector": "#3b3d52",
		    "--dsw-specific-tip": "#2e3040",
		    "--shiki-foreground": "#f8f8f2",
		    "--shiki-background": "#282a36",
		    "--shiki-token-constant": "#bd93f9",
		    "--shiki-token-string": "#f1fa8c",
		    "--shiki-token-comment": "#6272a4",
		    "--shiki-token-keyword": "#ff79c6",
		    "--shiki-token-parameter": "#ffb86c",
		    "--shiki-token-function": "#50fa7b",
		    "--shiki-token-string-expression": "#f1fa8c",
		    "--shiki-token-punctuation": "#f8f8f2",
		    "--shiki-token-link": "#8be9fd",
		    "--shiki-token-inserted": "#50fa7b",
		    "--shiki-token-deleted": "#ff5555",
		    "--shiki-token-changed": "#ffb86c"
		  }
		}
		];

		/** Simplified Chinese dictionary (the key-set source of truth). */
		const zh = {
			"skin.title": "德古拉主题",
			"skin.default": "默认",
			"skin.dracula": "Dracula",
			"skin.dracula-soft": "Dracula Soft"
		};

		/** English dictionary, checked complete against the zh key set. */
		const en = {
			"skin.title": "Dracula theme",
			"skin.default": "Default",
			"skin.dracula": "Dracula",
			"skin.dracula-soft": "Dracula Soft"
		};
		//#endregion

		//#region dsh-dracula: persistence
		/** Read a localStorage string value (null on absence or error). */
		function readStorage(key) {
			try {
				const value = window.localStorage.getItem(key);
				return typeof value === "string" ? value : null;
			} catch {
				return null;
			}
		}

		/** Write (or remove with null) a localStorage value. */
		function writeStorage(key, value) {
			try {
				if (value === null) window.localStorage.removeItem(key);
				else window.localStorage.setItem(key, value);
			} catch {
				// storage unavailable / quota — the preference stays process-local
			}
		}

		/** Saved skin id (may be unknown/absent). */
		function readSavedSkin() {
			return readStorage(STORAGE_KEY);
		}

		/** Persist a skin choice; DEFAULT_SKIN clears the stored value. */
		function writeSavedSkin(id) {
			writeStorage(STORAGE_KEY, id === DEFAULT_SKIN ? null : id);
		}
		//#endregion

		//#region dsh-dracula: settings row store
		/**
		 * Skin row slot store: a mirror of the theme service snapshot. The
		 * plugin's apply-world change listener is the only writer; the row
		 * component reads via props.useStore.
		 */
		function createSkinStore() {
			return (0, _runtime_client.defineStore)({
				init: () => ({
					skin: DEFAULT_SKIN,
					revision: -1
				}),
				actions: {
					sync: (d, skin, revision) => {
						if (revision <= d.revision) return;
						d.skin = skin;
						d.revision = revision;
					}
				}
			});
		}
		//#endregion

		//#region dsh-dracula: settings row
		/** Inline style sheet for the row (kept dependency-free). */
		const styles = {
			group: {
				borderBottom: "1px solid var(--dsw-alias-border-l2)",
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				padding: "16px 0"
			},
			title: {
				color: "var(--dsw-alias-label-primary)",
				fontSize: "14px",
				fontWeight: 400,
				lineHeight: "22px"
			},
			grid: {
				display: "flex",
				flexWrap: "wrap",
				gap: "10px"
			},
			card: {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "6px",
				width: "96px",
				padding: "3px",
				borderRadius: "10px",
				// longhand on purpose: the shorthand leaves borderColor to
				// fall back to currentColor once React clears the selected
				// override, painting stale black/white boxes on deselect
				borderWidth: "2px",
				borderStyle: "solid",
				borderColor: "transparent",
				background: "transparent",
				cursor: "pointer",
				font: "inherit",
				boxSizing: "border-box"
			},
			cardSelected: {
				borderColor: "var(--dsw-alias-brand-primary)",
				background: "var(--dsw-alias-interactive-bg-hover)"
			},
			cardLabel: {
				color: "var(--dsw-alias-label-secondary)",
				fontSize: "12px",
				lineHeight: "16px",
				whiteSpace: "nowrap"
			},
			cardLabelSelected: {
				color: "var(--dsw-alias-label-primary)"
			},
			swatch: {
				width: "100%",
				height: "52px",
				borderRadius: "8px",
				boxSizing: "border-box",
				padding: "8px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: "6px"
			},
			swatchLine: {
				height: "7px",
				borderRadius: "4px"
			},
			defaultSwatch: {
				width: "100%",
				height: "52px",
				borderRadius: "8px",
				boxSizing: "border-box",
				display: "flex",
				overflow: "hidden",
				border: "1px solid var(--dsw-alias-border-l2)"
			}
		};

		/** Mini palette preview driven by one skin's token table. */
		function Swatch({ tokens }) {
			return (0, react_jsx_runtime.jsxs)("div", {
				style: {
					...styles.swatch,
					background: tokens["--dsw-alias-bg-layer-2"],
					border: `1px solid ${tokens["--dsw-alias-border-l2"]}`
				},
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						style: {
							...styles.swatchLine,
							width: "70%",
							background: tokens["--dsw-alias-label-primary"]
						}
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: {
							...styles.swatchLine,
							width: "45%",
							background: tokens["--dsw-alias-brand-primary"]
						}
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: {
							...styles.swatchLine,
							width: "55%",
							background: tokens["--dsw-alias-label-secondary"],
							opacity: 0.55
						}
					})
				]
			});
		}

		/** "Default" chip: follow the built-in appearance (light + dark halves). */
		function DefaultSwatch() {
			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.defaultSwatch,
				children: [
					(0, react_jsx_runtime.jsx)("div", { style: { flex: 1, background: "#f4f4f5" } }),
					(0, react_jsx_runtime.jsx)("div", { style: { flex: 1, background: "#1c1c20" } })
				]
			});
		}

		/** One selectable skin card. */
		function SkinCard({ skin, selected, onSelect, t }) {
			return (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: (event) => {
					onSelect();
					// drop focus so a stale focus ring never outlives the selection
					event.currentTarget.blur();
				},
				"aria-pressed": selected,
				style: {
					...styles.card,
					...(selected ? styles.cardSelected : {})
				},
				children: [
					(0, react_jsx_runtime.jsx)(Swatch, { tokens: skin.tokens }),
					(0, react_jsx_runtime.jsx)("span", {
						style: {
							...styles.cardLabel,
							...(selected ? styles.cardLabelSelected : {})
						},
						children: t(`skin.${skin.id}`)
					})
				]
			});
		}

		/**
		 * Skin picker row registered into the Settings → General item slot,
		 * right after the built-in Appearance row: title + a "Default" chip
		 * and one swatch card per Dracula variant.
		 */
		function SkinRow({ t, setSkin, useStore }) {
			const skin = useStore((s) => s.skin);
			const selected = SKINS.some((candidate) => candidate.id === skin) ? skin : null;
			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.group,
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						style: styles.title,
						children: t("skin.title")
					}),
					(0, react_jsx_runtime.jsxs)("div", {
						style: styles.grid,
						children: [
							(0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: (event) => {
									setSkin(DEFAULT_SKIN);
									// drop focus so a stale focus ring never outlives the selection
									event.currentTarget.blur();
								},
								"aria-pressed": selected === null,
								style: {
									...styles.card,
									...(selected === null ? styles.cardSelected : {})
								},
								children: [
									(0, react_jsx_runtime.jsx)(DefaultSwatch, {}),
									(0, react_jsx_runtime.jsx)("span", {
										style: {
											...styles.cardLabel,
											...(selected === null ? styles.cardLabelSelected : {})
										},
										children: t("skin.default")
									})
								]
							}),
							SKINS.map((skinDefinition) => (0, react_jsx_runtime.jsx)(SkinCard, {
								skin: skinDefinition,
								selected: selected === skinDefinition.id,
								onSelect: () => setSkin(skinDefinition.id),
								t
							}, skinDefinition.id))
						]
					})
				]
			});
		}
		//#endregion

		//#region dsh-dracula: client plugin body
		/**
		 * Required services: theme runtime (skins, switching), slots/locale
		 * (the settings row). Persistence is localStorage, so no settings
		 * transport is needed.
		 */
		const inject = [
			"slots",
			"locale",
			"theme"
		];

		/**
		 * Client plugin body: register the Dracula skins into the theme
		 * runtime, restore the saved choice, keep the row's store in sync
		 * with theme/change, and register the picker into Settings → General.
		 * @param ctx - client cordis context.
		 */
		function apply(ctx) {
			const disposers = SKINS.map((skinDefinition) => ctx.theme.register(skinDefinition));
			ctx.effect(() => () => {
				for (const dispose of disposers) dispose();
			}, "dsh-dracula: theme registration");

			// Restore the saved skin. The ThemeService adopts its durable
			// built-in preference ("light"/"dark"/"system") from the Host
			// settings scope asynchronously after boot, which overwrites a
			// third-party preference restored too early. Re-assert the saved
			// skin for a short boot window (a handful of change events or a
			// few seconds), then yield to subsequent user actions.
			const saved = readSavedSkin();
			const savedValid = typeof saved === "string" && saved !== DEFAULT_SKIN && SKINS.some((skinDefinition) => skinDefinition.id === saved);
			let bootGuard = savedValid ? 3 : 0;
			const reassertSaved = () => {
				if (bootGuard <= 0) return;
				const current = ctx.theme.getTheme().preference;
				if (current === saved) return;
				bootGuard -= 1;
				ctx.theme.setTheme(saved);
			};
			reassertSaved();
			const bootWindow = setTimeout(() => {
				bootGuard = 0;
			}, 5000);
			ctx.effect(() => () => {
				clearTimeout(bootWindow);
			}, "dsh-dracula: boot restore window");

			const skinStore = createSkinStore();
			let skinBound;
			const syncSkin = (snapshot) => {
				skinBound?.sync(snapshot.preference, snapshot.revision);
			};
			ctx.on("theme/change", (snapshot) => {
				syncSkin(snapshot);
				// If the preference moved to another plugin's third-party theme,
				// drop our stored choice so only the last-picked plugin restores
				// at boot (both plugins must implement this convention).
				const pref = snapshot.preference;
				if (pref !== DEFAULT_SKIN && pref !== "light" && pref !== "dark" && !SKINS.some((skinDefinition) => skinDefinition.id === pref)) {
					writeSavedSkin(DEFAULT_SKIN);
				}
				// Re-assert from a fresh task: a re-entrant setTheme inside the
				// dispatch is missed by other subscribers (ui-layout's
				// ThemePresenter), so the restored skin would never reach the DOM.
				setTimeout(() => {
					reassertSaved();
				}, 0);
			});

			ctx.effect(() => ctx.locale.register(SETTINGS_NS, {
				zh,
				en
			}), "dsh-dracula: settings row dictionaries");

			const skinInjected = (actions) => {
				skinBound = actions;
				syncSkin(ctx.theme.getTheme());
				return {
					setSkin: (id) => {
						ctx.theme.setTheme(id);
						writeSavedSkin(id);
					}
				};
			};
			ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "dracula",
				order: 19,
				store: skinStore,
				locale: SETTINGS_NS,
				inject: skinInjected
			}, SkinRow));
		}
		//#endregion

		exports.SKINS = SKINS;
		exports.DEFAULT_SKIN = DEFAULT_SKIN;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
