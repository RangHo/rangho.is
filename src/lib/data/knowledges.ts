import type { Component } from "svelte";
import type { EnhancedImgAttributes } from "@sveltejs/enhanced-img";
import type { OrgMetadata, OrgModule } from "ox-svelte";

/**
 * Type of a knowledge (a.k.a. a note).
 */
export type Knowledge = {
  original: string;
  name: string;
  component: Component;
};

export const entries = [] as Knowledge[];

export const images = {} as Record<string, EnhancedImgAttributes["src"]>;
