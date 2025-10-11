<script lang="ts">
  const katexVersion = __DEPENDENCIES__["katex"].substring(1);
</script>

<svelte:head>
  <link
    id="katex-stylesheet"
    rel="stylesheet"
    href={`https://cdn.jsdelivr.net/npm/katex@${katexVersion}/dist/katex.min.css`}
    crossorigin="anonymous"
  />
</svelte:head>
