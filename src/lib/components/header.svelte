<script lang="ts">
  import { resolve } from "$app/paths";
  import ColorSchemeToggle from "$lib/components/color-scheme-toggle.svelte";

  interface Props {
    something: "knowing" | "talking" | "thinking";
  }

  let { something }: Props = $props();
</script>

<header class="sticky top-0 z-9999 bg-transparent backdrop-blur-xl">
  <nav
    class="mx-auto flex w-full
    items-center justify-between p-2 text-center md:p-3 lg:p-4
    xl:p-5"
  >
    <div
      class="font-head flex items-center space-x-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
    >
      <a class="mr-2 text-gray-500/50" href={resolve("/")}>rangho.is</a>
      <span class="mr-2 text-gray-800/50 dark:text-gray-200/50">/</span>
      <a
        class="text-gray-800 dark:text-gray-200"
        href={resolve(`/${something}`)}
      >
        {something}
      </a>
    </div>
    <ColorSchemeToggle />
  </nav>
</header>
