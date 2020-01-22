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

<style>
  .set-margin {
    margin: 20px;
  }
</style>

<div class="section has-text-centered">
    {#if $selectedQuestion}
    <div class="box is-block">
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
                <button class="button is-outlined is-fullwidth">{choice.answer}</button>
              </div>
            {/each}
          </div>
        </div>
    </div>
    {/if}

    <div class="set-margin is-block">
      <button class="button is-primary is-fullwidth" on:click={selectNewQuestion}>
        Ny fråga
      </button>
    </div>
</div>
