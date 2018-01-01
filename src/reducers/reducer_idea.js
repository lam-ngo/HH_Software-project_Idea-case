import { CREATE_IDEA, FETCH_IDEA, FETCH_ALL_IDEAS, UPDATE_IDEA, DELETE_IDEA } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_IDEA:
      return state;
    case FETCH_IDEA:
      return { ...state, chosenIdea: action.payload[0]};
    case FETCH_ALL_IDEAS:
      return { ...state, ideaList: action.payload};
    case UPDATE_IDEA:
      return state;
    case DELETE_IDEA:
      return state;
    default:
      return state;
  }
}
