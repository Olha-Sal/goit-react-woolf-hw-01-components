import { FriendListItem } from '../FriendList/FriendListItem';
import css from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friend_list}>
    {friends.map(({ isOnline, avatar, name, id }) => (
      <FriendListItem key={id} status={isOnline} avatar={avatar} name={name} />
    ))}
  </ul>
);
