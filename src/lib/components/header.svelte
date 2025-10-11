<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    something: string;
  }

  let { something }: Props = $props();
</script>

<header>
  <nav>
    <a href="/{something}"><span>rangho.is</span>/{something}</a>
  </nav>
</header>

<style>
</style>
