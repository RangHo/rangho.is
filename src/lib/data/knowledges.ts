import type { Component } from "svelte";
import type { EnhancedImgAttributes } from "@sveltejs/enhanced-img";
import type { OrgMetadata, OrgModule } from "ox-svelte";

import generatedEntries from "$lib/generated/knowledges.json";

/**
 * Type of a knowledge (a.k.a. a note).
 */
export type Knowledge = {
  original: string;
  filename: string;
  id: string;
  title: string;
  component: Component;
};

export const rawEntries = import.meta.glob<OrgModule>(
  "$data/knowledges/*.org",
  {
    eager: true,
  },
);

export const entries: Knowledge[] = generatedEntries.vertices.map((generatedEntry) => {
  const basename = generatedEntry.file.split("/").pop()!;
  const rawEntry = Object.entries(rawEntries).find(([path, _]) => path.endsWith(basename))![1];
  return {
    original: basename,
    filename: basename.replace(".org", ""),
    id: generatedEntry.id,
    title: generatedEntry.title,
    component: rawEntry.default,
  }
})
