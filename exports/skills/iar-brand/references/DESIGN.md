---
name: "iAR · Manual de Identidad Corporativa 2027"
description: "Engineering-drawing-sheet identity manual and design system for Industrial Augmented Reality S.L. (iAR): corporate teal, cool ink neutrals, Sora / Source Sans 3 / IBM Plex Mono, light+dark registers."
world: "eaf8421e5f7ea8e3"
colors:
  primary: "#05677f"
  primary-hover: "#04566b"
  on-primary: "#ffffff"
  primary-dark: "#4cc3dd"
  primary-hover-dark: "#6fd0e4"
  on-primary-dark: "#06222c"
  primary-tint: "#eef6f8"
  on-primary-tint: "#04566b"
  primary-tint-dark: "#10303c"
  on-primary-tint-dark: "#b3d9e2"
  bg: "#f6f7f7"
  bg-dark: "#0c1a20"
  surface: "#ffffff"
  surface-dark: "#10242d"
  sunken: "#eef2f3"
  sunken-dark: "#0a161c"
  raised: "#ffffff"
  raised-dark: "#16303a"
  text: "#0e1b20"
  text-dark: "#e8f1f4"
  text-secondary: "#33474f"
  text-secondary-dark: "#a9c0c8"
  text-muted: "#5b6d73"
  text-muted-dark: "#7fa2ae"
  border: "#75909a"
  border-dark: "#5b7684"
  line: "#d3dde0"
  line-dark: "#24404c"
  success-solid: "#1a7f4e"
  on-success: "#ffffff"
  success-text: "#176b43"
  success-text-dark: "#45d08a"
  success-tint: "#e9f5ee"
  success-tint-dark: "#122b22"
  warning-solid: "#e8a013"
  on-warning: "#0e1b20"
  warning-text: "#8a5800"
  warning-text-dark: "#f0b429"
  warning-tint: "#fdf3dd"
  warning-tint-dark: "#2e2410"
  error-solid: "#b3261e"
  on-error: "#ffffff"
  error-text: "#b3261e"
  error-text-dark: "#ff8a80"
  error-tint: "#fbeae8"
  error-tint-dark: "#331a17"
  accent-solid: "#22c0b4"
  on-accent: "#06222c"
  accent-text: "#0e7068"
  accent-text-dark: "#35d8cb"
  accent-tint: "#e6f8f6"
  accent-tint-dark: "#113032"
  complement-solid: "#d96b27"
  on-complement: "#ffffff"
  complement-text: "#9e4710"
  complement-text-dark: "#f59c62"
  complement-tint: "#fdf1e8"
  complement-tint-dark: "#331e12"
typography:
  display:
    fontFamily: "'Sora', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.85rem + 1.8vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "'Sora', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.5rem + 1.1vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Sora', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.24rem + 0.6vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'Source Sans 3', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "'Source Sans 3', 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 0.84rem + 0.18vw, 0.9375rem)"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0em"
  mono:
    fontFamily: "'IBM Plex Mono', 'Cascadia Code', Consolas, monospace"
    fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
    fontFeature: "tnum"
  label-caps:
    fontFamily: "'IBM Plex Mono', 'Cascadia Code', Consolas, monospace"
    fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  s: "4px"
  m: "8px"
  l: "12px"
  full: "999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "8": "2rem"
  "10": "2.5rem"
  "12": "3rem"
  "16": "4rem"
  section: "clamp(3rem, 6vw, 5rem)"
  measure: "68ch"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.s}"
    padding: "9px 18px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.s}"
    padding: "9px 18px"
  button-secondary-hover:
    backgroundColor: "{colors.sunken}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.s}"
    padding: "9px 18px"
  button-ghost-hover:
    backgroundColor: "{colors.primary-tint}"
  button-danger:
    backgroundColor: "{colors.error-solid}"
    textColor: "{colors.on-error}"
    typography: "{typography.label}"
    rounded: "{rounded.s}"
    padding: "9px 18px"
  button-danger-hover:
    backgroundColor: "color-mix(in oklab, #b3261e 85%, black)"
  button-small:
    padding: "5px 12px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.full}"
    padding: "5px 12px"
  chip-on:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  badge-success:
    backgroundColor: "{colors.success-solid}"
    textColor: "{colors.on-success}"
    typography: "{typography.mono}"
    rounded: "{rounded.full}"
    padding: "3px 10px"
  badge-warning:
    backgroundColor: "{colors.warning-solid}"
    textColor: "{colors.on-warning}"
    typography: "{typography.mono}"
    rounded: "{rounded.full}"
    padding: "3px 10px"
  badge-error:
    backgroundColor: "{colors.error-solid}"
    textColor: "{colors.on-error}"
    typography: "{typography.mono}"
    rounded: "{rounded.full}"
    padding: "3px 10px"
  badge-info:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.mono}"
    rounded: "{rounded.full}"
    padding: "3px 10px"
  badge-product:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.on-primary-tint}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "3px 10px"
  badge-accent:
    backgroundColor: "{colors.accent-solid}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "3px 10px"
  badge-complement:
    backgroundColor: "{colors.complement-solid}"
    textColor: "{colors.on-complement}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "3px 10px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.s}"
    padding: "8px 12px"
  alert-success:
    backgroundColor: "{colors.success-tint}"
    textColor: "{colors.text}"
    rounded: "{rounded.m}"
    padding: "12px 16px"
  alert-warning:
    backgroundColor: "{colors.warning-tint}"
    textColor: "{colors.text}"
    rounded: "{rounded.m}"
    padding: "12px 16px"
  alert-error:
    backgroundColor: "{colors.error-tint}"
    textColor: "{colors.text}"
    rounded: "{rounded.m}"
    padding: "12px 16px"
  alert-info:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.text}"
    rounded: "{rounded.m}"
    padding: "12px 16px"
  dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.m}"
    padding: "24px"
  plate:
    backgroundColor: "{colors.surface}"
    rounded: "0"
    padding: "24px"
  cajetin:
    backgroundColor: "{colors.surface}"
    rounded: "0"
