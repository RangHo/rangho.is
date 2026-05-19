import type { EntryGenerator, PageLoad } from "./$types";

import { error } from "@sveltejs/kit";

import { entries as thoughts } from "$lib/data/thoughts";

export const entries: EntryGenerator = () =>
  thoughts.map((t) => ({ slug: t.slugified }))

export const load: PageLoad = async ({ params }) => {
  const entry = thoughts.find((t) => t.slugified === params.slug);
  if (!entry) {
    error(404, "Not found");
  }

  return entry;
};
