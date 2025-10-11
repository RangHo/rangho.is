import type { PageLoad } from "./$types";

import { thoughts } from "$lib/data";

export const load: PageLoad = async () => ({
  entries: thoughts
    .map((t) => ({
      slugified: t.slugified,
      ...t.metadata,
    }))
    .sort((a, b) => {
      const dateA = new Date(a.date || 0);
      const dateB = new Date(b.date || 0);
      return dateA.getTime() !== dateB.getTime()
        ? dateB.getTime() - dateA.getTime()
        : b.slugified.localeCompare(a.slugified);
    }),
});
