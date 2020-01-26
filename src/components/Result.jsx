/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startQuiz, loadData } from '../redux/actions/actions';

function Result({ correctAnswers, onStart, questions }) {
  return (
    <div>
      <div>{`Your results: ${correctAnswers} of 10`}</div>
      <button onClick={onStart} type="button">
        New Quiz
      </button>
      <div>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <h1
              dangerouslySetInnerHTML={{
                __html: question.question,
              }}
            />
            {question.answers.map((answer, answerIndex) => {
              let style = '';
              if (answerIndex === question.chosenAnswer) {
                style = 'chosen';
              }
              if (answer === question.correct_answer) {
                style = 'correct';
              }
              return (
                <div
                  key={answerIndex}
                  dangerouslySetInnerHTML={{
                    __html: answer,
                  }}
                  className={style}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

Result.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    correctAnswers: state.quizReducer.correctAnswers,
    questions: state.quizReducer.questions,
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
