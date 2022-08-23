import React from 'react';
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/user.jpg';

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
                response => {
                    console.log(response);
                    props.setUsers(response.data.items)
                }
            )
        }
    }

    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.users.map(u => <div className={s.info} key={u.id}>
                    <div className={s.ava}>
                        <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto }/>

                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button>
                            : <button onClick={() => {props.follow(u.id)}}>FOLLOW</button>
                        }

                    </div>
                    <div className={s.content}>
                        <div className={s.name}>
                            <span>{u.name}</span>
                            <span>{u.status}</span>
                        </div>
                        <div className={s.city}>
                            <span>{'u.location.city'}</span>
                            <span>{'u.location.country'}</span>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}

export default Users;