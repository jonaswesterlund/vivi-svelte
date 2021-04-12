<script>
  import { categories, selectedCategories } from "../stores";

  const toggleCategory = category => {
    if ($selectedCategories.map(c => c.id).includes(category.id)) {
      $selectedCategories = $selectedCategories.filter(
        c => c.id !== category.id
      );
    } else {
      $selectedCategories = [...$selectedCategories, category];
    }
  };

</script>

<style lang="postcss">
  .active {
    @apply bg-blue-600 text-white;
  }
</style>

<div class="flex justify-center">
  {#each $categories as category}
    <button
      class="border-blue-600 rounded-full border-2 px-4 py-1 mr-2
      focus:outline-none"
      class:active={$selectedCategories.map(c => c.id).includes(category.id)}
      on:click={() => toggleCategory(category)}>
      {category.name}
    </button>
  {/each}
</div>
