<script lang="ts">
  import { default as katex, type KatexOptions } from "katex";

  interface Props extends KatexOptions {
    expression: string;
    inlineMode?: boolean;
  }

  let { expression, inlineMode, ...katexOpts }: Props = $props();

  let renderedHTML = $derived(katex.renderToString(expression, katexOpts));
</script>

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
