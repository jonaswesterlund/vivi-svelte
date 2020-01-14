<script>
  import { getClient, query } from "svelte-apollo";
  import gql from "graphql-tag";

  const GET_QUESTION = gql`
    query($id: ID!) {
      question(id: $id) {
        id
      }
    }
  `;
  const client = getClient();

  let question = query(client, {
    query: GET_QUESTION,
    variables: { id: "fee11f33-5bd2-40b7-aa68-f35ad36fa358" }
  })
  let input;
  const fetchQuestion = id => {
    console.log(id);
    question = query(client, { query: GET_QUESTION, variables: { id } });
  };
</script>

<section class="hero is-link is-fullheight">
  <div class="hero-body">
    <div class="container">
      {#await $question then result}
        <p>{result.data.question.id}</p>
      {/await}
      <input class="input" type="text" bind:value={input} />
      <button class="button is-primary" on:click={() => fetchQuestion(input)}>
        Random question
      </button>
    </div>
  </div>
</section>
