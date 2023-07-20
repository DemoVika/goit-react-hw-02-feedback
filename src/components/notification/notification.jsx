import PropTypes from 'prop-types';
import css from './notification.module.css';
export const Notification = ({ message, total }) => {
  return (
    <p
      className={css.notification}
      style={{ display: total >= 1 ? 'none' : 'block' }}
    >
      {' '}
      {message}
    </p>
  );
};
Notification.protoTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
