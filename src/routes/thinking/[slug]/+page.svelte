<script lang="ts">
  import type { PageProps } from "./$types";

  import AdmonitionProvider from "$lib/components/admonition-provider.svelte";
  import Comment from "$lib/components/comment.svelte";

  let { data }: PageProps = $props();
  let { component: Thought, metadata } = data;
</script>

<main
  class="mx-auto my-5 px-4
  prose prose-teal prose-sm md:prose-base lg:prose-lg xl:prose-xl dark:prose-invert"
>
  <hgroup class="pb-5 mb-10 font-head">
    <h1 class="my-0">{metadata.title}</h1>
    <p class="my-5">{metadata.subtitle}</p>
  </hgroup>
  <article class="my-20">
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

<style>
  hgroup {
    border-bottom: 5px double var(--un-prose-hr);
  }
</style>
