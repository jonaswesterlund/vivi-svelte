<script>
  import { fade } from "svelte/transition";
  import axios from "axios";
  import { selectedQuestion, answerEvaluation } from "../stores";

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

<div>
  {#if $selectedQuestion}
    <div transition:fade>
      <div>
        <p>{$selectedQuestion.uuid}</p>
        <p>{$selectedQuestion.content}</p>
        {#each $selectedQuestion.categories as category}
          <span>{category.name}</span>
        {/each}
      </div>
      <div>
        {#each $selectedQuestion.answerChoices as choice}
          <div>
            <button on:click={() => addAnswer(choice.id)}>
              {choice.answer}
            </button>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
