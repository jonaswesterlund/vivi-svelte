<script>
  import { Router, Link, Route } from "svelte-routing";
  import Main from "./Main.svelte";

  import ApolloClient from "apollo-boost";
  import { setClient, query } from "svelte-apollo";
  import { questions } from './stores'
  import { GET_ALL_QUESTIONS } from './queries';

  const client = new ApolloClient({ uri: "http://localhost:3001/graphql" });
  setClient(client);

  const loadedQuestions = query(client, { query: GET_ALL_QUESTIONS }).result().then((result) => {
    questions.set(result.data.allQuestions);
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
