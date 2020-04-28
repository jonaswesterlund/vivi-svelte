<script>
  import { categories, selectedCategories } from "../stores";

  const toggleCategory = name => {
    if ($selectedCategories.includes(name)) {
      $selectedCategories = $selectedCategories.filter(
        tagName => tagName !== name
      );
    } else {
      $selectedCategories = [...$selectedCategories, name];
    }
  };
</script>

<div>
  <div>
    <div>
      {#each $categories as category}
        <span
          href="javascript:void(0)"
          on:click={() => toggleCategory(category.name)}>
          {category.name}
        </span>
      {/each}
    </div>
  </div>
</div>
