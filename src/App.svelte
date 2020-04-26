<script>
  import { Router, Link, Route } from "svelte-routing";
  import Main from "./components/Main.svelte";
  import axios from "axios";
  import { categories, questions } from "./stores";
  import { GET_ALL_CATEGORIES, GET_ALL_QUESTIONS } from "./queries";

  Promise.all([
    axios.get("http://localhost:3001/api/questions"),
    axios.get("http://localhost:3001/api/categories")
  ]).then(([questionsResponse, categoriesResponse]) => {
    questions.set(questionsResponse.data);
    categories.set(categoriesResponse.data);
  });
</script>

<svelte:head>
  <title>MathDQ</title>
</svelte:head>

<Router>
  <div>
    <Route path="/">
      <Main />
    </Route>
  </div>
</Router>
