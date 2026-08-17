#!/usr/bin/env node
/**
 * dsh-dracula theme generator.
 *
 * Builds the DSH theme-runtime token tables from the Dracula anchors in
 * palette/dracula.json and regenerates:
 *
 *   - themes/dracula.json       the classic dark theme
 *   - themes/dracula-soft.json  the softer background variant
 *   - lib/client.js             the browser bundle, SKINS inlined from the
 *                               templates (lib/client.tpl.js + __SKINS__)
 *
 * The token vocabulary mirrors the built-in dark palette: the --dsw-static-*
 * ramps (neutral, neutral-bluish, deepseek, blue, red, green, amber), the
 * --dsw-alias-* layer, the --dsw-specific-* surfaces and the --shiki-* code
 * tokens. Concrete CSS colors only — no var() indirection — exactly like the
 * shipped theme definitions.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const palette = JSON.parse(readFileSync(join(ROOT, "palette", "dracula.json"), "utf8"));
const C = palette.colors;

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

/** The classic dark canvas stack (bluish ramp), lightest → deepest. */
const canvas = {
  "00": C.foreground,
  "50": mix(C.foreground, C.comment, 0.14),
  "60": mix(C.foreground, C.comment, 0.18),
  "75": mix(C.foreground, C.comment, 0.24),
  "100": mix(C.foreground, C.comment, 0.3),
  "150": mix(C.foreground, C.comment, 0.38),
  "200": mix(C.foreground, C.comment, 0.46),
  "250": mix(C.foreground, C.comment, 0.54),
  "300": mix(C.foreground, C.comment, 0.62),
  "400": mix(C.foreground, C.comment, 0.74),
  "500": mix(C.foreground, C.comment, 0.85),
  "600": C.comment,
  "700": "#3b3d52",
  "750": mix("#3b3d52", "#2e3040", 0.5),
  "800": "#2e3040",
  "850": C.background,
  "875": C.black,
  "900": mix(C.black, "#1c1d26", 0.5),
  "950": "#1c1d26",
  "1000": "#171821"
};

/** The neutral (text/border) grayscale ramp. */
const neutral = {};
for (const [position, value] of Object.entries(palette.grayRamp)) neutral[Number(position)] = value;
// in-between steps not anchored in the palette file
const neutralSteps = ["00", "50", "100", "150", "200", "250", "300", "400", "500", "550", "600", "700", "800", "850", "900", "1000"];
const neutralRamp = Object.fromEntries(neutralSteps.map((p) => [p, rampAt(neutral, p)]));

/** Brand ramps (deepseek → Dracula purple, blue → Dracula cyan). */
const deepseek = {
  50: "#f5f0fe", 100: "#ece1fc", 200: "#dfccfa", 300: "#cdb1f7",
  400: C.purple, 450: "#ac7ef2", 500: "#9a68ea", 600: "#8353d4",
  "700-delete": "#5f3ba6", 800: "#4a2f85", 900: "#3b2569"
};
const blue = {
  50: "#eafcff", "50p": "#d9f8fe", 75: "#c6f3fd", 100: "#b0edfc",
  300: C.cyan, 400: "#6fd8f0", 450: "#58c6e2", 500: "#41b0cf",
  600: "#2b94b5", 800: "#1c6a86", 900: "#165064", 950: "#103d4d"
};
const red = { 50: "#ffecec", 100: "#ffd9d9", 400: C.red, 500: "#ec4d4d", 600: "#cd4141", 900: "#5e2727" };
const green = { 100: "#dcfce6", 400: C.green, 500: "#3fdd68", 900: "#205c38" };
const amber = { 100: "#fff0dc", 400: C.orange, 500: "#f2a352", 600: "#d48b43", 900: "#6b4521" };

/** Alias layer — the surfaces the UI actually consumes. */
const aliases = {
  "bg-base": canvas[950],
  "bg-layer-1": canvas[875],
  "bg-layer-2": canvas[850],
  "bg-layer-3": canvas[800],
  "bg-module-platform": canvas[800],
  "bg-overlay": canvas[700],
  "bg-multi-select": canvas[750],
  "bg-skeleton": "rgba(248, 248, 242, 0.05)",
  "bg-mask-1": "rgba(0, 0, 0, 0.45)",
  "bg-mask-2": "rgba(0, 0, 0, 0.55)",
  "bg-mask-3": "rgba(0, 0, 0, 0.65)",
  "bg-mask-photo": "rgba(0, 0, 0, 0.88)",
  "bg-mask-drop": "rgba(28, 29, 38, 0.7)",
  "border-l1": "rgba(248, 248, 242, 0.06)",
  "border-l2": "rgba(248, 248, 242, 0.12)",
  "border-l3": "rgba(248, 248, 242, 0.16)",
  "border-l4": "rgba(248, 248, 242, 0.2)",
  "border-inverted": "rgba(0, 0, 0, 0.08)",
  "border-inverted2": "rgba(0, 0, 0, 0.12)",
  "border-l2-darkmode-thin": "rgba(248, 248, 242, 0.08)",
  "brand-primary": C.purple,
  "brand-primary-invert": C.foreground,
  "brand-primary-new-colorprimary-new-color": C.purple,
  "brand-text": "#1c1d26",
  "button-contrast-fill": C.foreground,
  "button-elevated-fill": canvas[800],
  "button-floating-fill": canvas[750],
  "button-floating-hover": canvas[700],
  "button-ghost-active-border": C.comment,
  "button-ghost-active-fill": canvas[800],
  "button-ghost-active-hover": canvas[750],
  "button-info-fill": C.purple,
  "button-info-hover": "#63479e",
  "button-primary-dimmed": "#6d5b93",
  "button-primary-fill": C.purple,
  "button-primary-hover": "#caa9fa",
  "button-tool-bar-fill": "rgba(248, 248, 242, 0.07)",
  "button-tool-bar-fill-invisible": "rgba(248, 248, 242, 0.04)",
  "button-tool-bar-hover": "rgba(248, 248, 242, 0.12)",
  "interactive-bg-active": "rgba(248, 248, 242, 0.14)",
  "interactive-bg-hover": "rgba(248, 248, 242, 0.08)",
  "interactive-bg-hover-accent": "rgba(189, 147, 249, 0.14)",
  "interactive-bg-hover-danger": "rgba(255, 85, 85, 0.14)",
  "interactive-bg-hover-solid": canvas[700],
  "label-caption": C.comment,
  "label-dimmed": "#46536f",
  "label-primary": C.foreground,
  "label-primary-bluish": C.foreground,
  "label-primary-dimmed": "#aab3d1",
  "label-primary-foreground": "#1c1d26",
  "label-primary-inverted": canvas[750],
  "label-secondary": C.comment,
  "label-tertiary": "#55638a",
  "markdown-citation": canvas[750],
  "markdown-code-block": "#1e1f28",
  "markdown-code-block-banner": C.black,
  "markdown-code-segment-selected": canvas[750],
  "markdown-code-segment-unselected": "#1e1f28",
  "markdown-inline-code": canvas[750],
  "markdown-placeholder": "#46536f",
  "markdown-tag": C.purple,
  "scrollbar-bg-l1": canvas[750],
  "scrollbar-bg-l2": canvas[700],
  "scrollbar-hover-l1": C.comment,
  "scrollbar-hover-l2": C.comment,
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
  "toast-bg": canvas[800],
  "tooltip-bg": canvas[750]
};

