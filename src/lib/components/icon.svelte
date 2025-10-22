<script lang="ts">
  interface Props {
    c: string;
    i: string;
  }

  let { c, i }: Props = $props();
</script>

<span class="inline-block align-[-0.15em] i-{c}:{i}"></span>
