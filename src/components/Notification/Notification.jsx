import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
   return message && (<p className={css.notification}>{message}</p>);
}

Notification.propTypes = {
   message: PropTypes.string,
}
