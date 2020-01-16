<script>
    import { questions, selectedQuestion } from './stores';
  
    const selectNewQuestion = () => {
      $selectedQuestion = $questions[Math.floor(Math.random() * $questions.length)];
    }
</script>
  
<div class="container">
  {#if $selectedQuestion}
    <p>{$selectedQuestion.content}</p>
  {/if}
  <button class="button is-primary" on:click={selectNewQuestion}>
    Random question
  </button>
</div>