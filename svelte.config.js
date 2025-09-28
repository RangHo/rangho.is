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
      componentImportAlist: {
        "$lib/components/code.svelte": "Code",
        "$lib/components/math.svelte": "Math",
      },
      idLocations: ["src/data/knowledges/*.org", "src/data/thoughts/*.org"],
      latexEnvironmentFormat: "<Math expression={%s} displayMode />",
      latexDisplayFragmentFormat:
        "<Math expression={%s} displayMode inlineMode />",
      latexInlineFragmentFormat: "<Math expression={%s} inlineMode />",
      srcBlockFormat: "<Code lang={`%s`} code={%s} />",
    }),
  ],
  kit: {
    adapter: adapter(),
    alias: {
      $data: "src/data",
    },
  },
};

export default config;
