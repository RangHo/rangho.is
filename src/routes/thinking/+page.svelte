<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

{#each data.entries as entry}
  <a href="/thinking/{entry.slugified}">
    <h3 class="text-3xl font-bold mb-4">{entry.title || "Unnamed"}</h3>
  </a>
{/each}
