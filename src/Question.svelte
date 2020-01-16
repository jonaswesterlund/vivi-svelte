<script>
  import { questions, selectedQuestion } from "./stores";
  import Latex from "./Latex.svelte";

  const selectNewQuestion = () => {
    $selectedQuestion =
      $questions[Math.floor(Math.random() * $questions.length)];
  };

  let latex = "\\\\( test \\pi \\\\)";
</script>

<div class="container has-text-centered">
  {#if $selectedQuestion}
    <div class="card">
      <div class="card-content">
        <div class="content">
          <Latex {latex} />
        </div>
        <p>{$selectedQuestion.id}</p>
        <p>{$selectedQuestion.content}</p>
        <p>{$selectedQuestion.label}</p>
      </div>
      <div class="card-footer">
        {#each $selectedQuestion.answerChoices as choice}
          <a href="javascript:void(0)" class="card-footer-item">{choice}</a>
        {/each}
      </div>
    </div>
  {/if}

  <button class="button is-primary" on:click={selectNewQuestion}>
    Random question
  </button>
</div>
