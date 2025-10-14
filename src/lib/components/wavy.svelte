<script lang="ts">
  interface Props {
    text: string;
    delay?: number;
    duration?: number;
    italic?: boolean;
  }

  let { text, delay = 100, duration = 1000, italic = false }: Props = $props();

  let letters = text.split("").map((char, index) => {
    return { char, delay: index * delay };
  });
</script>

<span class="wavy" style:font-style={italic ? "italic" : "inherit"}>
  {#each letters as l}
    <span
      style:animation-delay="{l.delay}ms"
      style:animation-duration="{duration}ms"
    >
      {l.char}
    </span>
  {/each}
</span>

<style>
  @keyframes wave {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(+15%);
    }
  }

  .wavy span {
    display: inline-block;
    animation: wave ease-in-out infinite;
  }
</style>
