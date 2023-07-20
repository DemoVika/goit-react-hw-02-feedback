import React, { Component } from 'react';
import { FeedbackOptions } from './feedbackOption/feedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Section } from './section/Section';
import css from './app.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good }) => {
    const total = this.countTotalFeedback(this.state);
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div className={css.container}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback({ good, neutral, bad })}
            positivePercentage={this.countPositiveFeedbackPercentage({ good })}
          />
        </Section>
      </div>
    );
  }
}
