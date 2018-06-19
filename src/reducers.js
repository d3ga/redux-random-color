import * as actions from "./actions";
import getRandomColor from "./randomColor";

function appReducer(state = {}, action) {
  switch (action.type) {
    case actions.RANDOM_COLOR:
      return {
        ...state,
        color: getRandomColor()
      };

    default:
      return state;
  }
}

export default appReducer;
