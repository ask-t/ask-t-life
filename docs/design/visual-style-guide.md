---
sidebar_position: 2
sidebar_label: Visual Style Guide
---

# Visual Style Guide

This comprehensive style guide documents the visual design system for ask-t's portfolio website. Use this guide to maintain design consistency across all pages and components.

## 📐 Design Philosophy

### Core Principles

1. **Simplicity First** - Clean, minimal design that focuses on content
2. **Consistency** - Unified design language across all components
3. **Accessibility** - WCAG 2.1 AA compliant, usable by everyone
4. **Performance** - Optimized animations and minimal visual overhead
5. **Responsiveness** - Seamless experience across all devices

### Design Inspiration

The design system draws inspiration from:
- Modern minimalist design
- OpenAI's clean aesthetic
- Swiss design principles
- Material Design motion patterns

---

## 🎨 Color Palette

### Primary Colors

#### Light Mode
```css
--bg: #ffffff           /* Background */
--fg: #0a0a0a          /* Foreground/Text */
--muted: #6b7280       /* Muted text */
--accent: #4a4a4a      /* Accent color */
--border: #e5e7eb      /* Borders */
--card-bg: #f9fafb     /* Card background */
--hover-bg: #f3f4f6    /* Hover states */
```

#### Dark Mode
```css
--bg: #1a1a1a          /* Background */
--fg: #ffffff          /* Foreground/Text */
--muted: #9ca3af       /* Muted text */
--accent: #6b7280      /* Accent color */
--border: #374151      /* Borders */
--card-bg: #262626     /* Card background */
--hover-bg: #333333    /* Hover states */
```

### Ink Scale (Grayscale System)

```css
ink-50:   #fafafa
ink-100:  #f5f5f5
ink-200:  #ededed
ink-300:  #e0e0e0
ink-400:  #b3b3b3
ink-500:  #666666
ink-600:  #4d4d4d
ink-700:  #333333
ink-800:  #1a1a1a
ink-900:  #121212
ink-1000: #000000
```

### Accent Colors

```css
accent-primary: #3b82f6
accent-hover:   #2563eb
accent-ring:    rgba(59, 130, 246, 0.35)
```

### Hero Section Gradient

```css
background: linear-gradient(180deg, 
  #e8f4fd 0%,    /* Light blue */
  #d1e7f7 25%,   /* Sky blue */
  #b8d9f0 50%,   /* Medium blue */
  #f4e4a6 75%,   /* Light yellow */
  #f0d96b 100%   /* Gold */
);
```

### Usage Guidelines

- **Primary text**: Use `--fg` for main content
- **Secondary text**: Use `--muted` for less important text
- **Backgrounds**: Use `--bg` for page backgrounds, `--card-bg` for cards
- **Interactive elements**: Use `--accent` for links, buttons, and focus states
- **Borders**: Use `--border` for subtle dividers and card borders

---

## ✍️ Typography

### Font Family

```css
Primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
```

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

### Type Scale

```css
--text-xs:   0.75rem   /* 12px */
--text-sm:   0.875rem  /* 14px */
--text-base: 1rem      /* 16px */
--text-lg:   1.125rem  /* 18px */
--text-xl:   1.5rem    /* 24px */
--text-2xl:  2rem      /* 32px */
--text-3xl:  3rem      /* 48px */
--text-4xl:  4.5rem    /* 72px */
```

### Line Heights

- Body text: `1.6`
- Headings: `1.2` - `1.3`
- Tight: `1.25`

### Font Rendering

```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### Usage Examples

```css
/* Hero Title */
font-size: 4.5rem;      /* --text-4xl */
font-weight: 700;       /* Bold */
line-height: 1.2;

/* Section Title */
font-size: 2rem;        /* --text-2xl */
font-weight: 700;       /* Bold */
line-height: 1.3;

/* Body Text */
font-size: 1rem;        /* --text-base */
font-weight: 400;       /* Regular */
line-height: 1.6;

/* Small Text */
font-size: 0.875rem;    /* --text-sm */
font-weight: 500;       /* Medium */
```

### Responsive Typography

```css
@media (max-width: 768px) {
  --text-4xl: 3rem;     /* Scale down on mobile */
}
```

---

## 📏 Spacing System

### Base Unit: 4px

All spacing follows a 4px base unit for consistency.

```css
--space-1:  0.25rem    /* 4px */
--space-2:  0.5rem     /* 8px */
--space-3:  0.75rem    /* 12px */
--space-4:  1rem       /* 16px */
--space-6:  1.5rem     /* 24px */
--space-8:  2rem       /* 32px */
--space-12: 3rem       /* 48px */
--space-16: 4rem       /* 64px */
--space-24: 6rem       /* 96px */
--space-32: 8rem       /* 128px */
```

### Usage Guidelines

- **Micro spacing** (4-8px): Between text and icons, tag padding
- **Small spacing** (12-16px): Card padding, button padding
- **Medium spacing** (24-32px): Section gaps, card margins
- **Large spacing** (48-96px): Section padding, page margins
- **Extra large** (96-128px): Hero sections, major page sections

### Common Patterns

```css
/* Button Padding */
padding: var(--space-3) var(--space-6);  /* 12px 24px */

