import { ADDQUIZ } from '../actions/actionsTypes';

const initialState = {
  questions: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADDQUIZ:
      return {
        ...state,
        questions: action.payload,
      };

    default:
      return state;
  }
}
