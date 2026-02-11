<script lang="ts">
  import type { PageProps } from "./$types";

  import { resolve } from "$app/paths";

  let { data }: PageProps = $props();
</script>

<main class="container m-auto">
  {#each data.entries as entry}
    <a
      class="text-inherit no-underline"
      href={resolve("/thinking/[slug]", { slug: entry.slugified })}
    >
      <div
        class="m-10 border rounded-md p-4 text-sm md:(text-base p-6) lg:(text-lg p-8) xl:(text-xl p-10)"
      >
        <h1
          class="font-head font-bold text-xl md:(mb-3 text-2xl) lg:(mb-4 text-3xl) xl:(mb-5 text-4xl)"
        >
          {entry.title}
        </h1>
        <hr class="my-3 text-gray-500/50" />
        <ul
          class="metadata my-3 flex flex-row text-gray-600 dark:text-gray-400"
        >
          {#if entry.date}
            <li>
              <span class="i i-tabler:calendar"></span>
              {new Date(entry.date).toDateString()}
            </li>
          {/if}
          {#if entry.category}
            <li><span class="i i-tabler:category"></span> {entry.category}</li>
          {/if}
          {#if entry.language}
            <li><span class="i i-tabler:language"></span> {entry.language}</li>
          {/if}
        </ul>
        <p class="font-semibold text-gray-700 dark:text-gray-300">
          {@html entry.description}
        </p>
      </div>
    </a>
  {/each}
</main>

<style>
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
