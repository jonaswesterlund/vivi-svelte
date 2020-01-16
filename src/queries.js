import gql from 'graphql-tag';

export const GET_ALL_QUESTIONS = gql`
  query {
    allQuestions {
      id,
      content,
      label,
      answerChoices
    }
  }
`;

export const GET_QUESTION = gql`
query($id: ID!) {
  question(id: $id) {
    id,
    content,
    label,
    answerChoices
  }
}
`;