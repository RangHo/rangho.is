<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  import { page } from "$app/state";
  import { thoughts } from "$lib/data";

  interface Props extends HTMLAnchorAttributes {
    href: string;
    children: Snippet;
  }

  let { href, children, ...attr }: Props = $props();

  let hrefUrl = $derived(new URL(href, page.url));

  let isExternal = $derived(hrefUrl.origin !== page.url.origin);

  function resolveHref(url: URL, path: string): string | undefined {
    // Extract the first part of the path to determine the type of content.
    const something = url.pathname.split("/")[1];

    // Find the "slugified" version of the file name.
    let slug;
    switch (something) {
      case "thinking":
        slug = thoughts.find((t) => t.original === path)?.slugified;
        break;
      default:
        return;
    }

    if (!slug) {
      // Oops. no matching slug.
      return;
    }

    // Construct the URL.
    const slugUrl = new URL(slug, page.url);
    return slugUrl.href;
  }

  let resolvedHref = $derived(
    isExternal ? hrefUrl.href : resolveHref(page.url, href),
  );
</script>

<a class:external={isExternal} href={resolvedHref} {...attr}>
  {@render children()}
</a>

<style>
  .external::before {
    content: "🔗";
    margin-right: 0.1em;
  }
</style>