---

# Design System: iAR · Manual de Identidad Corporativa 2027

## Overview

**Creative North Star: "La lámina de plano acotado" (The Dimensioned Drawing Sheet)**

The manual is not a style guide of cards and it has no marketing hero. It is a set of eight engineering drawing sheets (láminas 00–07), each one a measured plate: a double perimeter rule, a faint teal-tinted retícula under the piece, a boxed sheet identifier, dimension lines (cotas) and leaders in mono, notes in the margin, and a title block (cajetín) with sheet number, scale and revision at every foot. The reader finds the rule that applies, sees it measured over the approved artwork and demonstrated in live components, copies the token with one click, and navigates sheet by sheet. The dark register is the same sheet in negative — never a different design.

The personality is industrial precision with software calm: cool teal-tinted ink neutrals, one corporate teal that carries action and measurement, contained 4–8px corners on UI parts and right angles on the sheet furniture itself. Density is moderate and rhythmic — a 4px spacing base, a calm 68ch reading column, and mono reserved strictly for measurement, data, tokens and folios. Accessibility is a brand rule, not a feature: every text pair is audited (WCAG 2.2, AA minimum, AAA where feasible) in both registers, functional borders hold ≥3:1, and state is never carried by color alone. The retícula grid background on each lámina is intentional and load-bearing: it is the blueprint/measurement surface of the sheet, not decoration — the two detector advisories it raises are accepted by design.

Two product constraints bind every surface built from this system: all demo UI and slide content is synthetic and labeled as such on the sheet itself (no fabricated clients, metrics or benchmarks), and partner badges (Microsoft) are never invented — the build carries a labeled dashed placeholder until official partner artwork is supplied. The direction brief named paper `#f2f5f5` and ink `#122a33`; the built system settled on the ink ramp's `#f6f7f7` paper and `#0e1b20` ink (the build wins; `#122a33` survives only as the print frame ink).

**Key Characteristics:**
- Eight numbered drawing sheets with double perimeter rule (2px border + 1px outline at −8px offset), 24px teal retícula over sunken paper, head strip and cajetín + revisión + hoja-nav at every foot.
- One corporate teal, two registers: `#05677f` on light, `#4cc3dd` on dark, each with its verified on-primary pair; semantic solids invariant across modes.
- Three OFL families with strict roles: Sora (display 600–800), Source Sans 3 (body/UI 400/600), IBM Plex Mono (measurement/data/tokens/folios 400/500).
- Fluid clamp type scale xs→4xl (12→76px), 68ch reading measure, tabular-nums on every data column.
- Flat by default; tonal layering (bg → sunken → surface → raised); shadows only where something truly lifts (the modal).
- Progressive enhancement throughout: `color-scheme` + `light-dark()` with fallbacks, native dialog + invoker commands with polyfill/click fallbacks, container-query tables, scroll-snap rail, scrollspy with IO fallback; everything readable without JS.
- One authored motion moment: the cotas of lámina 00 draw themselves in once on entry; everything else is 120ms state transitions.

## Colors

