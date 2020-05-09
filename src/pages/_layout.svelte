<script>
  import { isActive, url } from "@sveltech/routify";

  const links = [["./index", "Vivi"]];
</script>

<nav class="my-4">
  <ul class="flex border-b-2 border-blue-600">
    {#each links as [path, name]}
      <li class="flex-1 mr-2 mb-4" class:active={$isActive(path)}>
        <a
          class="text-center block text-blue-600 text-xl font-semibold
          hover:text-blue-800"
          href={$url(path)}>
          {name}
        </a>
      </li>
    {/each}
  </ul>
</nav>
<div class="container mx-auto px-4 py-4">
  <slot />
</div>
