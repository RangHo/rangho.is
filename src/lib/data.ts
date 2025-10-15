import type { Component } from "svelte";
import type { EnhancedImgAttributes } from "@sveltejs/enhanced-img";
import type { OrgMetadata, OrgModule } from "ox-svelte";

export type Thought = {
  original: string;
  slugified: string;
  component: Component;
  metadata: OrgMetadata;
  assets: Record<string, EnhancedImgAttributes["src"]>;
};

const thoughtsRaw = import.meta.glob<OrgModule>("$data/thoughts/*.org", {
  eager: true,
});

const thoughtsAssets = import.meta.glob<EnhancedImgAttributes["src"]>(
  "$data/thoughts/assets/**/*",
  {
    eager: true,
    import: "default",
    query: {
      enhanced: true,
    },
  },
);

export const thoughts: Thought[] = Object.entries(thoughtsRaw).map(
  ([path, module]) => {
    const basename = path.split("/").pop()!;
    const basenameSansExtension = basename.replace(/\.org$/, "");
    const slugified = basenameSansExtension.replace(/_/g, "-");
    return {
      original: basename,
      slugified,
      component: module.default,
      metadata: module.metadata,
      assets: Object.fromEntries(
        Object.entries(thoughtsAssets)
          .filter(([assetPath]) =>
            assetPath.includes(basenameSansExtension + "/"),
          )
          .map(([path, module]) => [path.split("/").pop()!, module]),
      ),
    };
  },
);
