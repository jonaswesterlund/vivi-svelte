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
          $selectedCategories.includes(category.name)
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
</script>

<div>
  <div>
    <button on:click={selectNewQuestion}>Ny fråga</button>
  </div>
</div>
