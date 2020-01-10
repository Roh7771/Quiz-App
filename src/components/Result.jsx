import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startQuiz, loadData } from '../redux/actions/actions';

function Result({ correctAnswers, onStart }) {
  return (
    <div>
      <div>{`Your results: ${correctAnswers} of 10`}</div>
      <button onClick={onStart} type="button">
        New Quiz
      </button>
    </div>
  );
}

Result.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    correctAnswers: state.quizReducer.correctAnswers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onStart: () => {
      dispatch(startQuiz());
      dispatch(loadData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
