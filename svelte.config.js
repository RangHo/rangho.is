import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import { orgPreprocess } from "svelte-preprocess-org";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".org"],
  preprocess: [
    vitePreprocess(),
    orgPreprocess({
      extensions: [".org"],
    }),
  ],
  kit: {
    adapter: adapter(),
  },
};

export default config;
