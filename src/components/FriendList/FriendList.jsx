import FriendListItem from 'components/FriendListItem';

import PropTypes from 'prop-types';

import styles from './friendList.module.css';


const FriendList = ({ friends }) => {

    const elements = friends.map((friend) => (
        <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
        />
    ))
    return (
        <ul className={styles.friendsList}>
            {elements}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))
};

export default FriendList;