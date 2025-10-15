<script lang="ts">
  import type { PageProps } from "./$types";

  import Comment from "$lib/components/comment.svelte";

  let { data }: PageProps = $props();
  let { component: Thought, metadata } = data;
</script>

<main
  class="mx-auto px-4 prose prose-teal prose-sm md:prose-base lg:prose-lg xl:prose-xl dark:prose-invert"
>
  <article class="my-20">
    <hgroup class="pb-5 mb-10 font-head text-center">
      <h1 class="my-0">{metadata.title}</h1>
      <p class="my-5">{metadata.subtitle}</p>
    </hgroup>
    <Thought />
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

  :global {
    /** Note */
    .note {
      @apply border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/30 p-4 my-4;
    }
    .note p:first-of-type {
      @apply mt-0;
    }
    .note p:last-of-type {
      @apply mb-0;
    }

    /** Tip */
    .tip {
      @apply border-l-4 border-green-500 bg-green-50 dark:bg-green-900/30 p-4 my-4;
    }
    .tip p:first-of-type {
      @apply mt-0;
    }
    .tip p:last-of-type {
      @apply mb-0;
    }

    /** Important */
    .important {
      @apply border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/30 p-4 my-4;
    }
    .important p:first-of-type {
      @apply mt-0;
    }
    .important p:last-of-type {
      @apply mb-0;
    }

    /** Warning */
    .warning {
      @apply border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30 p-4 my-4;
    }
    .warning p:first-of-type {
      @apply mt-0;
    }
    .warning p:last-of-type {
      @apply mb-0;
    }

    /** Caution */
    .caution {
      @apply border-l-4 border-red-500 bg-red-50 dark:bg-red-900/30 p-4 my-4;
    }
    .caution p:first-of-type {
      @apply mt-0;
    }
  }
</style>
