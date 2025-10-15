<script lang="ts">
  import type { Snippet } from "svelte";

  import ColorSchemeService from "$lib/components/color-scheme-service.svelte";

  import CodeStylesheet from "$lib/components/code-stylesheet.svelte";
  import MathStylesheet from "$lib/components/math-stylesheet.svelte";

  import "@unocss/reset/sanitize/sanitize.css";
  import "@unocss/reset/sanitize/assets.css";
  import "virtual:uno.css";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<ColorSchemeService />

<CodeStylesheet dark="night-owl" light="nord" />
<MathStylesheet />

{@render children()}
