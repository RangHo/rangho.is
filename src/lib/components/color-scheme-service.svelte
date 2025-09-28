<script lang="ts">
  import { onMount } from "svelte";

  import { browser } from "$app/environment";
  import {
    destroyColorScheme,
    getColorScheme,
    initializeColorScheme,
  } from "$lib/color-scheme.svelte";

  let scheme = getColorScheme();

  let combined = $derived(
    scheme.user !== "system" ? scheme.user : scheme.system,
  );

  // When color scheme changes, update the document.
  $effect(() => {
    if (!browser) return;

    let html = document.documentElement;

    // When the given color scheme is dark, add the dark class to the html element.
    if (
      scheme.user === "dark" ||
      (scheme.user === "system" && scheme.system === "dark")
    ) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    // Make sure to update the style as well.
    html.style.colorScheme = combined;

    // Apply data-theme to the html element.
    html.dataset.theme = combined;
  });

  // Set up the event handlers.
  onMount(() => {
    initializeColorScheme();

    return () => {
      destroyColorScheme();
    };
  });
</script>
