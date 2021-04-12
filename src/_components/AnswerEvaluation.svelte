<script>
  export let answerEvaluation;
</script>

{#if answerEvaluation}
  <div>
    <p>{answerEvaluation.correctAnswer ? 'Rätt svar!' : 'Fel svar.'}</p>
    <p>{answerEvaluation.evaluation}</p>
  </div>
{/if}
