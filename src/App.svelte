<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./Home.svelte";
  import ApolloClient from "apollo-boost";
  import { setClient } from "svelte-apollo";

  const client = new ApolloClient({ uri: "http://localhost:3001/graphql" });
  setClient(client);

  let route = "home";
</script>

<style>
  .tabs {
    margin-top: 20px;
  }
</style>

<svelte:head>
  <title>MathDQ</title>
</svelte:head>

<Router>
<!--   <div class="tabs is-centered is-boxed">
    <ul>
      <li class:is-active={route === 'home'}>
        <Link to="/" on:click={() => (route = 'home')}>Home</Link>
      </li>
    </ul>
  </div> -->
  <div>
    <Route path="/">
      <Home />
    </Route>
  </div>
</Router>
