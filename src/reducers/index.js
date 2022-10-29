import { combineReducers } from "redux";

const fetchAdviceReducer = (
  state = { advice: null, error: null, loading: false },
  action
) => {
  if (action.type === "FETCH_ADVICE_SUCCESS") {
    return { ...state, advice: action.payload, loading: false, error: null };
  } else if (action.type === "FETCH_ADVICE_FAILURE") {
    return { ...state, error: action.payload, loading: false, advice: null };
  } else if (action.type === "FETCH_ADVICE_LOADING") {
    return { ...state, loading: true, error: null, advice: null };
  } else return state;
};

export default combineReducers({ fetchAdviceReducer });
