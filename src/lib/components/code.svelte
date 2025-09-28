<script lang="ts">
  import hljs from "highlight.js";

  interface Props {
    code: string;
    lang: string;
  }

  let { code, lang }: Props = $props();

  let renderedHTML = $derived(hljs.highlight(code, { language: lang }).value);
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<pre><code class={`language-${lang}`}>{@html renderedHTML}</code></pre>
