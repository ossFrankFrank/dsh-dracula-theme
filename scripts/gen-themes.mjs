#!/usr/bin/env node
/**
 * dsh-dracula-theme token generator.
 *
 * Builds the DSH theme-runtime token tables from palette/dracula.json and
 * regenerates:
 *
 *   - themes/dracula.json       the classic dark theme
 *   - themes/dracula-soft.json  the softer background variant
 *   - lib/client.js             the browser bundle, SKINS inlined from the
 *                               template (lib/client.tpl.js + __SKINS__)
 *
 * The canvas and brand ramps adopt the official Dracula DeepSeek port
 * (github.com/dracula/deepseek, MIT) verbatim — the same --dsw-static-*
 * vocabulary the DSH Web theme runtime uses. Missing ramp positions are
 * interpolated linearly in sRGB between the official anchors. The alias /
 * specific / shiki layers are derived from the official mapping so the whole
 * DSH surface stack reads as the official theme does.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const palette = JSON.parse(readFileSync(join(ROOT, "palette", "dracula.json"), "utf8"));
const C = palette.colors;
const OFF = palette.official;

/** Parse "#rrggbb" → [r, g, b]. */
const hex = (value) => value.match(/^#([0-9a-f]{6})$/i) && [1, 3, 5].map((i) => parseInt(value.slice(i, i + 2), 16));
/** [r, g, b] → "#rrggbb". */
const rgb = (c) => `#${c.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("")}`;
/** Linear sRGB mix: mix(a, b, t) — t=0 → a, t=1 → b. */
const mix = (a, b, t) => rgb(hex(a).map((v, i) => v + (hex(b)[i] - v) * t));
/** One interpolated ramp step between two anchor stops. */
const step = (a, b, t) => mix(a, b, t);

/**
 * Piecewise-linear ramp: given anchor stops {position: "#hex"} sorted by
 * position, return the color at `at` (clamped to the anchor range).
 */
function rampAt(anchors, at) {
  const positions = Object.keys(anchors).map(Number).sort((a, b) => a - b);
  if (at <= positions[0]) return anchors[positions[0]];
  for (let i = 1; i < positions.length; i++) {
    if (at <= positions[i]) {
      const lo = positions[i - 1];
      const hi = positions[i];
      return step(anchors[lo], anchors[hi], (at - lo) / (hi - lo));
    }
  }
  return anchors[positions[positions.length - 1]];
}

/** The full canvas (bluish) ramp: official anchors + interpolated gaps. */
const canvasPositions = ["00", "50", "60", "75", "100", "150", "200", "250", "300", "400", "500", "550", "600", "700", "750", "800", "850", "875", "900", "950", "1000"];
const canvas = Object.fromEntries(canvasPositions.map((p) => [p, rampAt(OFF.canvasRamp, Number(p))]));
canvas["1000"] = mix(canvas["950"], "#14151c", 0.5);

/** The neutral (text/border) grayscale ramp. */
const neutralRamp = palette.grayRamp;

/** Brand ramp — official deepseek values, verbatim. */
const deepseek = { ...OFF.brandRamp };

/** Secondary hues — Dracula accents at the same ramp positions as the built-in dark theme. */
const blue = {
  "50": "#eafcff", "50p": "#d9f8fe", "75": "#c6f3fd", "100": "#b0edfc",
  "300": C.cyan, "400": "#6fd8f0", "450": "#58c6e2", "500": "#41b0cf",
  "600": "#2b94b5", "800": "#1c6a86", "900": "#165064", "950": "#103d4d"
};
const red = { "50": "#ffecec", "100": "#ffd9d9", "400": C.red, "500": "#ec4d4d", "600": "#cd4141", "900": "#5e2727" };
const green = { "100": "#dcfce6", "400": C.green, "500": "#3fdd68", "900": "#205c38" };
const amber = { "100": "#fff0dc", "400": C.orange, "500": "#f2a352", "600": "#d48b43", "900": "#6b4521" };

/** Canvas positions behind the official semantics (see palette comments). */
const CANVAS = {
  base: canvas["950"],        // base bg
  layer1: canvas["875"],      // layer-1
  layer2: canvas["850"],      // layer-2, code block bg
  layer3: canvas["800"],      // layer-3, cards, overlays
  overlay: canvas["700"],     // borders & muted
  tooltip: canvas["750"],     // tooltips, selector
  sidebar: canvas["900"],     // sidebar fill
  caption: canvas["600"],     // captions
  secondary: canvas["300"],   // secondary labels
  tertiary: canvas["400"],    // tertiary labels
  primary: canvas["50"]       // primary text
};

/** Alias layer — the surfaces the UI actually consumes, derived from the official mapping. */
const aliases = {
  "bg-base": CANVAS.base,
  "bg-layer-1": CANVAS.layer1,
  "bg-layer-2": CANVAS.layer2,
  "bg-layer-3": CANVAS.layer3,
  "bg-module-platform": CANVAS.layer3,
  "bg-overlay": CANVAS.tooltip,
  "bg-multi-select": CANVAS.tooltip,
  "bg-skeleton": "rgba(248, 248, 242, 0.05)",
  "bg-mask-1": "rgba(0, 0, 0, 0.45)",
  "bg-mask-2": "rgba(0, 0, 0, 0.55)",
  "bg-mask-3": "rgba(0, 0, 0, 0.65)",
  "bg-mask-photo": "rgba(0, 0, 0, 0.88)",
  "bg-mask-drop": "rgba(32, 33, 43, 0.7)",
  "border-l1": "color-mix(in srgb, #6272a4 30%, transparent)",
  "border-l2": "color-mix(in srgb, #6272a4 45%, transparent)",
  "border-l3": "color-mix(in srgb, #6272a4 60%, transparent)",
  "border-l4": "color-mix(in srgb, #6272a4 75%, transparent)",
  "border-inverted": "rgba(0, 0, 0, 0.08)",
  "border-inverted2": "rgba(0, 0, 0, 0.12)",
  "border-l2-darkmode-thin": "rgba(98, 114, 164, 0.3)",
  "brand-primary": C.purple,
  "brand-primary-invert": C.foreground,
  "brand-primary-new-colorprimary-new-color": C.purple,
  "brand-text": C.cyan,
  "button-contrast-fill": C.background,
  "button-elevated-fill": CANVAS.layer2,
  "button-floating-fill": CANVAS.tooltip,
  "button-floating-hover": CANVAS.overlay,
  "button-ghost-active-border": C.comment,
  "button-ghost-active-fill": CANVAS.layer2,
  "button-ghost-active-hover": CANVAS.tooltip,
  "button-info-fill": C.purple,
  "button-info-hover": OFF.brandRamp["700-delete"],
  "button-primary-dimmed": OFF.brandRamp["600"],
  "button-primary-fill": C.purple,
  "button-primary-hover": OFF.brandRamp["500"],
  "button-tool-bar-fill": "rgba(98, 114, 164, 0.35)",
  "button-tool-bar-fill-invisible": "rgba(98, 114, 164, 0.2)",
  "button-tool-bar-hover": "rgba(189, 147, 249, 0.35)",
  "interactive-bg-active": "rgba(248, 248, 242, 0.14)",
  "interactive-bg-hover": "rgba(248, 248, 242, 0.08)",
  "interactive-bg-hover-accent": "rgba(189, 147, 249, 0.16)",
  "interactive-bg-hover-danger": "rgba(255, 85, 85, 0.14)",
  "interactive-bg-hover-solid": C.currentLine,
  "label-caption": CANVAS.caption,
  "label-dimmed": canvas["500"],
  "label-primary": CANVAS.primary,
  "label-primary-bluish": CANVAS.primary,
  "label-primary-dimmed": CANVAS.tertiary,
  "label-primary-foreground": C.background,
  "label-primary-inverted": CANVAS.tooltip,
  "label-secondary": CANVAS.secondary,
  "label-tertiary": CANVAS.tertiary,
  "markdown-citation": CANVAS.tooltip,
  "markdown-code-block": CANVAS.layer2,
  "markdown-code-block-banner": CANVAS.layer1,
  "markdown-code-segment-selected": CANVAS.tooltip,
  "markdown-code-segment-unselected": CANVAS.layer2,
  "markdown-inline-code": CANVAS.tooltip,
  "markdown-placeholder": canvas["500"],
  "markdown-tag": C.purple,
  "scrollbar-bg-l1": OFF.scrollbar["scroll-color"],
  "scrollbar-bg-l2": OFF.scrollbar["scroll-color"],
  "scrollbar-hover-l1": OFF.scrollbar["scroll-color-hover"],
  "scrollbar-hover-l2": OFF.scrollbar["scroll-color-hover"],
  "separator-primary": "rgba(189, 147, 249, 0.8)",
  "state-business-primary": C.cyan,
  "state-business-tertiary": "rgba(139, 233, 253, 0.1)",
  "state-error-primary": C.red,
  "state-error-secondary": "rgba(255, 85, 85, 0.16)",
  "state-success-primary": C.green,
  "state-success-secondary": "rgba(80, 250, 123, 0.16)",
  "state-success-tertiary": "rgba(80, 250, 123, 0.1)",
  "state-warn-label": "#ffca80",
  "state-warn-primary": C.orange,
  "state-warn-secondary": "rgba(255, 184, 108, 0.16)",
  "state-warn-tertiary": "rgba(255, 184, 108, 0.1)",
  "toast-bg": CANVAS.layer2,
  "tooltip-bg": CANVAS.tooltip
};

/** Component-specific surfaces (sidebar, bubbles, composer…), per official semantics. */
const specifics = {
  "sidebar-fill": CANVAS.sidebar,
  "sidebar-nav-item-active": CANVAS.tooltip,
  "sidebar-nav-item-active-accent": "rgba(189, 147, 249, 0.25)",
  "sidebar-nav-item-hover": CANVAS.layer2,
  "bubble": CANVAS.layer2,
  "bubble-highlight": CANVAS.tooltip,
  "input-major": CANVAS.sidebar,
  "login-input": CANVAS.sidebar,
  "menu": CANVAS.layer2,
  "selector": CANVAS.tooltip,
  "tip": CANVAS.layer2
};

/** Code highlighting — the official Prism mapping translated to shiki tokens. */
const shiki = { ...OFF.codeTokens };

const withPrefix = (prefix, table) => Object.fromEntries(Object.entries(table).map(([k, v]) => [`--dsw-${prefix}-${k}`, v]));
const SHIKI_KEYS = Object.keys(shiki);

/** Assemble one theme's full token table. */
function buildTheme(id, name, colorScheme, overrides = {}) {
  const tokens = {
    ...withPrefix("static-neutral", neutralRamp),
    ...withPrefix("static-neutral-bluish", canvas),
    ...withPrefix("static-deepseek", deepseek),
    ...withPrefix("static-blue", blue),
    ...withPrefix("static-red", red),
    ...withPrefix("static-green", green),
    ...withPrefix("static-amber", amber),
    ...withPrefix("alias", aliases),
    ...withPrefix("specific", specifics),
    ...Object.fromEntries(SHIKI_KEYS.map((k) => [`--shiki-${k}`, shiki[k]])),
    "--scroll-color": OFF.scrollbar["scroll-color"],
    "--scroll-color-hover": OFF.scrollbar["scroll-color-hover"]
  };
  for (const [key, value] of Object.entries(overrides)) tokens[key] = value;
  return { id, name, colorScheme, tokens };
}

/** Dracula Soft: same accents and text, gentler canvas stack. */
const softCanvas = {};
for (const [position, value] of Object.entries(canvas)) {
  const p = Number(position);
  softCanvas[p] = p >= 600 ? mix(value, C.currentLine, 0.3) : value;
}
softCanvas[850] = palette.soft.background;
softCanvas[875] = mix(C.background, palette.soft.background, 0.25);
softCanvas[900] = mix(C.background, palette.soft.background, 0.25);
softCanvas[950] = mix("#20212b", palette.soft.background, 0.3);

/** Canvas position of each alias that maps onto the background stack. */
const SOFT_ALIAS_POSITIONS = {
  "bg-base": 950,
  "bg-layer-1": 875,
  "bg-layer-2": 850,
  "bg-layer-3": 800,
  "bg-module-platform": 800,
  "bg-overlay": 750,
  "bg-multi-select": 750,
  "button-elevated-fill": 850,
  "button-floating-fill": 750,
  "button-floating-hover": 700,
  "button-ghost-active-fill": 850,
  "button-ghost-active-hover": 750,
  "interactive-bg-hover-solid": 700,
  "markdown-citation": 750,
  "markdown-code-block": 850,
  "markdown-code-block-banner": 875,
  "markdown-code-segment-selected": 750,
  "markdown-code-segment-unselected": 850,
  "markdown-inline-code": 750,
  "scrollbar-bg-l1": 750,
  "scrollbar-bg-l2": 750,
  "scrollbar-hover-l1": 700,
  "scrollbar-hover-l2": 700,
  "toast-bg": 850,
  "tooltip-bg": 750
};
const softAliasOverrides = Object.fromEntries(
  Object.entries(SOFT_ALIAS_POSITIONS).map(([key, position]) => [`--dsw-alias-${key}`, softCanvas[position]])
);

const dracula = buildTheme("dracula", "Dracula", "dark");
const soft = buildTheme("dracula-soft", "Dracula Soft", "dark", {
  ...softAliasOverrides,
  "--dsw-specific-sidebar-fill": softCanvas[900],
  "--dsw-specific-input-major": softCanvas[900],
  "--dsw-specific-login-input": softCanvas[900],
  "--dsw-specific-menu": softCanvas[850],
  "--dsw-specific-tip": softCanvas[850],
  "--dsw-specific-bubble": softCanvas[850],
  "--dsw-specific-bubble-highlight": softCanvas[750],
  "--dsw-specific-selector": softCanvas[750],
  "--dsw-specific-sidebar-nav-item-hover": softCanvas[850],
  "--dsw-static-neutral-bluish-850": palette.soft.background,
  "--dsw-static-neutral-bluish-875": softCanvas[875],
  "--dsw-static-neutral-bluish-900": softCanvas[900],
  "--dsw-static-neutral-bluish-950": softCanvas[950]
});

const themes = [dracula, soft];

// Write themes/*.json
mkdirSync(join(ROOT, "themes"), { recursive: true });
for (const theme of themes) {
  writeFileSync(join(ROOT, "themes", `${theme.id}.json`), `${JSON.stringify(theme, null, 2)}\n`);
}

// Regenerate lib/client.js from lib/client.tpl.js
const template = readFileSync(join(ROOT, "lib", "client.tpl.js"), "utf8");
if (!template.includes("__SKINS__")) throw new Error("lib/client.tpl.js has no __SKINS__ marker");
const skinsJson = themes.map((theme) => JSON.stringify(theme, null, 2)).join(",\n").split("\n").map((line) => `\t\t${line}`).join("\n");
const generated = template.replace("__SKINS__", skinsJson);
writeFileSync(join(ROOT, "lib", "client.js"), generated);

console.log(`generated ${themes.map((t) => `${t.id} (${Object.keys(t.tokens).length} tokens)`).join(", ")}`);