/** Component-specific surfaces (sidebar, bubbles, composer…). */
const specifics = {
  "sidebar-fill": C.black,
  "sidebar-nav-item-active": canvas[750],
  "sidebar-nav-item-active-accent": "rgba(189, 147, 249, 0.25)",
  "sidebar-nav-item-hover": canvas[800],
  "bubble": canvas[800],
  "bubble-highlight": canvas[700],
  "input-major": C.black,
  "login-input": C.black,
  "menu": canvas[800],
  "selector": canvas[700],
  "tip": canvas[800]
};

/** Code highlighting — the official Dracula syntax palette. */
const shiki = {
  "foreground": C.foreground,
  "background": C.background,
  "token-constant": C.purple,
  "token-string": C.yellow,
  "token-comment": C.comment,
  "token-keyword": C.pink,
  "token-parameter": C.orange,
  "token-function": C.green,
  "token-string-expression": C.yellow,
  "token-punctuation": C.foreground,
  "token-link": C.cyan,
  "token-inserted": C.green,
  "token-deleted": C.red,
  "token-changed": C.orange
};

const withPrefix = (prefix, table) => Object.fromEntries(Object.entries(table).map(([k, v]) => [`--dsw-${prefix}-${k}`, v]));
const ALIAS_KEYS = Object.keys(aliases);
const SPECIFIC_KEYS = Object.keys(specifics);
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
    ...Object.fromEntries(SHIKI_KEYS.map((k) => [`--shiki-${k}`, shiki[k]]))
  };
  for (const [key, value] of Object.entries(overrides)) {
    if (key.startsWith("--dsw-alias-")) {
      const name_ = key.slice("--dsw-alias-".length);
      const prefix = `--dsw-alias-${name_}`;
      tokens[prefix] = value;
    } else {
      tokens[key] = value;
    }
  }
  return { id, name, colorScheme, tokens };
}

/** Dracula Soft: same accents and text, gentler canvas stack. */
const softCanvas = {};
for (const [position, value] of Object.entries(canvas)) {
  const p = Number(position);
  softCanvas[p] = p >= 600 ? mix(value, C.currentLine, 0.3) : value;
}
softCanvas[850] = palette.soft.background;
softCanvas[875] = mix(C.black, palette.soft.background, 0.25);
softCanvas[950] = mix("#1c1d26", palette.soft.background, 0.3);

/** Canvas position of each alias that maps onto the background stack. */
const SOFT_ALIAS_POSITIONS = {
  "bg-base": 950,
  "bg-layer-1": 875,
  "bg-layer-2": 850,
  "bg-layer-3": 800,
  "bg-module-platform": 800,
  "bg-overlay": 700,
  "bg-multi-select": 750,
  "button-elevated-fill": 800,
  "button-floating-fill": 750,
  "button-floating-hover": 700,
  "button-ghost-active-fill": 800,
  "button-ghost-active-hover": 750,
  "interactive-bg-hover-solid": 700,
  "markdown-citation": 750,
  "markdown-inline-code": 750,
  "scrollbar-bg-l1": 750,
  "scrollbar-bg-l2": 700,
  "toast-bg": 800,
  "tooltip-bg": 750
};
const softAliasOverrides = Object.fromEntries(
  Object.entries(SOFT_ALIAS_POSITIONS).map(([key, position]) => [`--dsw-alias-${key}`, softCanvas[position]])
);

const dracula = buildTheme("dracula", "Dracula", "dark");
const soft = buildTheme("dracula-soft", "Dracula Soft", "dark", {
  ...softAliasOverrides,
  "--dsw-specific-sidebar-fill": mix(C.black, palette.soft.background, 0.25),
  "--dsw-specific-input-major": mix(C.black, palette.soft.background, 0.25),
  "--dsw-specific-login-input": mix(C.black, palette.soft.background, 0.25),
  "--dsw-static-neutral-bluish-850": palette.soft.background,
  "--dsw-static-neutral-bluish-875": softCanvas[875],
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
