import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
import defaultImg from './defaultImg.jpg';

const FriedListItem = ({ name, avatar, isOnline }) => (
  <>
    <span
      className={s.status}
      style={{ backgroundColor: isOnline ? '#008000' : '#FF0000' }}
    ></span>
    <img
      className={s.avatar}
      src={avatar || defaultImg}
      alt={name}
      width="48"
    />
    <p className={s.name}>{name}</p>
  </>
);

export default FriedListItem;

FriedListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
