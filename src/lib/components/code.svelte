<!-- eslint-disable svelte/no-at-html-tags -->
<script lang="ts">
  import hljs from "highlight.js";

  interface Props {
    code: string;
    lang: string;
  }

  let { code, lang }: Props = $props();

  let renderedHTML = $derived(hljs.highlight(code, { language: lang }).value);
</script>

<!-- prettier-ignore -->
<pre class="hljs not-prose m-4 p-4 rounded-sm md:rounded-md lg:rounded-lg text-sm md:text-base lg:text-lg"><code class={`language-${lang}`}>{@html renderedHTML}</code></pre>
