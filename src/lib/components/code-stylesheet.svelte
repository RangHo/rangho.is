<script lang="ts">
  import { getColorScheme } from "$lib/color-scheme.svelte";

  interface Props {
    dark: string;
    light: string;
  }

  let { dark, light }: Props = $props();

  const hljsVersion = __DEPENDENCIES__["highlight.js"].substring(1);

  let scheme = getColorScheme();

  let hljsTheme = $derived(scheme.isLight ? light : dark);
</script>

<svelte:head>
  <link
    id="hljs-stylesheet"
    rel="stylesheet"
    href={`https://cdn.jsdelivr.net/npm/highlight.js@${hljsVersion}/styles/${hljsTheme}.min.css`}
    crossorigin="anonymous"
  />
</svelte:head>
