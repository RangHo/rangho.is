import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import { orgPreprocess } from "svelte-preprocess-org";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".org"],
  preprocess: [
    orgPreprocess({
      extensions: [".org"],
      anchorFormat: '<OrgLink href=\\"%s\\">%s</OrgLink>',
      componentImportAlist: {
        "$lib/components/code.svelte": "Code",
        "$lib/components/math.svelte": "Math",
        "$lib/components/org-image.svelte": "OrgImage",
        "$lib/components/org-link.svelte": "OrgLink",
      },
      idLocations: ["src/data/knowledges/*.org", "src/data/thoughts/*.org"],
      imageFormat: '<OrgImage src=\\"%s\\" alt=\\"%s\\" />',
      initDirectory: ".emacs.d/",
      latexEnvironmentFormat: "<Math expression={%s} displayMode />",
      latexDisplayFragmentFormat:
        "<Math expression={%s} displayMode inlineMode />",
      latexInlineFragmentFormat: "<Math expression={%s} inlineMode />",
      metadataExportList: [
        "title",
        "subtitle",
        "description",
        "date",
        "language",
      ],
      srcBlockFormat: '<Code lang=\\"%s\\" code={%s} />',
      withSectionNumbers: false,
      withBrokenLinks: true,
    }),
    vitePreprocess(),
  ],
  kit: {
    adapter: adapter({
      fallback: "404.html",
    }),
    alias: {
      $data: "src/data",
    },
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
    prerender: {
      handleMissingId: "warn",
      handleUnseenRoutes: "warn",
    },
  },
};

export default config;
