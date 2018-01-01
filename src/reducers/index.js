import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import IdeaReducer from "./reducer_idea";
import CommentReducer from "./reducer_comment";

const rootReducer = combineReducers({
  ideaList: IdeaReducer,
  comment: CommentReducer,
});

export default rootReducer;
