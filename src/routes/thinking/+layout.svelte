<script lang="ts">
  import type { Snippet } from "svelte";

  import Footer from "$lib/components/footer.svelte";
  import Header from "$lib/components/header.svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<Header something="thinking" />

{@render children()}

<Footer />
