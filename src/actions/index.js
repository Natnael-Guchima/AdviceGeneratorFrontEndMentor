import axios from "axios";

const fetchAdvice = () => {
  //Accepts No Parameter

  return async (dispatch) => {
    dispatch({ type: "FETCH_ADVICE_LOADING" });
    try {
      const advice = await axios.get("https://api.adviceslip.com/advice");
      dispatch({ type: "FETCH_ADVICE_SUCCESS", payload: advice.data });
    } catch (error) {
      dispatch({ type: "FETCH_ADVICE_FAILURE", payload: error });
    }
  };
};

export default fetchAdvice;
