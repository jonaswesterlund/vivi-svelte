<script>
  import {
    questions,
    selectedQuestion,
    selectedCategories
  } from "../stores";

  const selectNewQuestion = () => {
    const selectableQuestions = $questions.filter(
      question =>
        (!$selectedQuestion || question.id !== $selectedQuestion.id) &&
        question.categories.every(category =>
          $selectedCategories.map(c => c.id).includes(category.id)
        )
    );
    if (selectableQuestions.length === 0) {
      return;
    }
    if (selectableQuestions.length === 1) {
      return ($selectedQuestion = selectableQuestions[0]);
    }
    $selectedQuestion =
      selectableQuestions[
        Math.floor(Math.random() * selectableQuestions.length)
      ];
  };
</script>

<div class="flex justify-center m-10">
  <button
    class="button"
    on:click={selectNewQuestion}>
    Ny fråga
  </button>
</div>
