<script lang="ts">
  import TextWave from "$lib/components/text-wave.svelte";
</script>

<main class="flex h-screen">
  <div class="m-auto font-head">
    <p class="text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      what is rangho <TextWave text="doing" --amplitude="10%" />?
    </p>
    <div class="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
      <span class="baseurl">rangho.is</span>
      <span class="separator">/</span>
      <button>something</button>
    </div>
  </div>
</main>
