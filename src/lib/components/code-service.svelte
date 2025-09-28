<script lang="ts">
  import { getColorScheme } from "$lib/color-scheme.svelte";
  import themes from "$lib/hljs-themes";

  interface Props {
    dark: string;
    light: string;
  }

  let { dark, light }: Props = $props();

  let scheme = getColorScheme();

  let styleElement: HTMLStyleElement | null = $state(null);

  $effect(() => {
    if (!styleElement) {
      if (document.getElementById("hljs-theme")) {
        styleElement = document.getElementById(
          "hljs-theme",
        ) as HTMLStyleElement;
      } else {
        styleElement = document.createElement("style");
        styleElement.id = "hljs-theme";
        document.head.appendChild(styleElement);
      }
    }
    styleElement.textContent = scheme.isLight ? themes[light] : themes[dark];
  });
</script>
