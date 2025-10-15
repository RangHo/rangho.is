<script lang="ts">
  import TextWave from "$lib/components/text-wave.svelte";
</script>

<div class="w-full h-full flex items-center text-center font-head text-6xl">
  <p>
    rangho is...<br />
    <TextWave
      text="something"
      bold italic
      --amplitude="10%"
      --delay=".2s"
      --duration="1.5s"
    />
  </p>
</div>
