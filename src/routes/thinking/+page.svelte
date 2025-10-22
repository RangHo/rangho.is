<script lang="ts">
  import type { PageProps } from "./$types";

  import type { ElementOf } from "$lib/types"

  let { data }: PageProps = $props();
</script>

{#snippet thought(entry: ElementOf<typeof data.entries>)}
  <a href="/thinking/{entry.slugified}">
    <h3 class="text-3xl font-bold mb-4">{entry.title || "Unnamed"}</h3>
  </a>
{/snippet}

{#each data.entries as entry}
  {@render thought(entry)}
{/each}
