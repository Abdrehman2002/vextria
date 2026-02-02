# Vextria AI — Design Theme

## 🎨 BASE COLORS

| Role | Hex | Notes |
|------|-----|-------|
| Primary Background (Main Canvas) | `#0B0F14` | Deep black with blue undertone (not pure black) |
| Secondary Background (Sections / Cards) | `#111827` | Cards, feature blocks, pricing panels |
| Elevated Surface (Modals / Highlights) | `#1F2937` | Slight contrast lift for hierarchy |

---

## 🌫️ GRADIENT BACKGROUNDS (Hero & Accents)

**Hero Vertical Gradient**
```css
linear-gradient(
  to bottom,
  #020617 0%,
  #0B0F14 40%,
  #1F2937 70%,
  #E5E7EB 100%
)
```

**Radial Horizon Glow (Bottom Curve)**
```css
radial-gradient(
  ellipse at bottom,
  rgba(255,255,255,0.85) 0%,
  rgba(255,255,255,0.35) 35%,
  rgba(0,0,0,0.85) 70%
)
```

---

## 🧾 GRID OVERLAY (Subtle Technical Texture)

- Grid Lines: `#1E293B`
- Opacity: `0.4`

---

## ✍️ TYPOGRAPHY COLORS

| Role | Hex |
|------|-----|
| Primary Headline Text | `#F9FAFB` |
| Secondary Headline / Emphasis | `#E5E7EB` |
| Body Text | `#9CA3AF` |
| Muted / Helper Text | `#6B7280` |

---

## 🔘 CTA & INTERACTION COLORS

| Role | Hex |
|------|-----|
| Primary CTA Background | `#FFFFFF` |
| Primary CTA Text | `#020617` |
| Secondary CTA (Outline / Ghost) | `#CBD5E1` |
| Hover State (CTA / Links) | `#E5E7EB` |

---

## ✨ ACCENT COLORS (USE SPARINGLY)

| Role | Hex | Usage |
|------|-----|-------|
| Primary Accent (Tech Blue) | `#38BDF8` | Icons, subtle highlights, small separators |
| Secondary Accent (Violet Glow) | `#B48CDE` | Radial accents, glow borders, special highlights ONLY |

---

## 🚦 STATUS COLORS (For Dashboards)

| Role | Hex |
|------|-----|
| Success | `#22C55E` |
| Warning | `#F59E0B` |
| Error | `#EF4444` |

---

## 🧠 COLOR USAGE RULES

### ✅ DO:
- Dark backgrounds everywhere
- White headlines only
- Gray body text
- ONE accent color max per section
- White CTA buttons for contrast

### ❌ DON'T:
- Use multiple bright colors
- Use gradients everywhere
- Use pure black (`#000000`)
- Use neon colors
- Use colored CTA buttons

---

## 🧩 TAILWIND TOKEN MAPPING

```js
colors: {
  background: "#0B0F14",
  surface: "#111827",
  elevated: "#1F2937",
  primary: "#FFFFFF",
  primaryText: "#020617",
  text: "#E5E7EB",
  muted: "#9CA3AF",
  subtle: "#6B7280",
  accent: "#38BDF8",
  accentGlow: "#B48CDE",
}
```
