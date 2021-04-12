<script>
  import Main from './_components/Main.svelte';
  import axios from 'axios';
  import { categories, questions } from './stores';
  import Tailwindcss from './Tailwindcss.svelte';

  Promise.all([
    axios.get('http://localhost:8081/api/questions'),
    axios.get('http://localhost:8081/api/categories'),
  ]).then(([questionsResponse, categoriesResponse]) => {
    questions.set(questionsResponse.data);
    categories.set(categoriesResponse.data);
  });
</script>

<Tailwindcss />
<nav class="my-4">
  <ul class="flex border-b-2 border-blue-600">
    <div class="flex-1 mr-2 mb-4">
      <div
        class="text-center block text-blue-600 text-xl font-semibold
          hover:text-blue-800"
      >
        Vivi
      </div>
    </div>
  </ul>
</nav>
<div class="container mx-auto px-4 py-4">
  <Main />
</div>
