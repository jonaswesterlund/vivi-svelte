import gql from 'graphql-tag';

export const GET_ALL_QUESTIONS = gql`
  query {
    allQuestions {
      id,
      content,
      answerChoices,
      categories {
        id
        name
      }
    }
  }
`;

export const GET_QUESTION = gql`
  query($id: ID!) {
    question(id: $id) {
      id,
      content,
      answerChoices,
      categories {
        id
        name
      }
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query {
    allCategories {
      id,
      name
    }
  }
`;

export const GET_CATEGORY = gql`
  query($id: ID!) {
    category(id: $id) {
      id,
      name
    }
  }
`;