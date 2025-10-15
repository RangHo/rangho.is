<script lang="ts">
  import type { HTMLImgAttributes } from "svelte/elements";
  import type { EnhancedImgAttributes } from "@sveltejs/enhanced-img";

  import { page } from "$app/state";
  import { thoughts } from "$lib/data";

  interface Props extends HTMLImgAttributes {
    src: string;
  }

  let { src, ...rest }: Props = $props();

  let srcUrl = $derived(new URL(src, page.url));

  let isExternal = $derived(srcUrl.origin !== page.url.origin);

  function resolveSrc(url: URL, path: string) {
    // Extract the first segment of the path to determine the type of content.
    const something = url.pathname.split("/")[1];
    switch (something) {
      case "thinking": {
        // For thoughts assets, we should be able to find the assets by slug.
        const slug = url.pathname.split("/")[2];
        const currentThought = thoughts.find((t) => t.slugified === slug);
        if (!currentThought) {
          console.warn(`Could not find thought with slug: ${slug}`);
          return;
        }

        // If we found the thought, we can return the asset.
        const filename = path.split("/").pop()!;
        return currentThought.assets[filename];
      }
      default:
        return;
    }
  }

  let resolvedSrc = $derived(
    isExternal
      ? srcUrl.href
      : (resolveSrc(page.url, src)),
  );
</script>

<enhanced:img src={resolvedSrc} {...rest} />
