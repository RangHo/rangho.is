<script lang="ts">
  import type { HTMLImgAttributes } from "svelte/elements";

  import { page } from "$app/state";
  import { thoughtImages } from "$lib/data";
  import type { EnhancedImgSrc } from "$lib/types";

  interface Props extends HTMLImgAttributes {
    src: string;
  }

  let { src, ...rest }: Props = $props();

  let srcUrl = $derived(new URL(src, page.url));

  let isExternal = $derived(srcUrl.origin !== page.url.origin);

  function resolveSrc(url: URL, path: string) {
    // Extract the first segment of the path to determine the type of content.
    const something = url.pathname.split("/")[1];

    // Populate the "image registry" based on the type of content.
    let images: Record<string, EnhancedImgSrc>;
    switch (something) {
      case "thinking":
        // This should target "thoughts".
        images = thoughtImages;
        break;

      default:
        console.warn(`Unknown content type "${something}".`);
        return path;
    }

    // Look up the image in the registry.
    const filename = path.split("/").pop();
    if (!filename) {
      console.warn(`Unable to extract filename from path "${path}".`);
      return path;
    }

    const image = images[filename];
    if (!image) {
      console.warn(`Image "${filename}" not found in registry.`);
      return path;
    }

    return image;
  }

  let resolvedSrc = $derived(
    isExternal ? srcUrl.href : resolveSrc(page.url, src),
  );
</script>

<enhanced:img class="mx-auto" src={resolvedSrc} {...rest} />
