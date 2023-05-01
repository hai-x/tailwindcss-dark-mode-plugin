# tailwindcss-dark-mode-plugin

Dark mode plugin for tailwind css

# Installation

```bash
yarn add tailwindcss-dark-mode-plugin --save-dev
# or
npm install tailwindcss-dark-mode-plugin --save-dev
# or
pnpm install tailwindcss-dark-mode-plugin --save-dev
```

# Usage Example

In your tailwind.config.js:

```js
import plugin from "tailwindcss/plugin";
import { themeColors, themePlugin } from "tailwindcss-dark-mode-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    colors: themeColors,
  },
  plugins: [plugin(themePlugin)],
};
```

# Feature

1. Use css variable mode for dark night mode injection.For `:root` and `html#id`.
2. It depend on tailwindcss, all tailwindcss built-in colors have been rewritten.
3. Dark mode is out of the box as long as you use tailwindcss built-in colors.
   You don't need to write class like `dark:bg-black`.

# Recommendation

1. You can configure css styles to whole document like, let it more out of the
   box

```css
@layer base {
  body {
    @apply text-neutral-700;
  }
}
```
