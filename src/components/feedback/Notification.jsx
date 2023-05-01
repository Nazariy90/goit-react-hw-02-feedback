import css from './feedback.module.css';
import propTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className={css.titleNul}>{message}</p>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
