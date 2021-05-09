<script>
  import { Router, Link, Route } from 'svelte-navigator';
  import Question from './pages/Question.svelte';
  import Edit from './pages/Edit.svelte';
  import AllQuestions from './pages/AllQuestions.svelte';
  import Main from './components/Main.svelte';
  import axios from 'axios';
  import { categories, questions } from './stores';
  import Tailwindcss from './Tailwindcss.svelte';

  Promise.all([
    axios.get('http://localhost:3001/api/questions'),
    axios.get('http://localhost:3001/api/categories'),
  ]).then(([questionsResponse, categoriesResponse]) => {
    questions.set(questionsResponse.data);
    categories.set(categoriesResponse.data);
  });
</script>

<Tailwindcss />
<Router>
  <nav class="my-4">
    <ul class="flex border-b-2 border-blue-600">
      <div class="flex-1 mr-2 mb-4">
        <Link to="/">
          <div
            class="text-center block text-blue-600 text-xl font-semibold
            hover:text-blue-800">
            Vivi
          </div>
        </Link>
      </div>
      <div class="flex-1 mr-2 mb-4">
        <Link to="edit">
          <div
            class="text-center block text-blue-600 text-xl font-semibold
            hover:text-blue-800">
            Edit
          </div>
        </Link>
      </div>
      <div class="flex-1 mr-2 mb-4">
        <Link to="all">
          <div
            class="text-center block text-blue-600 text-xl font-semibold
            hover:text-blue-800">
            Alla frågor
          </div>
        </Link>
      </div>
    </ul>
  </nav>
  <div class="container mx-auto px-4 py-4">
    <Route path="/">
      <Question />
    </Route>
    <Route path="edit">
      <Edit />
    </Route>
    <Route path="all">
      <AllQuestions />
    </Route>
  </div>
</Router>
