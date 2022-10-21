import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 30; i++) {
        pages.push(i);
    }
    return <div>
        {/*Отображение номеров старинцы с активной страницей*/}
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectPage}
                             onClick={(event) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div className={s.info} key={u.id}>
                    <div className={s.ava}>
                        <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto}/>

                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>FOLLOW</button>
                        }

                    </div>
                    <div className={s.content}>
                        <div className={s.name}>
                            <span>{u.name}</span>
                            <span>{u.status}</span>
                        </div>
                        <div className={s.city}>
                            <span>{'Город'}</span>
                            <span>{'Страна'}</span>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}

export default Users;