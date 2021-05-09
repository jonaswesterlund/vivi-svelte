<script>
  import { questions, selectedCategories } from '../stores';

  let questionsByCategory;
  $: {
    questionsByCategory = $questions.filter(question =>
      question.categories.every(category =>
        $selectedCategories.map(c => c.id).includes(category.id)
      )
    );
  }
</script>

<div>
  {#each questionsByCategory as question}
    <div class="my-2 p-2 border-black border">{question.content}</div>
  {/each}
</div>
