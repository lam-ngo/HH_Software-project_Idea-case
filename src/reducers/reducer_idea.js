import _ from "lodash";
import { CREATE_IDEA, FETCH_IDEA, FETCH_ALL_IDEAS, UPDATE_IDEA, DELETE_IDEA } from "../actions";

function IdeaReducer (state = {}, action) {
  switch (action.type) {
    //
    // case CREATE_IDEA:
    //   return state;
    //
    // case FETCH_IDEA:
    //   return { ...state, [action.payload.data._id]: action.payload.data };

    case FETCH_ALL_IDEAS:
      console.log(`Original state from reducer: ${state.ideaList}`);
      console.log(`From reducer: ${action.type},  ${action.payload.length}`);
      //return Object.assign({}, state, { ideaList: action.payload });
      //return Object.assign({}, state, { ideaList: [1,2,3,4] });
      //return [1,2,3,4];
      return action.payload;
    //
    // case UPDATE_IDEA:
    //   return state;
    //
    // case DELETE_IDEA:
    //   return _.omit(state, action.payload);

    default:
      return state;
  }
}

export default IdeaReducer;
