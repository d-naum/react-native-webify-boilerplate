# @groooh/react-native-webify — Showcase & Examples

> **Universal Component Examples for Mobile (React Native / Expo) and Web (Next.js / Vite)**
>
> Powered by **[@groooh/react-native-webify](https://www.npmjs.com/package/@groooh/react-native-webify)** &bull; **[www.groooh.com](https://www.groooh.com)**

---

## Overview

This repository contains full interactive showcases demonstrating how to build unified components in React Native and compile them to zero-runtime, semantic React Web code.

- **`mobile/`**: React Native & Expo mobile application with real-world showcases for E-Commerce, Metrics Dashboard, Overlays & Feedback, Media Carousel, Settings, and Auth Forms.
- **`web/`**: Vite + React Web application displaying the exact same components compiled down to semantic HTML5 (`<article>`, `<h1>`, `<button>`, `<input>`) at build time with 0 KB runtime overhead.

---

## Quick Start

### 1. Mobile Showcase (React Native / Expo)

```bash
cd mobile

# Install dependencies
npm install

# Start the Expo / Metro development server
npm run start

# Run directly on Android device or emulator
npm run android
```

### 2. Web Showcase (Vite / React)

```bash
cd web

# Install dependencies
npm install

# Compile React Native component tree to semantic web JSX
npm run compile:ui

# Start the local development web server
npm run dev
```

---

## Available Showcases

| Showcase | Highlights |
| :--- | :--- |
| **`EcommerceShowcase.tsx`** | ProductCard with interactive ImageSlider, full card tap events, wishlist toggle, interactive star Rating, and QuantitySelector |
| **`OverlaysFeedbackDemo.tsx`** | Native BottomSheet with drag gestures, accessible Dialog Modal, and Toast alerts |
| **`MediaShowcase.tsx`** | Avatar with profile photo change event, multi-file FileUpload, touch ImageSlider, and Accordion |
| **`MetricsDashboard.tsx`** | Telemetry metrics, status Badges, and filter Tags |
| **`SettingsPanel.tsx`** | Universal Inputs, PasswordInput with visibility toggle, Textarea, and Checkbox |
| **`LoginForm.tsx`** | Form validation with full-width action Button |

---

## Documentation & Learning Guides

Comprehensive documentation files are included directly in this repository:

- 📖 **[Component & Events Reference Guide](docs/COMPONENTS_REFERENCE.md)**: Full API signatures, token customization, and interactive tap/change event callbacks for all 35+ components.
- 🏛️ **[Architectural Reference & Integration Guide](DOCUMENTATION.md)**: Deep dive into the AST compiler pipeline, Next.js Server Components / RSC integration, and design token scales.

---

## Library Installation

To install and use `@groooh/react-native-webify` in your own apps:

```bash
# npm
npm install @groooh/react-native-webify

# yarn
yarn add @groooh/react-native-webify

# pnpm
pnpm add @groooh/react-native-webify
```

Visit **[www.groooh.com](https://www.groooh.com)** for official updates, tutorials, and roadmap.

