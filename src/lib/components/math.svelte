<script module lang="ts">
  let initialized = false;

  const katexVersion = __DEPENDENCIES__["katex"].substring(1);
</script>

<script lang="ts">
  import { default as katex, type KatexOptions } from "katex";

  interface Props extends KatexOptions {
    expression: string;
    inlineMode?: boolean;
  }

  let { expression, inlineMode, ...katexOpts }: Props = $props();

  let renderedHTML = $derived(katex.renderToString(expression, katexOpts));

  const shouldInitialize = !initialized;
  initialized = true;
</script>

<svelte:head>
  {#if shouldInitialize}
    <link
      rel="stylesheet"
      href={`https://cdn.jsdelivr.net/npm/katex@${katexVersion}/dist/katex.min.css`}
      crossorigin="anonymous"
    />
  {/if}
</svelte:head>

{#snippet math()}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html renderedHTML}
{/snippet}

{#if katexOpts.displayMode}
  {#if inlineMode}
    <span class="block overflow-x-auto">
      {@render math()}
    </span>
  {:else}
    <div class="overflow-x-auto">
      {@render math()}
    </div>
  {/if}
{:else}
  {@render math()}
{/if}