/* Card Padding */
padding: var(--space-6);                  /* 24px */

/* Section Spacing */
padding-top: var(--space-24);             /* 96px */
padding-bottom: var(--space-24);          /* 96px */

/* Element Gap */
gap: var(--space-8);                      /* 32px */
```

---

## 🔲 Border & Radius

### Border Width

```css
default: 1px
focus:   2px
```

### Border Radius

```css
--radius:    4px      /* Default */
--radius-lg: 8px      /* Large */
--radius-xl: 12px     /* Extra large */
--radius-2xl: 16px    /* 2X large */
--radius-full: 9999px /* Pill/Circular */
```

### Usage

- **Cards**: `4px` (--radius)
- **Buttons**: `12px` (--radius-xl)
- **Tags**: `9999px` (--radius-full)
- **Images**: `4px` (--radius)

---

## 🎭 Shadows

### Shadow Scale

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

### Usage

- **Default cards**: No shadow
- **Hover cards**: `--shadow-md`
- **Elevated content**: `--shadow-lg`
- **Modals/Overlays**: `--shadow-xl`

---

## 🎬 Animation & Motion

### Timing Functions

```css
--transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

### Durations

- **Fast**: 200ms (micro-interactions)
- **Medium**: 300ms (hover states)
- **Slow**: 500-600ms (page transitions)
- **Extra slow**: 800ms (fade-ins)

### Keyframe Animations

#### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Usage */
animation: fadeInUp 0.6s ease-out forwards;
```

#### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Usage */
animation: fadeIn 0.8s ease-out forwards;
```

#### Slide In Left
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Usage */
animation: slideInLeft 0.6s ease-out forwards;
```

### Animation Delays

```css
.animate-delay-100 { animation-delay: 0.1s; }
.animate-delay-200 { animation-delay: 0.2s; }
.animate-delay-300 { animation-delay: 0.3s; }
```

### Hover Effects

```css
/* Card Lift */
.card:hover {
  transform: translateY(-2px);
  transition: var(--transition);
}

/* Button Lift */
.btn-primary:hover {
  transform: translateY(-1px);
  transition: var(--transition);
}

/* Project Card */
.project-card:hover {
  transform: translateY(-4px);
}
```

### Motion Principles

1. **Purposeful** - Every animation serves a purpose
2. **Subtle** - Movements are gentle and non-distracting
3. **Fast** - Quick enough to feel responsive
4. **Natural** - Easing functions mimic real-world physics
5. **Consistent** - Same patterns across all components

---

## 🧩 Components

### Buttons

#### Primary Button
```css
background: #000000
color: #ffffff
border-radius: 12px (--radius-xl)
padding: 12px 24px (--space-3 --space-6)
font-weight: 600 (semibold)
font-size: 14px (--text-sm)
height: 40px

hover:
  background: #666666
  transform: translateY(-1px)
```

#### Secondary Button
```css
background: transparent
color: #000000
border: 1px solid #666666
border-radius: 12px (--radius-xl)
padding: 12px 24px
font-weight: 600
font-size: 14px

hover:
  background: #e0e0e0
  border-color: #333333
```

#### Ghost Button
```css
background: transparent
color: ink-800 / ink-200 (light/dark)
padding: 12px 24px
font-weight: 600

hover:
  background: ink-100 / ink-800 (light/dark)
```

#### Accent Button
```css
background: #3b82f6
color: #ffffff
border-radius: 12px
padding: 12px 24px

hover:
  background: #2563eb
```

### Cards

#### Base Card
```css
background: var(--card-bg)
border: 1px solid var(--border)
border-radius: 4px (--radius)
padding: 24px (--space-6)
transition: var(--transition)

hover:
  background: var(--hover-bg)
  transform: translateY(-2px)
  box-shadow: var(--shadow-md)
```

#### Project Card
```css
background: var(--card-bg)
border: 1px solid var(--border)
border-radius: 4px
overflow: hidden

hover:
  background: var(--hover-bg)
  transform: translateY(-4px)
  box-shadow: var(--shadow-md)
```

#### Article Card
```css
background: var(--card-bg)
border: 1px solid var(--border)
border-radius: 4px
padding: 24px

hover:
  background: var(--hover-bg)
  border-color: var(--accent)
  transform: translateY(-2px)
```

#### Docs Category Card
```css
background: var(--card-bg)
border: 1px solid var(--border)
border-radius: 4px
padding: 24px
display: block
height: 100%

hover:
  background: var(--hover-bg)
  transform: translateY(-4px)
  box-shadow: var(--shadow-md)
  border-color: var(--accent)
```

### Tags

```css
display: inline-flex
align-items: center
padding: 4px 12px (--space-1 --space-3)
background: var(--card-bg)
border: 1px solid var(--border)
border-radius: 9999px (pill shape)
font-size: 12px (--text-xs)
font-weight: 500
color: var(--muted)

