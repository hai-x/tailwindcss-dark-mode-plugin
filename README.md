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
