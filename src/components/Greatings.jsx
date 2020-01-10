import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadData, startQuiz } from '../redux/actions/actions';

function Greatings({ onClick }) {
  return (
    <div>
      <h1>Welcome to Video Games Quiz</h1>
      <div>
        <p>This is a Video Games Quiz</p>
        <p>All question are from Trivia API</p>
        <p>Enjoy!</p>
      </div>
      <button type="button" onClick={onClick}>
        Start!
      </button>
    </div>
  );
}

Greatings.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch(startQuiz());
      dispatch(loadData());
    },
  };
}

export default connect(null, mapDispatchToProps)(Greatings);
