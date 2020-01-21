<script>
  import { fade } from 'svelte/transition';
  import { questions, selectedQuestion, selectedCategories } from "../stores";

  const selectNewQuestion = () => {
    let question = $selectedQuestion;
    const selectableQuestions = $questions.filter(question =>
      question.categories.every(category =>
        $selectedCategories.includes(category.name)
      )
    );
    if (selectableQuestions.length === 0) {
      return;
    }
    if (selectableQuestions.length === 1) {
      return selectableQuestions[0];
    }
    while (question === $selectedQuestion) {
      question =
        selectableQuestions[
          Math.floor(Math.random() * selectableQuestions.length)
        ];
    }
    $selectedQuestion = question;
  };
</script>

<div class="section has-text-centered">
  <div class="columns is-centered">
    {#if $selectedQuestion}
      <div transition:fade>
        <div>
          <p>{$selectedQuestion.id}</p>
          <p>{$selectedQuestion.content}</p>
          {#each $selectedQuestion.categories as category}
            <span>{category.name}</span>
          {/each}
        </div>
        <div>
          {#each $selectedQuestion.answerChoices as choice}
            <a href="javascript:void(0)">{choice}</a>
          {/each}
        </div>
      </div>
    {/if}

    <button class="button is-primary" on:click={selectNewQuestion}>
      Ny fråga
    </button>
  </div>
</div>
