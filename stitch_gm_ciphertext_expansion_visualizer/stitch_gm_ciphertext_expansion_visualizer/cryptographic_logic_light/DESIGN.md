---
name: Cryptographic Logic Light
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#424754'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#4d5d73'
  on-tertiary: '#ffffff'
  tertiary-container: '#66768d'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system focuses on the intersection of high-stakes security and intellectual clarity. It is tailored for technical professionals, security researchers, and developers who require a workspace that feels like a clean room: sterile, organized, and high-functioning. 

The design style is **Corporate Minimalism** with **Technical Precision**. It prioritizes information density without clutter, utilizing significant whitespace to separate complex data sets. The aesthetic response should be one of total control and absolute legibility, moving away from the "hacker" tropes of dark themes toward a professional, institutional authority.

## Colors
This design system utilizes a high-contrast light palette to ensure maximum readability. 
- **Primary**: Royal Blue (#3B82F6) is reserved for primary actions, active states, and critical paths.
- **Secondary/Text Primary**: Dark Slate (#0F172A) provides a rock-solid foundation for typography, ensuring AAA accessibility.
- **Neutral/Background**: A crisp White (#FFFFFF) base is supported by Light Gray (#F9FAFB) for structural grouping and surface differentiation.
- **Accent**: Success (Emerald), Warning (Amber), and Error (Rose) colors should be used sparingly and only in desaturated tones to maintain the professional atmosphere.

## Typography
The typography strategy employs a dual-font approach. **Hanken Grotesk** serves as the primary typeface for UI elements and prose, offering a sharp, contemporary sans-serif feel that scales perfectly. 

**JetBrains Mono** is utilized for all "technical" data—cryptographic keys, code snippets, logs, and metadata. This distinction signals to the user when they are viewing raw information versus instructional content. All labels and status indicators use monospaced fonts to reinforce the technical nature of the system.

## Layout & Spacing
The layout follows a strict 8px grid system. A **Fixed Grid** approach is used for desktop (12 columns) to maintain logical grouping of data visualizations and logs.

- **Desktop**: 1280px max-width, 24px gutters, 48px side margins.
- **Tablet**: Fluid width, 16px gutters, 24px side margins.
- **Mobile**: Single column, 16px gutters and margins.

Vertical rhythm is critical; maintain 24px spacing between disparate content blocks and 8px between related elements within a block. Use structural dividers (1px solid #E2E8F0) instead of large gaps to separate distinct data sections.

## Elevation & Depth
In this light-themed design system, depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows. 

1.  **Base Layer**: #FFFFFF (Main background).
2.  **Surface Layer**: #F9FAFB (Cards, sidebars, header background).
3.  **Stroke**: 1px solid #E2E8F0 (Defining boundaries of interactive elements).
4.  **Interactive Hover**: A subtle 2px blur shadow with 5% opacity using the secondary color (#0F172A) to indicate lift without breaking the clean aesthetic.

Avoid multi-layered shadows. The UI should feel flat and "architectural," as if printed on high-quality paper.

## Shapes
The shape language is "Soft" (0.25rem radius). This provides just enough rounding to feel modern and accessible while maintaining the "precise" and "structured" feeling of the cryptographic brand. 

- **Small Components (Buttons, Inputs)**: 4px radius.
- **Medium Components (Cards, Modals)**: 8px radius.
- **Large Components (Main Containers)**: 12px radius.

The goal is to avoid the "bubbly" look of consumer social apps, staying closer to an industrial or scientific instrument.

## Components
- **Buttons**: Primary buttons use a solid Royal Blue background with White text. Secondary buttons use a transparent background with a 1px border (#E2E8F0) and Slate text.
- **Input Fields**: Use #FFFFFF background with a 1px #E2E8F0 border. On focus, the border changes to Royal Blue with a subtle 2px outer glow. Labels always use the monospaced font.
- **Cards**: Cards are defined by a 1px border (#E2E8F0) rather than a shadow. Header sections within cards should have a light gray fill (#F9FAFB).
- **Data Tables**: Use a clean, border-less approach for rows. Use a 1px #F1F5F9 bottom border for separation. Header cells use `label-caps` typography.
- **Chips/Status Tags**: Use low-saturation backgrounds (e.g., light blue background with dark blue text) to indicate status without being visually overwhelming.
- **Monospace Logs**: A dedicated component for outputting logs should have a #0F172A background with light text to provide a "terminal" feel within the light interface, creating a clear focal point for technical data.