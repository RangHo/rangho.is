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
    <p class="my-0 mt-2 md:mt-3 lg:mt-4 xl:mt-5">{metadata.subtitle}</p>
    <ul
      class="metadata list-none mx-auto my-0 mt-1 p-0 flex flex-row justify-center text-gray-600 dark:text-gray-400"
    >
      {#if metadata.date}
        <li class="m-0 p-0">
          <span class="i i-tabler:calendar"></span>
          {new Date(metadata.date).toDateString()}
        </li>
      {/if}
      {#if metadata.category}
        <li class="m-0 p-0">
          <span class="i i-tabler:category"></span>
          {metadata.category}
        </li>
      {/if}
      {#if metadata.language}
        <li class="m-0 p-0">
          <span class="i i-tabler:language"></span>
          {metadata.language}
        </li>
      {/if}
    </ul>
  </hgroup>
  <hr class="m-2" />
  <article
    class="my-5 md:my-10 lg:my-15 xl:my-20"
    lang={metadata.language || "en"}
  >
    <AdmonitionProvider><Thought /></AdmonitionProvider>
  </article>
  <Comment
    id="comments"
    repo="RangHo/rangho.is"
    repoId="R_kgDOP2lE8w"
    category="Comments"
    categoryId="DIC_kwDOP2lE884Cv_SG"
    mapping="pathname"
    term="thinking"
    strict="0"
    reactionsEnabled="1"
    inputPosition="bottom"
    lang={metadata.language || "en"}
  />
</main>

<style>
  :global {
    figcaption {
      text-align: center;
    }

    .figure-number {
      padding-right: 0.5rem;
    }
  }

  .i {
    display: inline-block;
    vertical-align: -0.15em;
  }

  .metadata li::after {
    content: "·";

    padding: 0 0.5em;
  }

  .metadata li:last-of-type::after {
    content: "";
  }
</style>
