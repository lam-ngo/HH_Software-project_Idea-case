import _ from "lodash";
import { CREATE_IDEA, FETCH_IDEA, FETCH_ALL_IDEAS, UPDATE_IDEA, DELETE_IDEA } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {

    case CREATE_IDEA:
      return state;

    case FETCH_IDEA:
      return { ...state, [action.payload.data._id]: action.payload.data };

    case FETCH_ALL_IDEAS:
      return _.mapKeys(action.payload.data, "_id");

    case UPDATE_IDEA:
      return state;

    case DELETE_IDEA:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}
