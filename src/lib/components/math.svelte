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
    <!-- Display + inline mode means "$$ ... $$" or "\[ ... \]" construct. -->
    <span class="block overflow-x-auto">
      {@render math()}
    </span>
  {:else}
    <!-- Display mode only means it's a LaTeX environment. -->
    <div class="overflow-x-auto">
      {@render math()}
    </div>
  {/if}
{:else}
  <!-- Nothing specified (probably inline) means that "$ ... $" or "\( ... \)" construct. -->
  {@render math()}
{/if}
