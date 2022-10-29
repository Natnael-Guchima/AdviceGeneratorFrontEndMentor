import React from "react";
import { connect, Connect } from "react-redux";

import fetchAdvice from "../actions";
import "./Dice.css";
import diceicon from "../Images/icon-dice.svg";

const Dice = ({ fetchAdvice }) => {
  return (
    <button onClick={fetchAdvice} className="dice-btn">
      <img src={diceicon} />
    </button>
  );
};

export default connect(null, { fetchAdvice })(Dice);
