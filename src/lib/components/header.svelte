<script lang="ts">
  import ColorSchemeToggle from "$lib/components/color-scheme-toggle.svelte";

  interface Props {
    something: string;
  }

  let { something }: Props = $props();
</script>

<header class="sticky top-0 z-9999 bg-transparent backdrop-blur-xl">
  <nav class="w-full flex items-center justify-around text-center mx-auto p-4">
    <div
      class="flex items-center space-x-3 font-head text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
    >
      <a class="mr-2 text-gray-500/50" href="/">rangho.is</a>
      <span class="mr-2 text-gray-800/50 dark:text-gray-200/50">/</span>
      <a class="text-gray-800 dark:text-gray-200" href="/{something}">
        {something}
      </a>
    </div>
    <ColorSchemeToggle />
  </nav>
</header>
