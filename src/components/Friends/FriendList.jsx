import css from './FriendList.module.css';

export const FriendList = (props) => {
    return (<ul className={css.friendList}>
        {props.friends.map(prop => {
            var onlineColor = prop.isOnline ? "00d409" : "d40022";
            console.log(onlineColor);
            return (
                <li key={prop.id} className={css.item}>
                    <span className={css.status} style={{
                        backgroundColor: "#" + onlineColor
                    }}></span>
                    <img className={css.avatar} src={prop.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{prop.name}</p>
                </li>)
        })}
    </ul>)


}