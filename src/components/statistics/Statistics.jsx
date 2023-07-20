import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { Notification } from 'components/notification/notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <Notification message="There is no feedback" total={total} />
      <div style={{ display: total === 0 ? 'none' : 'block' }}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total} </p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </div>
  );
};

Statistics.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
