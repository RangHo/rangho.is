import type { Component } from "svelte";
import type { EnhancedImgAttributes } from "@sveltejs/enhanced-img";
import type { OrgMetadata, OrgModule } from "ox-svelte";

/**
 * Type of a knowledge (a.k.a. a note).
 */
export type Knowledge = {
  original: string;
  filename: string;
  title: string;
  component: Component;
};

export const rawEntries = import.meta.glob<OrgModule>("$data/knowledges/*.org", {
  eager: true,
});

export const entries: Knowledge[] = Object.entries(rawEntries).map(
  ([path, module]) => {
    const basename = path.split("/").pop()!;
    const basenameSansExtension = basename.replace(/\.org$/, "");
    return {
      original: basename,
      filename: basenameSansExtension,
      component: module.default,
      title: module.metadata.title || basenameSansExtension,
    }
  }
)

export const images = {} as Record<string, EnhancedImgAttributes["src"]>;
