<script>
  import { fade } from 'svelte/transition';
  import { answerEvaluation } from '../stores';
</script>

<div class="section has-text-centered">
    {#if $answerEvaluation}
      <div class="box is-block" transition:fade>
        <div>
          <p>{$answerEvaluation.correctAnswer ? 'Rätt svar!' : 'Fel svar.'}</p>
          <p>{$answerEvaluation.evaluation}</p>
        </div>
      </div>
    {/if}
</div>