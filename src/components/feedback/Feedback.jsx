import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './feedback.module.css';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = event => {
    //console.log(this); //публичные свойства идут в экземпляр класса
    const { target } = event;
    console.log(target);
    console.log(this.props);

    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((this.state.good / total) * 100);
  };

  render() {
    return (
      <div className={css.div}>
        <h1>Please leave feedback</h1>
        <div className={css.list}>
          <button className={css.item} type="button" onClick={this.handleGood}>
            Good
          </button>
          <button
            className={css.item}
            type="button"
            onClick={this.handleNeutral}
          >
            Neutral
          </button>
          <button className={css.item} type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()} </p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default Feedback;
