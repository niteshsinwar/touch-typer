import { createStore } from "redux";

// Define initial state
const initialState = {
  userInput: "",
  accuracyList: [],
  overallAccuracy: 0,
  keyPressCount: 0,
};

// Define actions
const setUserInput = (input) => ({
  type: "SET_USER_INPUT",
  payload: input,
});

const addAccuracy = (accuracy) => ({
  type: "ADD_ACCURACY",
  payload: accuracy,
});

const setOverallAccuracy = (accuracy) => ({
  type: "SET_OVERALL_ACCURACY",
  payload: accuracy,
});

const incrementKeyPressCount = () => ({
  type: "INCREMENT_KEY_PRESS_COUNT",
});

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INPUT":
      return {
        ...state,
        userInput: action.payload,
      };
    case "ADD_ACCURACY":
      return {
        ...state,
        accuracyList: [...state.accuracyList, action.payload],
      };
    case "SET_OVERALL_ACCURACY":
      return {
        ...state,
        overallAccuracy: action.payload,
      };
    case "INCREMENT_KEY_PRESS_COUNT":
      return {
        ...state,
        keyPressCount: state.keyPressCount + 1,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);

export {
  store,
  setUserInput,
  addAccuracy,
  setOverallAccuracy,
  incrementKeyPressCount,
};
