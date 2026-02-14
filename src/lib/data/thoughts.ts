import type { Component } from "svelte";
import type { EnhancedImgAttributes } from "@sveltejs/enhanced-img";
import type { OrgMetadata, OrgModule } from "ox-svelte";

import type { EnhancedImgSrc } from "$lib/types";

/**
 * Type of a thought (a.k.a. a blog post).
 */
export type Thought = {
  /**
   * The original filename of the thought.
   */
  original: string;

  /**
   * The slugified version of the thought's filename.
   */
  slugified: string;

  /**
   * The Svelte component representing the thought.
   */
  component: Component;

  /**
   * The metadata associated with the thought.
   */
  metadata: OrgMetadata;
};

const rawEntries = import.meta.glob<OrgModule>("$data/thoughts/*.org", {
  eager: true,
});

export const entries: Thought[] = Object.entries(rawEntries).map(
  ([path, module]) => {
    const basename = path.split("/").pop()!;
    const basenameSansExtension = basename.replace(/\.org$/, "");
    const slugified = basenameSansExtension.replace(/_/g, "-");
    return {
      original: basename,
      slugified,
      component: module.default,
      metadata: module.metadata,
    };
  },
);

const rawImages = import.meta.glob<EnhancedImgAttributes["src"]>(
  "$data/thoughts/assets/*",
  {
    eager: true,
    import: "default",
    query: {
      enhanced: true,
    },
  },
);

export const images: Record<string, EnhancedImgSrc> = Object.fromEntries(
  Object.entries(rawImages).map(([path, module]) => [
    path.split("/").pop()!,
    module,
  ]),
);
