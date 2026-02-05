import type { Component } from "svelte";
import type { EnhancedImgAttributes } from "@sveltejs/enhanced-img";
import type { OrgMetadata, OrgModule } from "ox-svelte";

// ---------------------------------------------------------------------
// -- Knowledges
// ---------------------------------------------------------------------

export type Knowledge = {
  path: string;
  name: string;
  component: Component;
};

export type KnowledgeAsset = {
  filename: string;
  image: EnhancedImgAttributes["src"];
};

const knowledgesRaw = import.meta.glob<OrgModule>("$data/knowledges/*.org", {
  eager: true,
});

const knowledgesAssetsRaw = import.meta.glob<EnhancedImgAttributes["src"]>(
  "$data/knowledges/assets/*",
  {
    eager: true,
    import: "default",
    query: {
      enhanced: true,
    },
  },
);

export const knowledges: Knowledge[] = Object.entries(knowledgesRaw).map(
  ([path, module]) => {
    const basename = path.split("/").pop()!;
    const basenameSansExtension = basename.replace(/\.org$/, "");
    return {
      path: basenameSansExtension,
      name: module.metadata.title || "",
      component: module.default,
    };
  },
);

export const knowledgesAssets: KnowledgeAsset[] = Object.entries(
  knowledgesAssetsRaw,
).map(([path, module]) => {
  return { filename: path.split("/").pop()!, image: module };
});

// ---------------------------------------------------------------------
// -- Thoughts
// ---------------------------------------------------------------------

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

const thoughtsAssetsRaw = import.meta.glob<EnhancedImgAttributes["src"]>(
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
        Object.entries(thoughtsAssetsRaw)
          .filter(([assetPath]) =>
            assetPath.includes(basenameSansExtension + "/"),
          )
          .map(([path, module]) => [path.split("/").pop()!, module]),
      ),
    };
  },
);
