import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

import { enhancedImages } from "@sveltejs/enhanced-img";

import pkg from "./package.json";

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit(),
  ],
  define: {
    "__DEPENDENCIES__": pkg.dependencies,
    "__DEV_DEPENDENCIES__": pkg.devDependencies,
  }
});
