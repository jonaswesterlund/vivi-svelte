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

<div class="section has-text-centered">
  <div class="columns is-centered">
    <div class="tags are-medium">
      {#each $categories as category}
        <span
          href="javascript:void(0)"
          class:tag={true}
          class:is-rounded={true}
          class:button={true}
          class={$selectedCategories.includes(category.name) ? 'is-primary' : 'is-link is-light'}
          on:click={() => toggleCategory(category.name)}>
          {category.name}
        </span>
      {/each}
    </div>
  </div>
</div>
