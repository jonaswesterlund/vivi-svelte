<script>
  import { navigate } from 'svelte-navigator';
  import { questions, selectedCategories } from '../stores';

  let questionsByCategory;
  let selectedQuestions = [];

  $: {
    questionsByCategory = $questions.filter(
      (question) =>
        selectedQuestions.includes(question.id) ||
        question.categories.every((category) =>
          $selectedCategories.map((c) => c.id).includes(category.id)
        )
    );
  }

  function createSequence() {
    navigate('sequence', { state: { selectedQuestions } });
  }
</script>

<div>
  {#each questionsByCategory as question (question.id)}
    <div class="flex my-2 p-2 border-black border">
      <div class="flex-grow">{question.content}</div>
      <input
        type="checkbox"
        bind:group={selectedQuestions}
        name="selectedQuestions"
        value={question.id}
      />
    </div>
  {/each}
</div>
<div class="flex">
  <button class="button mx-auto" on:click={createSequence}>
    Create sequence
  </button>
</div>
