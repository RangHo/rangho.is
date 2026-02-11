<script lang="ts">
  import { goto } from "$app/navigation";
  import { resolve } from "$app/paths";

  import TextWave from "$lib/components/text-wave.svelte";

  const somethings = ["thinking"];

  let something = $state("");

  let focused = $state(false);

  let filteredSomethings = $derived(
    somethings.filter((s) => s.includes(something.toLowerCase())),
  );

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    if (something === "") {
      return;
    }

    if (filteredSomethings.length > 0) {
      goto(`/${filteredSomethings[0]}`);
    } else {
      goto(`/${something}`);
    }
  }

  function handleCandidateSelect(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;
    something = target.textContent || "";
    focused = false;
  }
</script>

<main class="flex h-screen">
  <div class="font-head m-auto p-5">
    <p class="font-semibold text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      what is rangho <TextWave text="doing" --amplitude="10%" />?
    </p>
    <div class="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
      <span class="baseurl">rangho.is</span>
      <span class="separator">/</span>
      <form
        class="inline-block"
        role="search"
        autocomplete="off"
        onsubmit={handleSubmit}
      >
        <label for="something" class="sr-only">Something</label>
        <input
          id="something"
          class="relative border-b-2 top-0 left-0 w-40 focus:outline-none md:(w-60 border-b-3) lg:(w-80 border-b-4) xl:(w-96 border-b-5) 2xl:(w-128 border-b-6)"
          type="text"
          placeholder="something"
          bind:value={something}
          onfocusin={() => (focused = true)}
        />
        <button type="submit" hidden>Go</button>
        <ul
          class="absolute max-h-0 overflow-hidden transition-all"
          class:opened={focused}
        >
          {#each filteredSomethings as option}
            <li class="my-5 p-1 hover:(bg-gray-50 text-black)">
              <button onclick={handleCandidateSelect}>
                {option}
              </button>
            </li>
          {/each}
        </ul>
      </form>
    </div>
  </div>
</main>

<style>
  .opened {
    max-height: 20rem;
  }
</style>
