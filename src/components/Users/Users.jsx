import React from 'react';
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/user.jpg';

class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
                response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            )
        }
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(
            response => {
                console.log(response);
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= 30;i++){
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map( p => {
                    return <span className={this.props.currentPage === p && s.selectPage}
                                 onClick={(event) => { this.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div className={s.info} key={u.id}>
                        <div className={s.ava}>
                            <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto}/>

                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>UNFOLLOW</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>FOLLOW</button>
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
}

export default Users;