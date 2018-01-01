import { FETCH_ALL_COMMENTS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ALL_COMMENTS:
      console.log(`From reducer: ${action.type},  ${action.payload}`);
      return { ...state, commentList: action.payload};
    default:
      return state;
  }
}
