/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseAnswer, nextQuestion } from '../redux/actions/actions';

function Quiz({
  isLoading,
  questions,
  currentQuestion,
  chosenAnswer,
  onChoose,
  onNext,
}) {
  let content;

  if (isLoading) {
    content = 'Loading';
  } else {
    const { question, answers } = questions[currentQuestion];
    content = (
      <div>
        <h1
          dangerouslySetInnerHTML={{
            __html: question,
          }}
        />
        {answers.map((el, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: el,
            }}
            onClick={() => onChoose(index)}
            className={index === chosenAnswer ? 'selected' : null}
          />
        ))}
        <button
          disabled={chosenAnswer === 5}
          onClick={() => onNext(currentQuestion)}
          type="button"
        >
          Next question
        </button>
      </div>
    );
  }
  return <div>{content}</div>;
}

Quiz.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentQuestion: PropTypes.number.isRequired,
  chosenAnswer: PropTypes.number.isRequired,
  onChoose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoading: state.gameReducer.isLoading,
    questions: state.quizReducer.questions,
    currentQuestion: state.quizReducer.currentQuestion,
    chosenAnswer: state.quizReducer.chosenAnswer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChoose: index => dispatch(chooseAnswer(index)),
    onNext: currentQuestion => dispatch(nextQuestion(currentQuestion)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
