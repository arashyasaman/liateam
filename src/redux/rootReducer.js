import { combineReducers } from "redux";
import cartReducer from "./shopping/reducer";

const rootReducer = combineReducers({
  shop: cartReducer,
});

export default rootReducer;
