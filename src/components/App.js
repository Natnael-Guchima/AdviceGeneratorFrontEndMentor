import React from "react";
import { useEffect } from "react";

import { Circles } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Dice from "./Dice";
import { connect } from "react-redux";
import fetchAdvice from "../actions";
import "./App.css";

const App = ({ val: { advice, error, loading }, fetchAdvice }) => {
  useEffect(() => {
    fetchAdvice();
  }, []);

  const renderLoading = () => {
    return (
      <Circles
        height="80"
        width="80"
        color="#1EFF8E"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  };

  const renderAdvice = () => {
    return (
      <div>
        <p className="advice-number">{`advice #${advice.slip.id}`}</p>
        <p className="advice">{`"${advice.slip.advice}"`} </p>
      </div>
    );
  };

  const renderError = () => {
    // console.log(error.message);
    return <div className="error-msg">{`${error.message}!!`}</div>;
  };

  const renderContent = () => {
    if (error) {
      return renderError();
    }
    if (advice) {
      return renderAdvice();
    }
    if (loading) {
      return renderLoading();
    }
  };
  return (
    <div className="app-container">
      <div className="app">
        {renderContent()}
        <Dice />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { val: state.fetchAdviceReducer };
};

export default connect(mapStateToProps, { fetchAdvice })(App);
