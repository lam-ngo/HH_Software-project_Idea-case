import { CREATE_IDEA, FETCH_IDEA, FETCH_ALL_IDEAS, UPDATE_IDEA, DELETE_IDEA } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    //
    // case CREATE_IDEA:
    //   return state;

    case FETCH_IDEA:
      console.log(`From reducer: ${action.type},  ${action.payload}`);
      return { ...state, chosenIdea: action.payload[0]};

    case FETCH_ALL_IDEAS:
      console.log(`From reducer: ${action.type},  ${action.payload}`);
      //return Object.assign({}, state, { ideaList: action.payload});
      return { ...state, ideaList: action.payload};

    default:
      return state;
  }
}
