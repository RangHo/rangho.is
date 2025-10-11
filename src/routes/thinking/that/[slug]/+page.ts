import type { PageLoad } from "./$types";

import { error } from "@sveltejs/kit";

import { thoughts } from "$lib/data";

export const load: PageLoad = async ({ params }) => {
  const entry = thoughts.find((t) => t.slugified === params.slug);
  if (!entry) {
    error(404, "Not found");
  }

  return {
    component: entry.component,
    metadata: entry.metadata,
  };
};
