# Using the supplied React parallax component

The current portfolio is a **static HTML/CSS/JavaScript** site. It has no React build step, TypeScript, Tailwind CSS, or shadcn aliases, so a file under `components/ui/*.tsx` would not run in this version.

The live portfolio already has a lightweight native JavaScript parallax and smooth mouse-scroll implementation in `app.js`. It avoids adding a large runtime and is the right choice for the current static build.

If you decide to migrate the portfolio to React, use this setup before pasting the supplied component.

## 1. Create a React + TypeScript + Tailwind project

```bash
npm create vite@latest rainforest-portfolio -- --template react-ts
cd rainforest-portfolio
npm install
npm install -D tailwindcss @tailwindcss/vite
```

Add the Tailwind Vite plugin, then import Tailwind in the main CSS file as documented by Tailwind. Initialize shadcn:

```bash
npx shadcn@latest init
```

Choose the `src/` directory when asked. This creates the `@/*` import alias used by the demo component.

## 2. Component location

Create this folder if shadcn did not create it:

```text
src/components/ui/
```

This is important because shadcn components conventionally live there. Keeping reusable UI in one location also makes imports such as `@/components/ui/parallax-scrolling` predictable across the app.

Save the supplied component as:

```text
src/components/ui/parallax-scrolling.tsx
```

Save the supplied demo as:

```text
src/demos/parallax-demo.tsx
```

## 3. Dependencies

The supplied component needs these packages:

```bash
npm install gsap @studio-freight/lenis
```

## 4. Use it in the page

```tsx
import { ParallaxComponent } from '@/components/ui/parallax-scrolling';

export default function HomePage() {
  return <ParallaxComponent />;
}
```

## 5. Portfolio-specific adaptation

Replace the component's mountain image layers with the local rainforest assets and use the component for the hero only. Do not keep both the React Lenis scroller and the static `app.js` wheel-smoothing code: each handles mouse-wheel input, and running both creates the delayed, laggy behavior seen when two smooth-scroll systems overlap.
