import { combineReducers, createStore } from "redux";
import { changeColorBoxReducer } from "./reducer/change-color-box/change-color-box.reducer";
import { gameXucXacReducer } from "./reducer/game-xuc-xac/reducer";
const rootReducer = combineReducers({
  countReducer: (state = 10, action) => {
    return state;
  },
  changeColorBoxReducer,
  gameXucXacReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
