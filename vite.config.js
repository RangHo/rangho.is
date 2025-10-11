import { defineConfig } from "vite";

import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import unocss from "unocss/vite";


import pkg from "./package.json";

export default defineConfig({
  define: {
    __DEPENDENCIES__: pkg.dependencies,
    __DEV_DEPENDENCIES__: pkg.devDependencies,
  },
  plugins: [enhancedImages(), unocss(), sveltekit()],
});
