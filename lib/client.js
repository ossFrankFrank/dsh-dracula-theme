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
		    "--dsw-static-neutral-200": "#cdcdc5",
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
		    "--dsw-static-neutral-description": "Anchor stops of the neutral grayscale ramp (--dsw-static-neutral-*), lightest (00) to darkest (1000). The official port does not override this ramp; values are Dracula-gray interpolations for a self-contained theme.",
		    "--dsw-static-neutral-00": "#f8f8f2",
		    "--dsw-static-neutral-bluish-50": "#f8f8f2",
		    "--dsw-static-neutral-bluish-60": "#282a36",
		    "--dsw-static-neutral-bluish-75": "#eef0f8",
		    "--dsw-static-neutral-bluish-100": "#e8eaf4",
		    "--dsw-static-neutral-bluish-150": "#d8ddef",
		    "--dsw-static-neutral-bluish-200": "#ccd2e8",
		    "--dsw-static-neutral-bluish-250": "#c4cbe3",
		    "--dsw-static-neutral-bluish-300": "#bbc4de",
		    "--dsw-static-neutral-bluish-400": "#9ba9d0",
		    "--dsw-static-neutral-bluish-500": "#7b8fc4",
		    "--dsw-static-neutral-bluish-550": "#6f81b4",
		    "--dsw-static-neutral-bluish-600": "#6272a4",
		    "--dsw-static-neutral-bluish-700": "#6272a4",
		    "--dsw-static-neutral-bluish-750": "#44475a",
		    "--dsw-static-neutral-bluish-800": "#44475a",
		    "--dsw-static-neutral-bluish-850": "#2e3040",
		    "--dsw-static-neutral-bluish-875": "#282a36",
		    "--dsw-static-neutral-bluish-900": "#282a36",
		    "--dsw-static-neutral-bluish-950": "#20212b",
		    "--dsw-static-neutral-bluish-1000": "#1a1b24",
		    "--dsw-static-neutral-bluish-00": "#f8f8f2",
		    "--dsw-static-deepseek-50": "#f0eaff",
		    "--dsw-static-deepseek-100": "#e0d2fe",
		    "--dsw-static-deepseek-200": "#c8aafd",
		    "--dsw-static-deepseek-300": "#b088fc",
		    "--dsw-static-deepseek-400": "#8be9fd",
		    "--dsw-static-deepseek-450": "#bd93f9",
		    "--dsw-static-deepseek-500": "#a97dfa",
		    "--dsw-static-deepseek-600": "#7a5abf",
		    "--dsw-static-deepseek-800": "#44475a",
		    "--dsw-static-deepseek-900": "#383a4a",
		    "--dsw-static-deepseek-description": "--dsw-static-deepseek-* overrides from the official port. 400 link / brand-text → cyan, 450 brand-primary → purple, 500 hover.",
		    "--dsw-static-deepseek-700-delete": "#5a3e99",
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
		    "--dsw-alias-bg-base": "#20212b",
		    "--dsw-alias-bg-layer-1": "#282a36",
		    "--dsw-alias-bg-layer-2": "#2e3040",
		    "--dsw-alias-bg-layer-3": "#44475a",
		    "--dsw-alias-bg-module-platform": "#44475a",
		    "--dsw-alias-bg-overlay": "#44475a",
		    "--dsw-alias-bg-multi-select": "#44475a",
		    "--dsw-alias-bg-skeleton": "rgba(248, 248, 242, 0.05)",
		    "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.45)",
		    "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.55)",
		    "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.65)",
		    "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
		    "--dsw-alias-bg-mask-drop": "rgba(32, 33, 43, 0.7)",
		    "--dsw-alias-border-l1": "color-mix(in srgb, #6272a4 30%, transparent)",
		    "--dsw-alias-border-l2": "color-mix(in srgb, #6272a4 45%, transparent)",
		    "--dsw-alias-border-l3": "color-mix(in srgb, #6272a4 60%, transparent)",
		    "--dsw-alias-border-l4": "color-mix(in srgb, #6272a4 75%, transparent)",
		    "--dsw-alias-border-inverted": "rgba(0, 0, 0, 0.08)",
		    "--dsw-alias-border-inverted2": "rgba(0, 0, 0, 0.12)",
		    "--dsw-alias-border-l2-darkmode-thin": "rgba(98, 114, 164, 0.3)",
		    "--dsw-alias-brand-primary": "#bd93f9",
		    "--dsw-alias-brand-primary-invert": "#f8f8f2",
		    "--dsw-alias-brand-primary-new-colorprimary-new-color": "#bd93f9",
		    "--dsw-alias-brand-text": "#8be9fd",
		    "--dsw-alias-button-contrast-fill": "#282a36",
		    "--dsw-alias-button-elevated-fill": "#2e3040",
		    "--dsw-alias-button-floating-fill": "#44475a",
		    "--dsw-alias-button-floating-hover": "#6272a4",
		    "--dsw-alias-button-ghost-active-border": "#6272a4",
		    "--dsw-alias-button-ghost-active-fill": "#2e3040",
		    "--dsw-alias-button-ghost-active-hover": "#44475a",
		    "--dsw-alias-button-info-fill": "#bd93f9",
		    "--dsw-alias-button-info-hover": "#5a3e99",
		    "--dsw-alias-button-primary-dimmed": "#7a5abf",
		    "--dsw-alias-button-primary-fill": "#bd93f9",
		    "--dsw-alias-button-primary-hover": "#a97dfa",
		    "--dsw-alias-button-tool-bar-fill": "rgba(98, 114, 164, 0.35)",
		    "--dsw-alias-button-tool-bar-fill-invisible": "rgba(98, 114, 164, 0.2)",
		    "--dsw-alias-button-tool-bar-hover": "rgba(189, 147, 249, 0.35)",
		    "--dsw-alias-interactive-bg-active": "rgba(248, 248, 242, 0.14)",
		    "--dsw-alias-interactive-bg-hover": "rgba(248, 248, 242, 0.08)",
		    "--dsw-alias-interactive-bg-hover-accent": "rgba(189, 147, 249, 0.16)",
		    "--dsw-alias-interactive-bg-hover-danger": "rgba(255, 85, 85, 0.14)",
		    "--dsw-alias-interactive-bg-hover-solid": "#44475a",
		    "--dsw-alias-label-caption": "#6272a4",
		    "--dsw-alias-label-dimmed": "#7b8fc4",
		    "--dsw-alias-label-primary": "#f8f8f2",
		    "--dsw-alias-label-primary-bluish": "#f8f8f2",
		    "--dsw-alias-label-primary-dimmed": "#9ba9d0",
		    "--dsw-alias-label-primary-foreground": "#282a36",
		    "--dsw-alias-label-primary-inverted": "#44475a",
		    "--dsw-alias-label-secondary": "#bbc4de",
		    "--dsw-alias-label-tertiary": "#9ba9d0",
		    "--dsw-alias-markdown-citation": "#44475a",
		    "--dsw-alias-markdown-code-block": "#2e3040",
		    "--dsw-alias-markdown-code-block-banner": "#282a36",
		    "--dsw-alias-markdown-code-segment-selected": "#44475a",
		    "--dsw-alias-markdown-code-segment-unselected": "#2e3040",
		    "--dsw-alias-markdown-inline-code": "#44475a",
		    "--dsw-alias-markdown-placeholder": "#7b8fc4",
		    "--dsw-alias-markdown-tag": "#bd93f9",
		    "--dsw-alias-scrollbar-bg-l1": "rgba(98, 114, 164, 0.4)",
		    "--dsw-alias-scrollbar-bg-l2": "rgba(98, 114, 164, 0.4)",
		    "--dsw-alias-scrollbar-hover-l1": "rgba(189, 147, 249, 0.6)",
		    "--dsw-alias-scrollbar-hover-l2": "rgba(189, 147, 249, 0.6)",
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
		    "--dsw-alias-tooltip-bg": "#44475a",
		    "--dsw-specific-sidebar-fill": "#282a36",
		    "--dsw-specific-sidebar-nav-item-active": "#44475a",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(189, 147, 249, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "#2e3040",
		    "--dsw-specific-bubble": "#2e3040",
		    "--dsw-specific-bubble-highlight": "#44475a",
		    "--dsw-specific-input-major": "#282a36",
		    "--dsw-specific-login-input": "#282a36",
		    "--dsw-specific-menu": "#2e3040",
		    "--dsw-specific-selector": "#44475a",
		    "--dsw-specific-tip": "#2e3040",
		    "--shiki-description": "The official Prism token mapping, translated to the DSH shiki vocabulary: comments #6272a4, punctuation #f8f8f2, tags/parameters/this → cyan, numbers/constants/strings/inserted → yellow, keywords/operators/builtins/regex → pink, functions → green, deleted/important → red.",
		    "--shiki-foreground": "#f8f8f2",
		    "--shiki-background": "#282a36",
		    "--shiki-token-comment": "#6272a4",
		    "--shiki-token-punctuation": "#f8f8f2",
		    "--shiki-token-constant": "#f1fa8c",
		    "--shiki-token-string": "#f1fa8c",
		    "--shiki-token-string-expression": "#f1fa8c",
		    "--shiki-token-inserted": "#f1fa8c",
		    "--shiki-token-link": "#f1fa8c",
		    "--shiki-token-keyword": "#ff79c6",
		    "--shiki-token-parameter": "#8be9fd",
		    "--shiki-token-function": "#50fa7b",
		    "--shiki-token-deleted": "#ff5555",
		    "--shiki-token-changed": "#ffb86c",
		    "--scroll-color": "rgba(98, 114, 164, 0.4)",
		    "--scroll-color-hover": "rgba(189, 147, 249, 0.6)"
		  }
		},
		{
		  "id": "dracula-soft",
		  "name": "Dracula Soft",
		  "colorScheme": "dark",
		  "tokens": {
		    "--dsw-static-neutral-50": "#efefe9",
		    "--dsw-static-neutral-100": "#e2e2da",
		    "--dsw-static-neutral-200": "#cdcdc5",
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
		    "--dsw-static-neutral-description": "Anchor stops of the neutral grayscale ramp (--dsw-static-neutral-*), lightest (00) to darkest (1000). The official port does not override this ramp; values are Dracula-gray interpolations for a self-contained theme.",
		    "--dsw-static-neutral-00": "#f8f8f2",
		    "--dsw-static-neutral-bluish-50": "#f8f8f2",
		    "--dsw-static-neutral-bluish-60": "#282a36",
		    "--dsw-static-neutral-bluish-75": "#eef0f8",
		    "--dsw-static-neutral-bluish-100": "#e8eaf4",
		    "--dsw-static-neutral-bluish-150": "#d8ddef",
		    "--dsw-static-neutral-bluish-200": "#ccd2e8",
		    "--dsw-static-neutral-bluish-250": "#c4cbe3",
		    "--dsw-static-neutral-bluish-300": "#bbc4de",
		    "--dsw-static-neutral-bluish-400": "#9ba9d0",
		    "--dsw-static-neutral-bluish-500": "#7b8fc4",
		    "--dsw-static-neutral-bluish-550": "#6f81b4",
		    "--dsw-static-neutral-bluish-600": "#6272a4",
		    "--dsw-static-neutral-bluish-700": "#6272a4",
		    "--dsw-static-neutral-bluish-750": "#44475a",
		    "--dsw-static-neutral-bluish-800": "#44475a",
		    "--dsw-static-neutral-bluish-850": "#343746",
		    "--dsw-static-neutral-bluish-875": "#2b2d3a",
		    "--dsw-static-neutral-bluish-900": "#2b2d3a",
		    "--dsw-static-neutral-bluish-950": "#262833",
		    "--dsw-static-neutral-bluish-1000": "#1a1b24",
		    "--dsw-static-neutral-bluish-00": "#f8f8f2",
		    "--dsw-static-deepseek-50": "#f0eaff",
		    "--dsw-static-deepseek-100": "#e0d2fe",
		    "--dsw-static-deepseek-200": "#c8aafd",
		    "--dsw-static-deepseek-300": "#b088fc",
		    "--dsw-static-deepseek-400": "#8be9fd",
		    "--dsw-static-deepseek-450": "#bd93f9",
		    "--dsw-static-deepseek-500": "#a97dfa",
		    "--dsw-static-deepseek-600": "#7a5abf",
		    "--dsw-static-deepseek-800": "#44475a",
		    "--dsw-static-deepseek-900": "#383a4a",
		    "--dsw-static-deepseek-description": "--dsw-static-deepseek-* overrides from the official port. 400 link / brand-text → cyan, 450 brand-primary → purple, 500 hover.",
		    "--dsw-static-deepseek-700-delete": "#5a3e99",
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
		    "--dsw-alias-bg-base": "#262833",
		    "--dsw-alias-bg-layer-1": "#2b2d3a",
		    "--dsw-alias-bg-layer-2": "#343746",
		    "--dsw-alias-bg-layer-3": "#44475a",
		    "--dsw-alias-bg-module-platform": "#44475a",
		    "--dsw-alias-bg-overlay": "#44475a",
		    "--dsw-alias-bg-multi-select": "#44475a",
		    "--dsw-alias-bg-skeleton": "rgba(248, 248, 242, 0.05)",
		    "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.45)",
		    "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.55)",
		    "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.65)",
		    "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
		    "--dsw-alias-bg-mask-drop": "rgba(32, 33, 43, 0.7)",
		    "--dsw-alias-border-l1": "color-mix(in srgb, #6272a4 30%, transparent)",
		    "--dsw-alias-border-l2": "color-mix(in srgb, #6272a4 45%, transparent)",
		    "--dsw-alias-border-l3": "color-mix(in srgb, #6272a4 60%, transparent)",
		    "--dsw-alias-border-l4": "color-mix(in srgb, #6272a4 75%, transparent)",
		    "--dsw-alias-border-inverted": "rgba(0, 0, 0, 0.08)",
		    "--dsw-alias-border-inverted2": "rgba(0, 0, 0, 0.12)",
		    "--dsw-alias-border-l2-darkmode-thin": "rgba(98, 114, 164, 0.3)",
		    "--dsw-alias-brand-primary": "#bd93f9",
		    "--dsw-alias-brand-primary-invert": "#f8f8f2",
		    "--dsw-alias-brand-primary-new-colorprimary-new-color": "#bd93f9",
		    "--dsw-alias-brand-text": "#8be9fd",
		    "--dsw-alias-button-contrast-fill": "#282a36",
		    "--dsw-alias-button-elevated-fill": "#343746",
		    "--dsw-alias-button-floating-fill": "#44475a",
		    "--dsw-alias-button-floating-hover": "#59658e",
		    "--dsw-alias-button-ghost-active-border": "#6272a4",
		    "--dsw-alias-button-ghost-active-fill": "#343746",
		    "--dsw-alias-button-ghost-active-hover": "#44475a",
		    "--dsw-alias-button-info-fill": "#bd93f9",
		    "--dsw-alias-button-info-hover": "#5a3e99",
		    "--dsw-alias-button-primary-dimmed": "#7a5abf",
		    "--dsw-alias-button-primary-fill": "#bd93f9",
		    "--dsw-alias-button-primary-hover": "#a97dfa",
		    "--dsw-alias-button-tool-bar-fill": "rgba(98, 114, 164, 0.35)",
		    "--dsw-alias-button-tool-bar-fill-invisible": "rgba(98, 114, 164, 0.2)",
		    "--dsw-alias-button-tool-bar-hover": "rgba(189, 147, 249, 0.35)",
		    "--dsw-alias-interactive-bg-active": "rgba(248, 248, 242, 0.14)",
		    "--dsw-alias-interactive-bg-hover": "rgba(248, 248, 242, 0.08)",
		    "--dsw-alias-interactive-bg-hover-accent": "rgba(189, 147, 249, 0.16)",
		    "--dsw-alias-interactive-bg-hover-danger": "rgba(255, 85, 85, 0.14)",
		    "--dsw-alias-interactive-bg-hover-solid": "#59658e",
		    "--dsw-alias-label-caption": "#6272a4",
		    "--dsw-alias-label-dimmed": "#7b8fc4",
		    "--dsw-alias-label-primary": "#f8f8f2",
		    "--dsw-alias-label-primary-bluish": "#f8f8f2",
		    "--dsw-alias-label-primary-dimmed": "#9ba9d0",
		    "--dsw-alias-label-primary-foreground": "#282a36",
		    "--dsw-alias-label-primary-inverted": "#44475a",
		    "--dsw-alias-label-secondary": "#bbc4de",
		    "--dsw-alias-label-tertiary": "#9ba9d0",
		    "--dsw-alias-markdown-citation": "#44475a",
		    "--dsw-alias-markdown-code-block": "#343746",
		    "--dsw-alias-markdown-code-block-banner": "#2b2d3a",
		    "--dsw-alias-markdown-code-segment-selected": "#44475a",
		    "--dsw-alias-markdown-code-segment-unselected": "#343746",
		    "--dsw-alias-markdown-inline-code": "#44475a",
		    "--dsw-alias-markdown-placeholder": "#7b8fc4",
		    "--dsw-alias-markdown-tag": "#bd93f9",
		    "--dsw-alias-scrollbar-bg-l1": "#44475a",
		    "--dsw-alias-scrollbar-bg-l2": "#44475a",
		    "--dsw-alias-scrollbar-hover-l1": "#59658e",
		    "--dsw-alias-scrollbar-hover-l2": "#59658e",
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
		    "--dsw-alias-toast-bg": "#343746",
		    "--dsw-alias-tooltip-bg": "#44475a",
		    "--dsw-specific-sidebar-fill": "#2b2d3a",
		    "--dsw-specific-sidebar-nav-item-active": "#44475a",
		    "--dsw-specific-sidebar-nav-item-active-accent": "rgba(189, 147, 249, 0.25)",
		    "--dsw-specific-sidebar-nav-item-hover": "#343746",
		    "--dsw-specific-bubble": "#343746",
		    "--dsw-specific-bubble-highlight": "#44475a",
		    "--dsw-specific-input-major": "#2b2d3a",
		    "--dsw-specific-login-input": "#2b2d3a",
		    "--dsw-specific-menu": "#343746",
		    "--dsw-specific-selector": "#44475a",
		    "--dsw-specific-tip": "#343746",
		    "--shiki-description": "The official Prism token mapping, translated to the DSH shiki vocabulary: comments #6272a4, punctuation #f8f8f2, tags/parameters/this → cyan, numbers/constants/strings/inserted → yellow, keywords/operators/builtins/regex → pink, functions → green, deleted/important → red.",
		    "--shiki-foreground": "#f8f8f2",
		    "--shiki-background": "#282a36",
		    "--shiki-token-comment": "#6272a4",
		    "--shiki-token-punctuation": "#f8f8f2",
		    "--shiki-token-constant": "#f1fa8c",
		    "--shiki-token-string": "#f1fa8c",
		    "--shiki-token-string-expression": "#f1fa8c",
		    "--shiki-token-inserted": "#f1fa8c",
		    "--shiki-token-link": "#f1fa8c",
		    "--shiki-token-keyword": "#ff79c6",
		    "--shiki-token-parameter": "#8be9fd",
		    "--shiki-token-function": "#50fa7b",
		    "--shiki-token-deleted": "#ff5555",
		    "--shiki-token-changed": "#ffb86c",
		    "--scroll-color": "rgba(98, 114, 164, 0.4)",
		    "--scroll-color-hover": "rgba(189, 147, 249, 0.6)"
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
			}, "dsh-dracula-theme: theme registration");

			// Surface polish derived from the official Dracula DeepSeek port:
			// user-message bubbles carry the brand tint, message reference
			// chips lose the hardcoded deepseek blue, and reasoning text
			// reads in the official brand cyan. Keyed on the stable
			// CSS-module suffixes and colored from our own injected theme
			// variables so it adapts per variant automatically.
			//
			// Every selector is boosted with :not(#dsh-dracula-theme): the
			// shipped ui-* stylesheets are injected by React after ours, so a
			// plain attribute selector loses to the equally specific module
			// class and the tint silently dies. The :not(id) pseudo is a
			// no-op predicate that only raises specificity (1,1,0).
			//
			// The sheet is mounted only while one of our skins is active and
			// removed on the "Default" preference, so the built-in appearance
			// stays pixel-identical unless the user picked a Dracula skin.
			const boost = (selector) =>
				selector.split(",").map((part) => `${part.trim()}:not(#dsh-dracula-theme)`).join(",");
			const SURFACE_RULES = [
				[
					"[class$=\"_userStack\"] [class$=\"_bubble\"]",
					"  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 30%, var(--dsw-alias-bg-layer-2));"
				],
				[
					"[class$=\"_refChip\"]",
					"  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 22%, transparent);"
				],
				[
					"[class$=\"_thinkBody\"]",
					"  color: var(--dsw-alias-brand-text);"
				]
			].map(([selector, body]) => `${boost(selector)} {\n${body}\n}`).join("\n");
			const style = document.createElement("style");
			style.textContent = SURFACE_RULES;
			const syncSurfaceTint = () => {
				const active = SKINS.some((skinDefinition) => skinDefinition.id === ctx.theme.getTheme().preference);
				if (active && !style.isConnected) document.head.appendChild(style);
				if (!active && style.isConnected) style.remove();
			};
			syncSurfaceTint();
			ctx.on("theme/change", syncSurfaceTint);
			ctx.effect(() => () => {
				style.remove();
			}, "dsh-dracula-theme: surface tint lifecycle");

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