hover:
  background: var(--hover-bg)
  color: var(--fg)
```

### Navigation Bar

```css
background: transparent
backdrop-filter: blur(10px)
border-bottom: 1px solid var(--border)
transition: var(--transition)

.scrolled:
  background: rgba(255, 255, 255, 0.9)
```

### Footer

```css
background: var(--bg)
border-top: 1px solid var(--border)
color: var(--muted)
style: dark
```

---

## 📱 Layout & Grid

### Container Widths

```css
--ifm-container-width-xl: 1280px

/* Standard containers */
max-width: 1280px (full width)
max-width: 1024px (large content)
max-width: 768px  (medium content)
max-width: 640px  (narrow content)
```

### Grid Systems

#### 3-Column Grid (Projects, Docs)
```css
display: grid
grid-template-columns: repeat(1, 1fr)  /* Mobile */

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr)  /* Tablet */
}

@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr)  /* Desktop */
}

gap: 32px (--space-8)
```

#### 2-Column Grid (Skills, Experience)
```css
display: grid
grid-template-columns: repeat(1, 1fr)  /* Mobile */

@media (min-width: 768px) {
  grid-template-columns: repeat(2, 1fr)  /* Tablet+ */
}

gap: 24px (--space-6)
```

### Breakpoints

```css
mobile:  0px - 767px
tablet:  768px - 1023px
desktop: 1024px+
```

### Page Structure

```html
<main>
  <section class="container py-24 md:py-32">
    <div class="max-w-4xl mx-auto">
      <!-- Content -->
    </div>
  </section>
</main>
```

---

## ♿ Accessibility

### Focus States

```css
focus:
  outline: none
  ring: 2px
  ring-offset: 2px
  ring-color: rgba(59, 130, 246, 0.35)
```

### Color Contrast

- **Text on background**: Minimum 4.5:1 ratio (WCAG AA)
- **Large text**: Minimum 3:1 ratio
- **Interactive elements**: Minimum 3:1 ratio

### Interactive Elements

- Minimum touch target: 44x44px
- Clear hover states for all clickable elements
- Keyboard navigation support
- Screen reader friendly markup

### Scrollbar Styling

```css
/* Light Mode */
::-webkit-scrollbar {
  width: 8px
}
::-webkit-scrollbar-track {
  background: #f1f1f1
}
::-webkit-scrollbar-thumb {
  background: #c1c1c1
  border-radius: 4px
}

/* Dark Mode */
html[data-theme='dark'] ::-webkit-scrollbar-track {
  background: #2a2a2a
}
html[data-theme='dark'] ::-webkit-scrollbar-thumb {
  background: #555
}
```

---

## 🎯 Best Practices

### Do's

✅ Use CSS variables for colors and spacing
✅ Follow the 4px spacing system
✅ Apply consistent border radius
✅ Use semantic HTML
✅ Test in both light and dark modes
✅ Ensure keyboard accessibility
✅ Maintain consistent hover states
✅ Use animations sparingly and purposefully

### Don'ts

❌ Mix pixel values outside the spacing system
❌ Use colors outside the defined palette
❌ Create inconsistent component variants
❌ Ignore dark mode styling
❌ Use color alone to convey information
❌ Create overly complex animations
❌ Forget focus states on interactive elements

---

## 🔄 Design Tokens Reference

### Quick Reference Table

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | #ffffff / #1a1a1a | Page background |
| `--fg` | #0a0a0a / #ffffff | Primary text |
| `--muted` | #6b7280 / #9ca3af | Secondary text |
| `--border` | #e5e7eb / #374151 | Borders |
| `--radius` | 4px | Default border radius |
| `--radius-xl` | 12px | Button border radius |
| `--space-4` | 1rem (16px) | Standard spacing |
| `--space-6` | 1.5rem (24px) | Card padding |
| `--transition` | 0.2s ease | Standard transition |
| `--shadow-md` | 0 4px 6px rgba() | Hover shadow |

---

## 📚 Usage in AI Prompts

When generating new components or pages, reference this guide:

```
"Create a [component] following the ask-t Visual Style Guide:
- Use Inter font family
- Apply the ink color scale
- Use 4px spacing system
- Add subtle hover animations (translateY -2px)
- Ensure dark mode support
- Follow WCAG AA accessibility standards"
```

### Component Generation Template

```
Design a [component name] with:
1. Background: var(--card-bg)
2. Border: 1px solid var(--border)
3. Border radius: 4px (--radius)
4. Padding: 24px (--space-6)
5. Hover effect: translateY(-2px) + shadow-md
6. Text: Inter font, 16px (--text-base)
7. Animation: 0.2s ease transition
```

---

## 🔗 Related Documentation

- [Design System Overview](/docs/design/overview)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Inter Font](https://rsms.me/inter/)

---

**Last Updated**: November 2025  
**Version**: 1.0.0  
**Maintained by**: Asuku Takahashi

