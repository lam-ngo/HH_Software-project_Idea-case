import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import IdeaReducer from "./reducer_idea";
import CommentReducer from "./reducer_comment";

const rootReducer = combineReducers({
  idea: IdeaReducer,
  comment: CommentReducer,
  form: formReducer
});

export default rootReducer;
