<script>
  import { getClient, query } from "svelte-apollo";
  import gql from "graphql-tag";

  const GET_QUESTIONS = gql`
  query {
  allQuestions {
    id
  }
}`
const client = getClient();
let response = query(client, {query: GET_QUESTIONS});

console.log(response);
</script>