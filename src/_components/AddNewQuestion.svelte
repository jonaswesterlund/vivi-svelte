<script>
  import axios from "axios";
  import { categories, questions } from "../stores";
  let questionContent = "";
  let selectedCategories = [];
  let selectedCategory;
  let correctAnswerChoice;
  let correctAnswerRationale;
  let incorrectAnswerRationale;
  let answerChoices = [];

  function addCategory() {
    if (selectedCategory && !selectedCategories.includes(selectedCategory)) {
      selectedCategories = [...selectedCategories, selectedCategory];
    }
  }

  async function saveQuestion() {
    const response = await axios.post("http://localhost:8081/api/questions", {
      content: questionContent,
      categoryIds: selectedCategories.map(c => c.id),
      answerChoices,
      correctAnswerChoice,
      correctAnswerRationale,
      incorrectAnswerRationale
    });
    $questions = [...$questions, response.data];
  }
</script>

<style lang="postcss">
  .btn-disabled {
    @apply border-none text-white bg-gray-500 cursor-not-allowed;
  }
</style>

<div class="flex-1 my-8 border-2 border-gray-600 shadow-xl p-4 mx-10">
  <div class="flex justify-between align-top">
    <h1 class="text-xl font-semibold mb-2">Ny fråga</h1>
    <div>
      <button
        class="border-blue-700 rounded border-2 px-4 py-1 mr-2
        focus:outline-none hover:bg-blue-700 hover:text-white"
        on:click={saveQuestion}>
        Spara
      </button>
    </div>
  </div>
  <div>
    <label class="font-semibold text-lg">
      Fråga
      <div class="my-2">
        <textarea
          bind:value={questionContent}
          class="border border-gray-600 w-full rounded p-2" />
      </div>
    </label>
  </div>
  <div>
    <h1 class="font-semibold text-lg">Kategorier</h1>
    {#if selectedCategories.length === 0}
      <div class="my-2">Välj åtminstone en kategori!</div>
    {:else}
      <div class="flex flex-wrap w-full my-2">
        {#each selectedCategories as selectedCategory}
          <span
            class="border-blue-600 rounded-full border-2 px-4 py-1 mr-2 mb-2
            cursor-default">
            {selectedCategory.name}
            <button
              on:click={() => (selectedCategories = selectedCategories.filter(c => c !== selectedCategory))}
              class="rounded-full border border-blue-700 px-1 ml-1
              focus:outline-none">
              x
            </button>
          </span>
        {/each}
      </div>
    {/if}
  </div>
  <div>
    <div>
      <select
        bind:value={selectedCategory}
        class="appearance-none w-full border border-gray-600 p-1 rounded">
        <option value={null} selected disabled hidden>Välj kategori</option>
        {#each $categories as category}
          <option value={category}>{category.name}</option>
        {/each}
      </select>
    </div>
    <div class="my-2">
      <button
        class="border-blue-700 rounded border-2 px-4 py-1 mr-2
        focus:outline-none hover:bg-blue-700 hover:text-white"
        class:btn-disabled={!selectedCategory || selectedCategories.includes(selectedCategory)}
        on:click={addCategory}>
        Lägg till kategori
      </button>
    </div>
  </div>
  <div class="mt-6">
    <h1 class="text-lg font-semibold">Svarsalternativ</h1>
    <div class="my-2">
      <button
        class="border-blue-700 rounded border-2 px-4 py-1 mr-2
        focus:outline-none hover:bg-blue-700 hover:text-white"
        on:click={() => {
          answerChoices = [...answerChoices, { id: answerChoices.length + 1, answer: '' }];
        }}>
        Lägg till svarsalternativ
      </button>
    </div>
    <div>
      {#each answerChoices as choice, i (choice.id)}
        <div class="w-full mb-4">
          <div>
            <label class="font-semibold">
              Svar {i + 1}
              <button
                on:click={() => (answerChoices = answerChoices.filter(ac => ac.id !== choice.id))}
                class="rounded-full border border-blue-700 px-2 py-1 ml-4
                focus:outline-none">
                Ta bort
              </button>
              <div class="my-2">
                <textarea
                  bind:value={choice.answer}
                  class="border border-gray-600 w-full rounded p-2" />
              </div>
            </label>
          </div>
          <div>
            <label>
              <input type="radio" bind:group={correctAnswerChoice} value={i} />
              Rätt svar
            </label>
          </div>
        </div>
      {/each}
    </div>
    <div>
      <label class="font-semibold text-lg">
        Förklaring (rätt svar)
        <div class="my-2">
          <textarea
            bind:value={correctAnswerRationale}
            class="border border-gray-600 w-full rounded p-2" />
        </div>
      </label>
    </div>
    <div>
      <label class="font-semibold text-lg">
        Förklaring (fel svar)
        <div class="my-2">
          <textarea
            bind:value={incorrectAnswerRationale}
            class="border border-gray-600 w-full rounded p-2" />
        </div>
      </label>
    </div>
  </div>
</div>
