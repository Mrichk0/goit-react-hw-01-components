import PropTypes from 'prop-types';

import styles from './friendListItem.module.css'

const FriendListItem = ({ isOnline, avatar, name }) => {
  return  (
    <li className={styles.item}>
      <span className={styles.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
      </span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  )
};

export default FriendListItem;

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
