<script>
  import { fade } from "svelte/transition";
  import { questions, selectedQuestion, selectedCategories } from "../stores";

  const selectNewQuestion = () => {
    const selectableQuestions = $questions.filter(question =>
      (!$selectedQuestion || question.id !== $selectedQuestion.id) &&
      question.categories.every(category =>
        $selectedCategories.includes(category.name)
      )
    );
    if (selectableQuestions.length === 0) {
      return;
    }
    if (selectableQuestions.length === 1) {
      return ($selectedQuestion = selectableQuestions[0]);
    }
    $selectedQuestion = selectableQuestions[Math.floor(Math.random() * selectableQuestions.length)];
  };
</script>

<div class="section has-text-centered">
  <div class="columns is-centered">
    <div class="section">
      <button class="button is-primary" on:click={selectNewQuestion}>
        Ny fråga
      </button>
    </div>
    <div class="section">
      {#if $selectedQuestion}
        <div transition:fade>
          <div>
            <p>{$selectedQuestion.id}</p>
            <p>{$selectedQuestion.content}</p>
            {#each $selectedQuestion.categories as category}
              <span>{category.name}</span>
            {/each}
          </div>
          <div class="columns">
            {#each $selectedQuestion.answerChoices as choice}
              <div class="column">
                <button class="button is-primary">{choice.answer}</button>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
