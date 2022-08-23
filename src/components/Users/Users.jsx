import React from 'react';
import s from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {

        props.setUsers([{
            id: 1, photoUrl: 'https://voennoe-obozrenie.ru/uploads/posts/2020-12/1609331713_dima-2.jpg',
            followed: true, fullName: 'amir', status: 'I a boss', location: {city: 'Omsk', country: 'Russia'}
        }, {
            id: 2, photoUrl: 'https://voennoe-obozrenie.ru/uploads/posts/2020-12/1609331713_dima-2.jpg',
            followed: false, fullName: 'amir 2', status: 'I a boss 2', location: {city: 'Moscow', country: 'Russia'}
        }, {
            id: 3, photoUrl: 'https://voennoe-obozrenie.ru/uploads/posts/2020-12/1609331713_dima-2.jpg',
            followed: false, fullName: 'amir 3', status: 'I a boss 3', location: {city: 'Moscow', country: 'Russia'}
        }])
    }

    return <div>
        {
            props.users.map(u => <div className={s.info} key={u.id}>
                    <div className={s.ava}>
                        <img className={s.img} src={u.photoUrl}/>

                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button>
                            : <button onClick={() => {props.follow(u.id)}}>FOLLOW</button>
                        }

                    </div>
                    <div className={s.content}>
                        <div className={s.name}>
                            <span>{u.fullName}</span>
                            <span>{u.status}</span>
                        </div>
                        <div className={s.city}>
                            <span>{u.location.city}</span>
                            <span>{u.location.country}</span>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}

export default Users;