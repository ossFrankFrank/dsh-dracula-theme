#!/usr/bin/env node
/**
 * dsh-dracula-theme structural validation.
 *
 * Checks every generated theme table in themes/*.json against the DSH Web
 * theme vocabulary: required token names (the --dsw-static-* ramps, the
 * alias layer, component-specific surfaces and the shiki code tokens), plus
 * basic value sanity. Run after `npm run generate`; CI runs it alongside
 * the generated-artifacts diff.
 *
 *   node scripts/check-themes.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Positions of the neutral and canvas (bluish) ramps. */
const NEUTRAL_POSITIONS = ["00", "50", "100", "150", "200", "250", "300", "400", "500", "550", "600", "700", "800", "850", "900", "1000"];
const CANVAS_POSITIONS = ["00", "50", "60", "75", "100", "150", "200", "250", "300", "400", "500", "550", "600", "700", "750", "800", "850", "875", "900", "950", "1000"];
const DEEPSEEK_POSITIONS = ["50", "100", "200", "300", "400", "450", "500", "600", "700-delete", "800", "900"];
const SECONDARY_POSITIONS = { blue: ["50", "50p", "75", "100", "300", "400", "450", "500", "600", "800", "900", "950"], red: ["50", "100", "400", "500", "600", "900"], green: ["100", "400", "500", "900"], amber: ["100", "400", "500", "600", "900"] };

/** Every --dsw-alias-* surface the DSH Web UI consumes. */
const ALIAS_NAMES = [
  "bg-base", "bg-layer-1", "bg-layer-2", "bg-layer-3", "bg-mask-1", "bg-mask-2", "bg-mask-3",
  "bg-mask-drop", "bg-mask-photo", "bg-module-platform", "bg-multi-select", "bg-overlay", "bg-skeleton",
  "border-inverted", "border-inverted2", "border-l1", "border-l2", "border-l2-darkmode-thin", "border-l3", "border-l4",
  "brand-primary", "brand-primary-invert", "brand-primary-new-colorprimary-new-color", "brand-text",
  "button-contrast-fill", "button-elevated-fill", "button-floating-fill", "button-floating-hover",
  "button-ghost-active-border", "button-ghost-active-fill", "button-ghost-active-hover",
  "button-info-fill", "button-info-hover", "button-primary-dimmed", "button-primary-fill", "button-primary-hover",
  "button-tool-bar-fill", "button-tool-bar-fill-invisible", "button-tool-bar-hover",
  "interactive-bg-active", "interactive-bg-hover", "interactive-bg-hover-accent", "interactive-bg-hover-danger", "interactive-bg-hover-solid",
  "label-caption", "label-dimmed", "label-primary", "label-primary-bluish", "label-primary-dimmed",
  "label-primary-foreground", "label-primary-inverted", "label-secondary", "label-tertiary",
  "markdown-citation", "markdown-code-block", "markdown-code-block-banner", "markdown-code-segment-selected",
  "markdown-code-segment-unselected", "markdown-inline-code", "markdown-placeholder", "markdown-tag",
  "scrollbar-bg-l1", "scrollbar-bg-l2", "scrollbar-hover-l1", "scrollbar-hover-l2", "separator-primary",
  "state-business-primary", "state-business-tertiary", "state-error-primary", "state-error-secondary",
  "state-success-primary", "state-success-secondary", "state-success-tertiary",
  "state-warn-label", "state-warn-primary", "state-warn-secondary", "state-warn-tertiary",
  "toast-bg", "tooltip-bg"
];

/** Every --dsw-specific-* surface. */
const SPECIFIC_NAMES = [
  "sidebar-fill", "sidebar-nav-item-active", "sidebar-nav-item-active-accent", "sidebar-nav-item-hover",
  "bubble", "bubble-highlight", "input-major", "login-input", "menu", "selector", "tip"
];

/** Every --shiki-* code token. */
const SHIKI_NAMES = [
  "foreground", "background", "token-constant", "token-string", "token-comment", "token-keyword",
  "token-parameter", "token-function", "token-string-expression", "token-punctuation", "token-link",
  "token-inserted", "token-deleted", "token-changed"
];

const requiredTokens = [
  ...NEUTRAL_POSITIONS.map((p) => `--dsw-static-neutral-${p}`),
  ...CANVAS_POSITIONS.map((p) => `--dsw-static-neutral-bluish-${p}`),
  ...DEEPSEEK_POSITIONS.map((p) => `--dsw-static-deepseek-${p}`),
  ...Object.entries(SECONDARY_POSITIONS).flatMap(([hue, positions]) => positions.map((p) => `--dsw-static-${hue}-${p}`)),
  ...ALIAS_NAMES.map((name) => `--dsw-alias-${name}`),
  ...SPECIFIC_NAMES.map((name) => `--dsw-specific-${name}`),
  ...SHIKI_NAMES.map((name) => `--shiki-${name}`),
  "--scroll-color", "--scroll-color-hover"
];

const failures = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};

for (const file of readdirSync(join(ROOT, "themes")).filter((name) => name.endsWith(".json")).sort()) {
  const theme = JSON.parse(readFileSync(join(ROOT, "themes", file), "utf8"));
  check(typeof theme.id === "string" && theme.id.length > 0, `${file}: missing id`);
  check(typeof theme.name === "string" && theme.name.length > 0, `${file}: missing name`);
  check(theme.colorScheme === "dark" || theme.colorScheme === "light", `${file}: invalid colorScheme ${JSON.stringify(theme.colorScheme)}`);
  check(typeof theme.tokens === "object" && theme.tokens !== null, `${file}: missing tokens`);
  if (!theme.tokens) continue;
  for (const token of requiredTokens) {
    const value = theme.tokens[token];
    check(typeof value === "string" && value.length > 0 && !value.includes("undefined"), `${file}: ${token} missing or invalid (${JSON.stringify(value)})`);
  }
  for (const [token, value] of Object.entries(theme.tokens)) {
    check(typeof value === "string" && value.length > 0 && !value.includes("undefined"), `${file}: token ${token} has invalid value (${JSON.stringify(value)})`);
  }
}

if (failures.length > 0) {
  console.error(`check-themes: ${failures.length} failure(s)`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}
console.log("check-themes: all theme tables valid");
