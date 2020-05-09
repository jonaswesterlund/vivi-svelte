<script>
  import {
    answerEvaluation,
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
    $answerEvaluation = null;
  };
  questions.subscribe(() => {
    $selectedQuestion = $questions[0];
  });
</script>

<div class="flex justify-center m-10">
  <button
    class="hover:bg-blue-600 hover:text-white border-blue-600 border-2
    rounded-md px-4 py-2 focus:outline-none"
    on:click={selectNewQuestion}>
    Ny fråga
  </button>
</div>
