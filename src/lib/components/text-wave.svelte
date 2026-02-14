<script lang="ts">
  interface Props {
    text: string;
    bold?: boolean;
    italic?: boolean;
  }

  let { text, bold = false, italic = false }: Props = $props();
</script>

<span class="wavy" class:font-bold={bold} class:italic>
  {#each text as c, i}
    <span style:animation-delay="calc(var(--delay, .1s) * {i})">
      {c}
    </span>
  {/each}
</span>

<style>
  @keyframes wave {
    0%,
    100% {
      transform: translateY(calc(var(--amplitude, 15%) * -1));
    }
    50% {
      transform: translateY(calc(var(--amplitude, 15%) * 1));
    }
  }

  .wavy span {
    display: inline-block;
    animation: var(--duration, 1s) wave ease-in-out infinite;
  }
</style>
