<script>
  import { fade } from "svelte/transition";
  import { answerEvaluation } from "../stores";
</script>

{#if $answerEvaluation}
  <div transition:fade>
    <div class="border-2 p-4">
      <p>{$answerEvaluation.correctAnswer ? 'Rätt svar!' : 'Fel svar.'}</p>
      <p>{$answerEvaluation.evaluation}</p>
    </div>
  </div>
{/if}
