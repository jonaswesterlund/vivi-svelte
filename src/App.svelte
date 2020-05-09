<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
  import axios from "axios";
  import { categories, questions } from "./stores";
  import Tailwindcss from "./Tailwindcss.svelte";

  Promise.all([
    axios.get("http://localhost:3001/api/questions"),
    axios.get("http://localhost:3001/api/categories")
  ]).then(([questionsResponse, categoriesResponse]) => {
    questions.set(questionsResponse.data);
    categories.set(categoriesResponse.data);
  });
</script>

<Tailwindcss />
<Router {routes} />
