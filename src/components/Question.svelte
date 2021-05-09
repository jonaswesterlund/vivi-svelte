<script>
  import axios from "axios";
  import AnswerEvaluation from "./AnswerEvaluation.svelte";
  import { selectedQuestion } from "../stores";

  let firstAnswer = true;
  let answerEvaluation;

  $: {
    $selectedQuestion;
    firstAnswer = true;
    answerEvaluation = null;
  }
  
  const addAnswer = async id => {
    const response = await axios.post("http://localhost:3001/api/answers", {
      questionId: $selectedQuestion.id,
      answerChoiceId: id,
      firstAnswer
    });
    firstAnswer = false;
    const questionEvaluation = response.data;
    const isCorrect = questionEvaluation.correctAnswerChoice.id === id;
    answerEvaluation = {
      correctAnswer: isCorrect,
      evaluation: isCorrect
        ? questionEvaluation.correctAnswerRationale
        : questionEvaluation.incorrectAnswerRationale
    };
  };
</script>

{#if $selectedQuestion}
  <div
    class="border-2 border-gray-600 p-4 w-1/2 mx-auto relative shadow-xl">
    <div class="flex mt-8">
      <p class="text-xl font-semibold">{$selectedQuestion.content}</p>
    </div>

    <div class="absolute top-0 right-0 mt-2 mr-2">
      {#each $selectedQuestion.categories as category}
        <span class="mr-4 italic text-gray-500 text-sm">{category.name}</span>
      {/each}
    </div>

    <div class="flex flex-wrap justify-between mx-4 mt-12">
      {#each $selectedQuestion.answerChoices as choice}
        <div class="w-1/3 mb-4 mx-4">
          <button
            class="w-full border-2 border-blue-600 p-2 hover:bg-blue-600
            hover:text-white rounded"
            on:click={() => addAnswer(choice.id)}>
            {choice.answer}
          </button>
        </div>
      {/each}
    </div>
    <div class="flex justify-center">
      <AnswerEvaluation {answerEvaluation} />
    </div>
  </div>
{/if}
