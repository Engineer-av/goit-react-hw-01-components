import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import defaultImg from './defaultImg.jpg';

export const FriendsList = ({ friends }) => (
  <ul className="friendsList">
    {friends.map(friend => (
      <li key={friend.id} className={s.item}>
        <span
          className={s.status}
          style={
            friend.isOnline
              ? { backgroundColor: '#008000' }
              : { backgroundColor: '#FF0000' }
          }
        ></span>
        <img
          className={s.avatar}
          src={friend.avatar || defaultImg}
          alt={friend.name}
          width="48"
        />
        <p className={s.name}>{friend.name}</p>
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
