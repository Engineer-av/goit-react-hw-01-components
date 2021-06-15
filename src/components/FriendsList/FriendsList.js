import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendsList.module.css';

export const FriendsList = ({ friends }) => (
  <ul className="friendsList">
    {friends.map(friend => (
      <li key={friend.id} className={s.item}>
        <FriendListItem
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ),
};
