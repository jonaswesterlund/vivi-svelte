<script>
  import { fade } from "svelte/transition";
  import axios from "axios";
  import { selectedQuestion, answerEvaluation } from "../stores";
  import { ADD_ANSWER } from "../queries";

  const client = getClient();

  const addAnswer = async id => {
    const response = await axios.post("http://localhost:3001/api/answers", {
      questionId: $selectedQuestion.id,
      answerChoiceId: id
    });
    const questionEvaluation = response.data;
    const isCorrect = questionEvaluation.correctAnswerChoice.id === id;
    $answerEvaluation = {
      correctAnswer: isCorrect,
      evaluation: isCorrect
        ? questionEvaluation.correctAnswerRationale
        : questionEvaluation.incorrectAnswerRationale
    };
  };
</script>

<style>
  #answerChoices {
    margin-top: 5px;
  }
</style>

<div class="section has-text-centered">
  {#if $selectedQuestion}
    <div class="box is-block" transition:fade>
      <div>
        <p>{$selectedQuestion.id}</p>
        <p>{$selectedQuestion.content}</p>
        {#each $selectedQuestion.categories as category}
          <span>{category.name}</span>
        {/each}
      </div>
      <div id="answerChoices" class="columns">
        {#each $selectedQuestion.answerChoices as choice}
          <div class="column">
            <button
              class="button is-outlined is-fullwidth"
              on:click={() => addAnswer(choice.id)}>
              {choice.answer}
            </button>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
