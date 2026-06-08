---
name: Cryptographic Logic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#b7c8e1'
  on-tertiary: '#213145'
  tertiary-container: '#8292aa'
  on-tertiary-container: '#1a2b3e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  mono-ui:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1280px
---

## Brand & Style
The brand personality is clinical, secure, and intellectually rigorous. It is designed for developers, security researchers, and students who require high focus and zero visual distraction. 

The design style is **Technical Minimalism**. It utilizes a "Darkroom" aesthetic—where the UI recedes into the background to let data and code take center stage. The interface relies on high-contrast utility and structural clarity rather than decorative elements. Visual interest is generated through precise alignment, mathematical proportions, and the rhythmic application of monospaced typography. The emotional response should be one of absolute clarity and systematic reliability.

## Colors
This design system utilizes a high-contrast dark palette to minimize eye strain during long technical sessions.

- **Backgrounds:** The primary surface is Deep Obsidian (#0A0A0A). Secondary surfaces (cards, modals) use Slate Grays to create subtle separation.
- **Accents:** 'Security Blue' (#3B82F6) is used for primary actions, success states, and encryption flows. 'Bloat Orange' (#F59E0B) is reserved for warnings, hash collisions, and entropy indicators.
- **Data Visualization:** Use a range of desaturated slates for neutral data, reserving the primary and secondary colors for "active" or "modified" data bits.

## Typography
The typography system creates a clear distinction between **Interface** and **Data**.

1.  **UI Elements (Inter):** Used for navigation, headings, and instructional text. It provides a human-readable layer to the technical content. 
2.  **Technical Data (JetBrains Mono):** Used for all hex strings, bitstreams, private keys, and code examples. The increased letter spacing in `mono-data` ensures that individual characters (like `0` and `O` or `1` and `l`) are easily distinguishable.

Headlines should be tight and impactful, while body text requires generous line heights for readability.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. All spacing is derived from a 4px baseline unit to ensure mathematical harmony.

- **Grid:** Use a 12-column grid for desktop with 16px gutters. For data-heavy views, columns can be split into 2-column "bit-blocks."
- **Breakpoints:** 
  - Mobile (< 768px): Single column, 16px margins.
  - Tablet (768px - 1024px): 8-column grid, 24px margins.
  - Desktop (> 1024px): 12-column grid, 32px margins, max-width 1280px.
- **Density:** High density is preferred for data tables and algorithm visualizations, while instructional content should use wider margins (80px+) to improve focus.

## Elevation & Depth
In this dark-mode environment, depth is communicated through **Tonal Layering** and **Subtle Outlines** rather than heavy shadows.

- **Level 0 (Base):** #0A0A0A. The lowest layer.
- **Level 1 (Cards/Containers):** #1A1A1A. Used for grouped content.
- **Borders:** Instead of shadows, use 1px solid borders (#2E2E2E) to define shapes. This maintains the minimalist, "engineered" look.
- **Active State:** When an element is focused or active, use a subtle 'Security Blue' outer glow (0px 0px 8px rgba(59, 130, 246, 0.3)) to signify interaction without breaking the flat aesthetic.

## Shapes
Shapes are **Architectural and Precise**. 

The system uses "Soft" (0.25rem) corner radii for standard components to prevent the UI from feeling overly aggressive, but remains close to a sharp-edge aesthetic to maintain its technical character. Large containers like cards should not exceed 0.5rem (rounded-lg). Buttons and inputs follow the standard 0.25rem radius.

## Components
- **Buttons:** Primary buttons are solid 'Security Blue' with white text. Secondary buttons are outlined with 'JetBrains Mono' labels. No gradients or heavy roundedness.
- **Data Bits/Chips:** Small, rectangular indicators for 0s and 1s. Use #1A1A1A for inactive and #3B82F6 for active bits.
- **Input Fields:** Dark background (#050505), 1px slate border, and monospaced text. The caret should be the 'Security Blue' color.
- **Cards:** Flat surfaces (#1A1A1A) with a mandatory 1px border. No drop shadows.
- **Code Blocks:** Use a slightly darker background than the base card to create a nested effect. Syntax highlighting should prioritize the 'Security Blue' and 'Bloat Orange' accents.
- **Status Indicators:** Use small, square pips instead of circular dots to maintain the grid-based architectural feel.