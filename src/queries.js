import gql from 'graphql-tag';

export const GET_ALL_QUESTIONS = gql`
  query {
    allQuestions {
      id,
      content,
      answerChoices {
        id,
        answer
      },
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

export const ADD_ANSWER = gql`
  mutation($addAnswerInput: AddAnswerInput!){
    addAnswer(addAnswerInput: $addAnswerInput) {
      id
    }
  }
`;