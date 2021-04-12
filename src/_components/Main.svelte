<script>
  import Categories from './Categories.svelte';
  import SelectNewQuestion from './SelectNewQuestion.svelte';
  import Question from './Question.svelte';
  import AddNewQuestion from './AddNewQuestion.svelte';
  import AddNewCategory from './AddNewCategory.svelte';

  let showEdit = false;
</script>

<div class="container mx-auto px-4 my-10">
  <Question />
  <SelectNewQuestion />
  <Categories />
  <button class="button" on:click={() => (showEdit = !showEdit)}>
    Toggle edit
  </button>
  {#if showEdit}
    <div class="flex justify-between">
      <AddNewQuestion />
      <AddNewCategory />
    </div>
  {/if}
</div>
