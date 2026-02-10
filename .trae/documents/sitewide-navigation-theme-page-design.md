# Page Design Spec — Consistent Navigation + Cohesive Theme (Desktop-first)

## Global Styles
### Design tokens
- Colors (CSS variables): `--color-bg`, `--color-fg`, `--color-muted`, `--color-border`, `--color-brand`, `--color-brand-contrast`, `--color-accent`.
- Typography: sans base font; H1/H2/H3 scale; body text size + comfortable line-height.
- Layout: page max-width ~1120–1200px; section vertical spacing scale (24/40/64); container padding 24px (desktop).
- Shape/elevation: radius scale (sm/md/lg); subtle shadow default and stronger hover elevation.
- Interaction: visible `:focus-visible` ring in brand color; 150–200ms transitions for hover/active.

### Component defaults
- Buttons: primary (brand), secondary (neutral), ghost (text). Define default/hover/disabled/focus-visible states.
- Links: consistent underline/hover treatment and visited color policy.

## Page 1 — Global Site Shell (All pages)
### Layout
- Primary system: Flexbox vertical stack (Header / Main / Footer).
- Main container: centered max-width with consistent padding; section spacing uses the global scale.
- Responsive behavior (desktop-first):
  - Desktop: horizontal nav.
  - Tablet/mobile: nav collapses to “Menu” button opening an overlay/panel.

### Meta information (defaults)
- Title template: `{Page Title} | {Site Name}`.
- Default description: short brand statement; pages override when needed.
- Open Graph: default `og:title`, `og:description`, `og:type=website`; allow per-page overrides.

### Sections & components
1. Header
   - Left: logo (links to `/`).
   - Center/right: primary navigation (top-level routes only).
   - Optional right-side primary CTA.
   - Active state: highlight current section via route match (exact/prefix) with clear contrast.
   - Accessibility: keyboard nav, focus-visible ring, `aria-current="page"` on active link.
2. Footer
   - Secondary nav links (same tokens and spacing as header).
   - Copyright / small print.
3. Main content container
   - Enforce heading hierarchy (single H1) and consistent block spacing.

## Page 2 — Home Page
### Meta information
- Title: `Home | {Site Name}`.
- Description: top-level summary of value proposition.

### Page structure
- Hero: H1 + short supporting sentence + primary CTA(s).
- Content sections: repeated pattern of (section heading + 2–3 cards/columns) using consistent spacing and typography.

### Interaction
- All internal links use the global link/button styles.
- If section anchors exist, apply `scroll-margin-top` to account for header height.

## Page 3 — Standard Content Page Template
### Meta information
- Title: `{Page Title} | {Site Name}`.
- Description: 1–2 sentences summarizing the page content.

### Page structure
- Page header: H1 + short intro.
- Body: content blocks (text, lists, simple cards) using the spacing scale.
- Optional in-page navigation (only for long pages):
  - Desktop: right-side table-of-contents.
  - Small screens: collapses into a top dropdown.

## Page 4 — Not Found (404)
### Meta information
- Title: `Page Not Found | {Site Name}`.
- Description: help users recover from an invalid URL.

### Page structure
- Centered message inside the global shell.
- Primary actions: “Go Home” + 1–3 key nav links (reusing the same nav config).
