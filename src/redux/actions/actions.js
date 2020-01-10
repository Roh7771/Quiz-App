import { ADDQUIZ } from './actionsTypes';

export function addQuiz(quiz) {
  return {
    type: ADDQUIZ,
    payload: quiz,
  };
}

export function loadData() {
  return dispatch => {
    fetch('https://opentdb.com/api.php?amount=10&category=15')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        dispatch(addQuiz(data));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
