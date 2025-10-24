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

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-RF0SHXN2NY"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "G-RF0SHXN2NY");
  </script>
</svelte:head>

<ColorSchemeService />

<CodeStylesheet dark="atom-one-dark" light="atom-one-light" />
<MathStylesheet />

<div class="transition-all">
  {@render children()}
</div>