A single corporate teal over cool neutrals tinted from that same teal, with semantic solids that never change between registers and one — only one — product accent. Token source of truth: `tokens/tokens.css` + `tokens/design-tokens.json` (the `$audit` block there is the verified contrast record; ratios below are reused from it, not recomputed). Raw ramps `--iar-teal-50…950` and `--iar-ink-50…950` (11 steps each) are published in the token files and rendered as copyable swatches; the semantic tokens in the frontmatter are what surfaces consume.

### Primary
- **Corporate Teal 600** (`primary`, #05677f): the binding brand color (already the logo fill). Primary actions, links, measurement lines and leaders, active index marker, focus ring (`--color-focus`), selection background, slide top rule and cover field. 6.46:1 on white (AA), 6.01:1 on bg (AA).
- **Register Teal 300** (`primary-dark`, #4cc3dd): the dark-register primary — lightened, never hue-shifted. 8.58:1 on dark bg, 7.74:1 on dark surface (AAA). Its on-primary flips to deep ink (`on-primary-dark`, #06222c, 7.98:1 AAA): the primary button inverts its pair, never its role.
- **Teal Hover** (`primary-hover` #04566b / `primary-hover-dark` #6fd0e4): one step deeper (light) or lighter (dark) for button hover only.
- **Teal Tint** (`primary-tint` #eef6f8 / `primary-tint-dark` #10303c) with `on-primary-tint` (#04566b / #b3d9e2): state surfaces — active index row, table row hover, ghost-button hover, product badges, info alerts. Text on tint always uses the mode's on-tint variant.

### Secondary & Complementary
- **Accent Turquoise** (`accent-solid`, #22c0b4 + `on-accent` #06222c; text `accent-text` #0e7068 light / `accent-text-dark` #35d8cb dark; tint #e6f8f6 / #113032): bright turquoise accent used for AI indicators, real-time metrics, progress bars, and highlights on dark covers.
- **Warm Complementary** (`complement-solid`, #d96b27 + `on-complement` #ffffff; text `complement-text` #9e4710 light / `complement-text-dark` #f59c62 dark; tint #fdf1e8 / #331e12): warm amber/terracotta complementary tone for comparative charts, key project milestones, and high-contrast focal callouts.

### Neutral
- **Paper / Ink surfaces**: `bg` #f6f7f7 (ink-50) / `bg-dark` #0c1a20 (ink-950); `surface` #ffffff / #10242d; `sunken` #eef2f3 / #0a161c (the retícula paper and code/table-head ground); `raised` #ffffff / #16303a (defined for lifted surfaces; not yet exercised by the build).
- **Ink text ramp**: `text` #0e1b20 (17.55:1 on white, AAA) / `text-dark` #e8f1f4 (15.47:1 on dark bg, AAA); `text-secondary` #33474f / #a9c0c8 (9.74 / 9.34, AAA); `text-muted` #5b6d73 / #7fa2ae (5.41 on white, 6.49 on dark bg, AA — captions, folios, hints only).
- **Functional border** (`border` #75909a / `border-dark` #5b7684): component edges that must be seen — inputs, secondary buttons, chips, switches, dialog frame, table head rule. Audited 3.38:1 on white and 3.69:1 on dark bg (UI 3:1).
- **Decorative hairline** (`line` #d3dde0 / `line-dark` #24404c): plate edges, table row rules, cajetín cell dividers, topbar bottom rule. Never delimits an input or a state.
- **Sheet frame**: derived, not a palette token — `color-mix(in oklab, var(--color-text) 62%, var(--color-bg))` (`--frame` on `.lamina`), so the double perimeter rule always sits between text and paper in both registers.

### Semantic solids (invariant across modes)
Each solid is a fill paired with its verified on-solid; inline semantic text uses the per-mode variant instead.
- **Success** (`success-solid` #1a7f4e + white, 5.01:1 AA): text #176b43 light (6.52:1) / #45d08a dark (8.99:1 AAA); tint #e9f5ee / #122b22.
- **Warning** (`warning-solid` #e8a013 + ink #0e1b20, 7.92:1 AAA — the one solid whose on-color is ink, not white): text #8a5800 light (6.04:1) / #f0b429 dark (9.51:1 AAA); tint #fdf3dd / #2e2410.
- **Error** (`error-solid` #b3261e + white, 6.54:1 AA): text #b3261e light / #ff8a80 dark (7.77:1 AAA); tint #fbeae8 / #331a17.
- **Info**: reuses the primary pair (#05677f / #4cc3dd + on-primary) — information is the corporate voice, not a fourth hue.

### Named Rules
**The Invariant Solid Rule.** Semantic solids (#1a7f4e / #e8a013 / #b3261e / #05677f) and their on-solid pairs never change between light and dark; only inline semantic text and tints have per-mode variants. A status badge looks identical in both registers.
**The Unified Brand & Supporting Accents Rule.** Everything is centralized under the single `iAR` brand (no sub-brands are listed or differentiated). The turquoise accent (`#22c0b4`) and warm complementary (`#d96b27`) support data visualization, AI highlights, and comparative callouts across the unified system.
**The Two Borders Rule.** `--color-border` (≥3:1) delimits anything interactive or stateful; `--color-line` is a decorative hairline and must never be the only edge of an input, the only indicator of a state, or the boundary of a focusable control.

Note: the orange `#c2410c` visible in lámina 02's misuse plate is a demonstration of forbidden recoloring, not a palette token. Do not reuse it.

## Typography

**Display Font:** Sora (with 'Segoe UI', system-ui, sans-serif) — weights 600/700/800, SIL OFL via Google Fonts.
**Body Font:** Source Sans 3 (with 'Segoe UI', system-ui, sans-serif) — 400/600 + italic 400.
**Label/Mono Font:** IBM Plex Mono (with 'Cascadia Code', Consolas, monospace) — 400/500.

**Character:** Sora's geometric width gives sheet titles and hero figures the presence of a drawing's title block; Source Sans 3's humanist calm carries long reading in ES/EN/FR; Plex Mono is the voice of measurement — it appears only where a number, token, code or folio is being stated. All three cover œ, ç, ñ and full accents; never substitute ASCII.

### Hierarchy
The scale is fluid modular (ratio ≈1.25, clamped between 360px and 1440px viewports, base 16px). Every step is a `--text-*` clamp token; px ranges are min–max:
- **Display** (Sora 800, `--text-2xl` clamp(2.25rem, 1.85rem + 1.8vw, 3rem) = 36–48px, leading 1.1, tracking −0.015em): specimen headline, KPI values (line-height 1), slide cover titles (5.4cqi inside the rail). `--text-3xl` (44–60px) and `--text-4xl` (52–76px) are published for manual covers and hero slide figures; the current build's largest rendered step is 2xl.
- **Headline** (Sora 700, `--text-xl` 28–36px, leading 1.25, tracking −0.015em, `text-wrap: balance`): the lámina title in every sheet head strip.
- **Title** (Sora 600, `--text-lg` 22–26px): product lockup names; `--text-md` 18–20px at 700 for dialog headings; tagline at md/600 in primary.
- **Body** (Source Sans 3 400, `--text-base` 16–17px, leading 1.5): the reading column, capped at `--measure: 68ch` (rule: 65–75ch). Notes run `--text-sm` at leading 1.65.
- **Label / UI** (Source Sans 3 600, `--text-sm` 14–15px): buttons, field labels, tabs, table body.
- **Mono label** (Plex Mono 400/500, `--text-xs` 12–13px, tracking 0.02em): plate caption strips, sheet head meta (escala/rev), folios, token values, dimension labels inside SVG cotas.
- **Caps label** (Plex Mono 500, xs, uppercase, tracking 0.12em): section eyebrows inside the sheet grammar (notas title, cajetín keys, KPI labels, index title) — short labels only.

### Named Rules
**The Mono-Is-Measurement Rule.** IBM Plex Mono appears only for data, metrics, code, tokens, dimension labels and folios. Never as a decorative "technical" texture, never for prose.
**The Tabular Column Rule.** Every figure in a table, KPI or comparison uses `font-variant-numeric: tabular-nums` (the token file enforces it on `table, .kpi, code, pre, .data`); proportional numerals in columns are forbidden — lámina 04 demonstrates the failure side by side.
**The Short-Caps Rule.** Sustained uppercase only on short labels with 0.12em tracking; never on sentences or paragraphs. Sora never sets paragraphs.

## Layout

The spatial model is a drawing office: a sticky sheet index beside a column of numbered sheets, each sheet an autonomous plate.

- **Shell**: max-inline-size 1560px centered; grid `264px minmax(0,1fr)` with 2rem gap; padding 1.5rem inline, 3rem bottom. Topbar sticky (surface, hairline bottom rule) with brand isotipo 30px, rev chip and theme controls.
- **Lámina (the sheet)**: sunken paper + 24px×24px retícula drawn as two 1px linear-gradients of `color-mix(in oklab, var(--color-primary) 6%, transparent)`; double perimeter rule = 2px solid `--frame` border + 1px solid `--frame` outline at `outline-offset: -8px`; padding 2rem 2rem 1.5rem; 2.5rem between sheets; `scroll-margin-block-start: 84px`. **The retícula is the measurement surface of the sheet — the grid-background advisories it triggers are intentional and accepted; do not "fix" them by removing the grid.**
- **Sheet head strip**: grid `auto minmax(0,1fr) auto` — boxed mono `LÁMINA nn/07` (1px frame border, 4px 10px padding) | Sora 700 xl title | mono xs escala/rev meta; 1px frame bottom rule.
- **Sheet body**: lámina 00 runs `minmax(0,1fr) 320px` (drawing plate + margin notes); other sheets stack prose (68ch), plates and grids. `grid-2` / `grid-3` use `repeat(n, minmax(0,1fr))` with 1.5rem gaps; the color scale row is `repeat(6, minmax(0,1fr))` at every width (the fix that keeps 11 swatches from overflowing).
- **Sheet foot**: cajetín (4-column title-block grid, 2px frame border, hairline cell dividers, wide cells span 2; keys mono 11px caps, values sm/600) + hoja-nav (previous/next sheet buttons). Every sheet without exception.
- **Plates**: white surface, 1px hairline border, right angles, 1.5rem stage padding (drawings 1rem), and a mono xs caption strip (`plate-cap`) separated by a hairline — piece number left, measurement note right.
- **Reading column**: `.prose` max 68ch; numbered rules (`.reglas`) hang a floated mono number (3.2rem wide, −3.5rem offset, `display: flow-root` on the item) so the rule text reads inline.
- **Breakpoints**: <1180px notes drop below the drawing, versions grid 5→3, misuse grid 4→2; <1024px the index becomes a sticky horizontal strip (top 56px, underline marker instead of left border), all 2/3 grids collapse to one column, cajetín 4→2 columns; <700px stacked tables release their internal scroll (`max-block-size: none` — a container query cannot style its own container, so the viewport query does it); <640px drawing plates pan horizontally (`cota-svg` min-width 540px, JS centers the pan on the piece), versions grid 2 columns, slide rail columns fix at 640px.
- **Tables**: `.table-wrap` is an `inline-size` container (max-height 420px, sticky thead, sticky first column). At container <620px the table stacks into bordered row cards; column labels are injected via `td::before { content: var(--col-label) }` with per-table label sets declared through `.table-wrap:has(#cap-…)`; stacked `tbody th` returns to `position: static`.
- **Slide rail**: horizontal scroll-snap (`x mandatory`, center-aligned), columns `min(880px, 94%)`, 16:9 slides that are themselves `inline-size` containers — all slide typography is cqi-relative (padding 6cqi, top rule 0.7cqi, h3 4.6cqi, body 2.5cqi, folio 1.8cqi). Prev/next buttons + `n / 7` output; arrow keys work.
- **Spacing rhythm**: 4px base (`--space-1…16`), section spacing `clamp(3rem, 6vw, 5rem)`; more air above a heading than below it.
- **Print**: each lámina breaks to its own page; chrome (topbar, index, controls, copy buttons, hoja-nav) hidden; frame ink fixed at #122a33 on white; slides reflow to a vertical grid.

### Named Rules
**The Sheet Rule.** Every chapter is a lámina: head strip with boxed folio, measured piece, margin notes where needed, and cajetín + revisión + hoja-nav at the foot. A surface without its title block is unfinished.
**The Retícula Is the Surface Rule.** The 24px teal grid is the blueprint ground of each sheet, not an ornament. It stays in both registers (fainter in dark via the same 6% mix over dark sunken) and its detector advisories are accepted by design.

## Elevation & Depth

Flat by default. Depth is tonal: bg → sunken (retícula paper, code, table heads) → surface (plates, cajetín, topbar) → raised (defined, unused so far). The sheet furniture is drawn, not lifted — borders and the double perimeter rule do the work shadows would do elsewhere. Shadows are tinted with ink (never pure black in light mode) and appear only where something genuinely floats above the sheet.

### Shadow Vocabulary
- **shadow-1** (`0 1px 2px rgb(14 27 32 / .08), 0 1px 1px rgb(14 27 32 / .04)` light; `0 1px 2px rgb(0 0 0 / .4)` dark): resting lift for small raised parts. Published in tokens; not yet exercised by the build.
- **shadow-2** (`0 4px 12px rgb(14 27 32 / .10)` light; `0 4px 12px rgb(0 0 0 / .45)` dark): hover/medium lift. Published; not yet exercised.
- **shadow-3** (`0 12px 32px rgb(14 27 32 / .16)` light; `0 12px 32px rgb(0 0 0 / .55)` dark): the modal layer — the only shadow the build actually renders, on the native dialog.
- **Backdrop**: `rgb(12 26 32 / .55)` (ink-950 at 55%) behind `dialog::backdrop`, with `overscroll-behavior: contain`.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest; a shadow means something is truly above the sheet (today: only the modal). Never shadow the logo — lámina 02 shows the drop-shadow misuse as a defect.

## Shapes

The form language is the drawing itself: right angles on sheet furniture (lámina, plate, cajetín, table wrap all have radius 0), contained corners on UI parts. Radii scale: gently softened (4px, `--radius-s`) on buttons, inputs, chips' smaller kin, copy buttons, swatches and focus rings; softly rounded (8px, `--radius-m`) on alerts, dialogs, app bars, tab panels and download cards; 12px (`--radius-l`) is published for larger containers but unused by the current build; full pill (999px, `--radius-full`) only on badges, filter chips, the switch and the rev chip. Borders are 1px (`--border-w`) with 2px (`--border-w-strong`) reserved for the sheet perimeter, the cajetín frame and the dialog edge. Recurring geometry: the hatched clear-space perimeter (8px diagonal hatch at 28% opacity), dashed 1px border for the labeled partner-badge placeholder, dash-dot centerlines (`12 4 2 4`) in the construction plate, and the ring-with-plus isotipo whose geometry is fixed (see Components).

### Named Rules
**The Contained Corner Rule.** Industrial register means 4–8px on interactive parts; full pills are reserved for badges/chips/switch. Sheet furniture stays square — a rounded lámina is not a drawing.

## Components

Motion grammar for all components: state transitions run `--duration-fast` (120ms) on `--ease` (`cubic-bezier(.2,.7,.3,1)`), background/border/opacity/translate only; `--duration-base` (200ms) and `--duration-slow` (320ms) are published for richer surfaces. `prefers-reduced-motion: reduce` collapses all animation and smooth scrolling. Focus is always visible: 2px solid `--color-focus`, offset 2px (1px on fields), radius 4px. Icons are a hand-drawn inline SVG sprite, 1.15em, stroke 1.75, round caps/joins, `currentColor` — never glyph icons or icon fonts.

### Buttons
- **Shape:** barely softened corners (4px), inline-flex, gap 0.5rem, label Source Sans 3 600 sm; compact variant `btn-s` at xs with 5px 12px padding. Width follows content + padding — never a fixed max-width (FR labels can double ES).
- **Primary:** corporate teal fill + on-primary (9px 18px padding); hover one step deeper (`--color-primary-hover`); the pair inverts in dark, the role never does.
- **Secondary:** surface fill, text ink, 1px functional border; hover sunken. Used for sheet navigation (hoja-nav) and cancel actions.
- **Ghost:** transparent, primary text; hover primary-tint.
- **Danger:** invariant error solid + white; hover `color-mix(in oklab, var(--iar-error-solid) 85%, black)`.
- **States:** disabled at 50% opacity + not-allowed; busy via `aria-busy="true"` with a 1s linear spinning stroke icon; transitions 120ms on background/border.

### Inputs / Fields
- **Style:** surface fill, 1px functional border (never hairline), 4px radius, 8px 12px padding, sm text; label above at sm/600, hint below at xs muted.
- **Focus:** 2px focus-color outline at 1px offset (the search composite uses `:focus-within`).
- **Error:** `aria-invalid="true"` switches the border to the invariant error solid; the message is xs error-text with an icon and a recovery instruction («Fecha no válida. Usa dd/mm/aaaa…»), wired via `aria-describedby`.
- **Selection:** native checkbox/radio with `accent-color: primary` at 16px; the switch is a 40×22px pill (sunken track, functional border, 16px knob) that fills primary when checked and translates the knob 18px at 120ms.

### Chips (filters)
- **Style:** full pill, 1px functional border, surface fill, xs/600, 5px 12px padding; hover sunken.
- **State:** selected (`is-on` + `aria-pressed="true"`) fills primary with on-primary. They filter the GMAO demo table live, together with the search field; an empty result shows a muted message + ghost "Limpiar filtros" action.

### Tables
- **Style:** sm text, mono xs uppercase tracked column heads on sunken with a functional bottom rule; hairline row rules; sticky thead and sticky first column inside a 420px-max scroll container; row hover washes primary-tint; figures tabular.
- **Stacked:** below 620px container width each row becomes a hairline-bordered card, the row head sits static on sunken, and every cell prefixes its column label in mono xs (injected via `::before` + `--col-label`). Below 700px viewport the wrapper drops its max-height so the document, not an inner scrollbar, moves the rows.

### Badges
- **Style:** full pill, mono xs/500, 3px 10px padding, icon at 0.95em + text — color is never the only carrier.
- **State badges:** invariant semantic solids with their on-solid pairs (success/warning/error/info), identical in both registers.
- **Support badges:** accent (`#22c0b4`) for AI/live highlights and warm complementary (`#d96b27`) for milestones/comparative callouts.
- **Area badges:** primary-tint + on-primary-tint with hairline border, labeled as `iAR · Área` for functional areas.

### Alerts
- **Style:** 8px radius, 12px 16px padding, grid icon + content; tint background per mode, 1px border of `color-mix(in oklab, <solid> 45–50%, var(--color-surface))`, icon in the mode's semantic text color, bold sm title + xs secondary body. Four variants: success/warning/error/info.

### KPI cards
- **Style:** label mono xs caps muted; value Sora 800 2xl, line-height 1, tabular, unit at 0.5em/600 secondary; delta mono xs with direction icon + text (e.g. «+2,4 pp vs. mes anterior»). All figures synthetic and labeled.

### Navigation
- **Sheet index:** sticky at 72px (desktop), mono folio + sm title rows; current sheet (`:target-current` native scrollspy, IO fallback adds `.target-current`, `aria-current` synced) gets a 2px primary left border, primary-tint wash, on-tint text at 600. Below 1024px it becomes a sticky horizontal strip with a bottom-border marker.
- **App bar + tabs (demo):** sunken bar, hairline border, 8px radius, 24px isotipo; tabs are underline-style (2px bottom border, primary when `aria-selected`), full arrow/Home/End keyboard support; primary CTA pushed right.
- **Hoja-nav:** secondary compact buttons with arrow icons at every sheet foot.

### Dialog (native)
- **Style:** `<dialog>` with `closedby="any"`, 2px functional border, 8px radius, 24px padding, max-width `min(480px, 100vw − 2rem)`, shadow-3, ink backdrop at 55%. Sora 700 md heading, sm secondary body, right-aligned `method="dialog"` form (secondary cancel with autofocus + danger confirm). Opened via invoker `command="show-modal"` (polyfill, then click fallback); close reports to a live status line. Outside-click close is polyfilled when `closedBy` is missing.

### Copy affordance (signature)
- Inline `code` chip (sunken, hairline, 4px radius) + 24px copy button; invoker `command="--copy"` with clipboard API → `execCommand` fallback. Success/failure swaps the icon (check/error), tints the button with semantic text color, and raises a mono xs tooltip (ink fill, paper text) for 2s via `role="status"`. Swatches in the color scales are themselves copy buttons.

### Lámina acotada (signature drawing plate)
- SVG cotas over the approved art: retícula at 20u inside the 200×100 unit grid (stroke 0.6 at 16%), dimension lines with end ticks (stroke 1), leaders to mono labels (font-size 9.5–10), hatched clear-space band. Construction plate viewBox `-14 -20 330 140`; clear-space plate `-52 -52 304 212`; lámina 00 `-70 -70 360 240`. Below 640px the stage pans horizontally (min 540px) centered on the piece.
- **The one authored motion moment:** on first entry (IO threshold 0.35) lámina 00's cotas draw in — `pathLength="1"` normalized, `stroke-dashoffset 1→0` over 900ms `--ease`, labels fade 500ms after a 650ms delay, once, then the observer disconnects. Reduced motion renders the finished state immediately. No other surface animates on entry.

### Logo (approved art — never redrawn)
- **Geometry** (measured from `assets/logo/iar-logo.svg`, viewBox `0 0 200 100`): full bbox 155.07×96.04u, ratio 1.615 (`--logo-ratio`); ring Ø40.53u centered (42.25, 22.23); cross 21.93u, arm 6.03u, concentric with the ring. The sprite reuses the exact path data with `currentColor` — recolor and crop only.
- **Versions:** principal (teal), mono ink, negative (white, on dark fields), isotipo (app icon and favicon), isotipo negative. Files in `assets/logo/`.
- **Clear space:** 1x on all sides, x = ring height = 40.53u (`--logo-clearspace`), free of text, borders and other logos; shown hatched.
- **Minimum sizes:** full logo 96px wide digital / 24mm print; below that use the isotipo alone at 24px / 6mm — never a shrunken full logo (the cross disappears).
- **Placement:** isotipo in product app bars; full logo on login, covers and documents; over photography use negative or principal on uniform luminance with ≥4.5:1, else a solid surface box behind. Partner badges sit outside the clear space, ≥1x away, always official partner art — the build shows a labeled dashed placeholder, never an invented badge.
- **Misuse (demonstrated, forbidden):** stretching, recoloring outside the approved versions, shadows/bevels/effects, low-contrast busy backgrounds.

### Slide templates (lámina 06)
- Seven 16:9 reference slides in a scroll-snap rail: cover, agenda, comparison, architecture, KPIs, use case, close. Cover/close are full teal fields with the negative logo; the rest are surface with a 0.7cqi teal top rule. Interior margin 6cqi (≈8u), Sora 700 titles, mono folio at the foot, one idea per slide, ≤6 body lines, figures tabular with units. Every illustrative figure carries a synthetic-data note on the slide itself. (Prose rule 06.2 says "2 u" for the top rule; the built value is 0.7cqi — the build wins.)

### Theme control
- Two-state toggle (sun/moon icon reflects the resolved scheme via CSS `:has(meta)` selectors, no JS needed for the icon) + a "Sistema" reset button that appears only when a preference is pinned. JS writes `meta[name=color-scheme]` (`light`/`dark`/`light dark`), persists under `iar-color-scheme`, and an inline head script applies the stored value before first paint (anti-FOUC). Toggling back to the system's own scheme unpins rather than stores. `light-dark()` drives modern browsers; `prefers-color-scheme` and `:has()` fallbacks cover the rest; Forced Colors remaps border/line/focus to system colors.

## Do's and Don'ts

### Do:
- **Do** consume `tokens/tokens.css` semantic custom properties (`--color-*`, `--text-*`, `--space-*`, `--radius-*`) — never hardcode mode-dependent values; the dark register must come free with every component.
- **Do** keep semantic solids invariant across modes and pair them with their audited on-solid; use the per-mode text variant for inline semantic text.
- **Do** accompany every state color with an icon and text (badges, alerts, deltas, errors).
- **Do** use `--color-border` (≥3:1) for anything interactive or stateful, and reserve `--color-line` for decorative hairlines.
- **Do** set all data columns in tabular-nums; keep mono for measurement, data, code, tokens and folios.
- **Do** give every chapter sheet its head strip, cajetín, revisión and hoja-nav; keep the 24px retícula as the sheet's measurement ground (its grid advisories are intentional).
- **Do** label all demo content as synthetic on the surface itself («datos de demostración», «cifras sintéticas»), and keep partner badges as labeled placeholders until official art arrives.
- **Do** use the approved logo paths verbatim (recolor/crop only), respect 1x clear space (40.53u) and the 96px/24mm full-logo minimum, dropping to the isotipo below it.
- **Do** keep motion to 120ms state transitions on the shared ease, honor `prefers-reduced-motion`, and preserve the single authored draw-in moment on lámina 00 only.
- **Do** build progressively: native dialog/invokers/scrollspy/container queries first, with the polyfill and fallback paths the build already ships; everything must read without JS.
- **Do** test the longest label variant (FR can double ES): buttons size to content + padding, switches wrap their labels rather than truncate.

### Don't:
- **Don't** redraw, stretch, recolor outside the approved versions, shadow or bevel the logo, or place it on insufficient-contrast backgrounds.
- **Don't** create product sub-brands or separate logos; everything communicates under the single `iAR` brand with clear functional descriptors.
- **Don't** use `--color-line` as an input border, a focus indicator or the sole carrier of a state.
- **Don't** change semantic solids between light and dark, or put white text on the warning solid (its on-color is ink #0e1b20).
- **Don't** set paragraphs in Sora, use mono as decorative "technical" texture, run sustained uppercase on sentences, or use proportional numerals in columns.
- **Don't** round the sheet furniture (lámina, plate, cajetín stay square) or use full pills outside badges/chips/switch.
- **Don't** add resting shadows to flat surfaces, hard offset shadows, or entry animations beyond the one authored cotas moment.
- **Don't** fabricate clients, metrics, testimonials or partner badges; the orange #c2410c in the misuse plate is a demonstrated defect, not a palette color.
- **Don't** remove the retícula to silence the grid-background advisories, or reintroduce internal table scroll on stacked layouts (the <700px release exists because container queries cannot style their own container).
- **Don't** use glyph icons or icon fonts; the sprite's 1.75-stroke inline SVG is the icon language.
- **Don't** fix component widths to the shortest language, or truncate multilingual labels.