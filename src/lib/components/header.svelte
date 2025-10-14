<script lang="ts">
  import type { Snippet } from "svelte";

  import ColorSchemeToggle from "$lib/components/color-scheme-toggle.svelte";
  import Wavy from "$lib/components/wavy.svelte";

  interface Props {
    something: string;
  }

  let { something }: Props = $props();
</script>

<header>
  <nav class="w-full flex items-center justify-around text-center mx-auto p-5">
    <div class="flex items-center space-x-3 font-head text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
      <a class="text-gray-500/50" href="/">rangho.is</a>
      <span class="">/</span>
      <a class="" href="/{something}"><Wavy text={something} /></a>
    </div>
    <ColorSchemeToggle />
  </nav>
</header>

<style>
</style>
