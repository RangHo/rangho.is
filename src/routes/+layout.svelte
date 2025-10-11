<script lang="ts">
  import type { Snippet } from "svelte";

  import ColorSchemeService from "$lib/components/color-scheme-service.svelte";

  import "@unocss/reset/sanitize/sanitize.css";
  import "@unocss/reset/sanitize/assets.css";
  import "virtual:uno.css";
  import CodeStylesheet from "$lib/components/code-stylesheet.svelte";
  import MathStylesheet from "$lib/components/math-stylesheet.svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<CodeStylesheet dark="github-dark" light="github" />
<MathStylesheet />

<ColorSchemeService />

{@render children()}
