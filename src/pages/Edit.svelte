<script>
  import AddNewQuestion from '../components/AddNewQuestion.svelte';
  import AddNewCategory from '../components/AddNewCategory.svelte';

  let showEdit = false;
</script>

<div>
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
