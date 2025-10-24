<script lang="ts">
  import type { PageProps } from "./$types";

  import { MetaTags } from "svelte-meta-tags";

  import AdmonitionProvider from "$lib/components/admonition-provider.svelte";
  import Comment from "$lib/components/comment.svelte";

  let { data }: PageProps = $props();
  let { component: Thought, metadata } = $derived(data);
</script>

<MetaTags title={metadata.title} description={metadata.description} />

<main
  class="prose prose-sm md:prose-base lg:prose-lg xl:prose-xl dark:prose-invert m-auto px-4"
>
  <hgroup class="font-head">
    <h1 class="my-0">{metadata.title}</h1>
    <p class="my-2 md:my-3 lg:my-4 xl:my-5">{metadata.subtitle}</p>
  </hgroup>
  <article
    class="my-5 md:my-10 lg:my-15 xl:my-20"
    lang={metadata.language || "en"}
  >
    <AdmonitionProvider><Thought /></AdmonitionProvider>
  </article>
  <Comment
    repo="RangHo/thoughts"
    repoId="R_kgDOHtWVvw"
    category="Comments"
    categoryId="DIC_kwDOHtWVv84CT8zK"
    mapping="url"
    strict="0"
    reactionsEnabled="1"
    inputPosition="bottom"
    lang={metadata.language || "en"}
  />
</main>
