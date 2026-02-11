<script lang="ts">
  import TextWave from "$lib/components/text-wave.svelte";

  const somethings = ["thinking", "knowing", "talking"];

  let something = $state("");

  let focused = $state(false);

  let filteredSomethings = $derived(
    somethings.filter((s) => s.includes(something.toLowerCase())),
  );
</script>

<main class="flex h-screen">
  <div class="font-head m-auto p-5">
    <p class="text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      what is rangho <TextWave text="doing" --amplitude="10%" />?
    </p>
    <div class="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
      <span class="baseurl">rangho.is</span>
      <span class="separator">/</span>
      <form class="inline-block">
        <input
          class="relative border-b-2 top-0 left-0 w-xs focus:outline-none md:(w-sm border-b-3) lg:(w-md border-b-4) xl:(w-lg border-b-5) 2xl:(w-xl border-b-6)"
          type="text"
          placeholder="something"
          bind:value={something}
          onfocusin={() => (focused = true)}
          onfocusout={() => (focused = false)}
        />
        <ul
          class="absolute max-h-0 overflow-hidden transition-all"
          class:opened={focused}
        >
          {#each filteredSomethings as option}
            <li class="my-5">{option}</li>
          {/each}
        </ul>
      </form>
    </div>
  </div>
</main>

<style>
  .opened {
    max-height: 16rem;
  }
</style>
