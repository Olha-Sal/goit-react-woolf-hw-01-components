import css from './FriendListItem.module.css';

export const FriendListItem = ({ status, avatar, name }) => (
  <li className={css.friend}>
    <span className={status ? css.active : css.status}></span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </li>
);
