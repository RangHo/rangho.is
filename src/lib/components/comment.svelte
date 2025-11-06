<script lang="ts">
  import type { ComponentProps } from "svelte";

  import Giscus from "@giscus/svelte";

  import { getColorScheme } from "$lib/color-scheme.svelte";

  let props: Omit<ComponentProps<Giscus>, "theme"> = $props();

  let scheme = getColorScheme();
</script>

<Giscus {...props} theme={scheme.isLight ? "light" : "dark"} />
