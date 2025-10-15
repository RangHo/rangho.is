import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import { orgPreprocess } from "svelte-preprocess-org";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".org"],
  preprocess: [
    orgPreprocess({
      extensions: [".org"],
      anchorFormat: '<Link href=\\"%s\\">%s</Link>',
      componentImportAlist: {
        "$lib/components/code.svelte": "Code",
        "$lib/components/math.svelte": "Math",
        "$lib/components/image.svelte": "Image",
        "$lib/components/link.svelte": "Link",
      },
      idLocations: ["src/data/knowledges/*.org", "src/data/thoughts/*.org"],
      imageFormat: '<Image src=\\"%s\\" alt=\\"%s\\" />',
      latexEnvironmentFormat: "<Math expression={%s} displayMode />",
      latexDisplayFragmentFormat:
        "<Math expression={%s} displayMode inlineMode />",
      latexInlineFragmentFormat: "<Math expression={%s} inlineMode />",
      srcBlockFormat: '<Code lang=\\"%s\\" code={%s} />',
      withSectionNumbers: false,
    }),
    vitePreprocess(),
  ],
  kit: {
    adapter: adapter(),
    alias: {
      $data: "src/data",
    },
  },
};

export default config;
