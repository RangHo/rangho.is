<script lang="ts">
  import { default as Giscus, type GiscusProps } from "@giscus/svelte";

  import { getColorScheme } from "$lib/color-scheme.svelte";

  let props: Omit<GiscusProps, "theme"> = $props();

  let scheme = getColorScheme();
</script>

<Giscus {...props} theme={scheme.isLight ? "light" : "dark"} />
