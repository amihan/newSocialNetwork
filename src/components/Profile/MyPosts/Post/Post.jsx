import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://pp.userapi.com/jUnp-lhwY0YLqNFFWYecaMKaC4FpZYUdYRX0Cg/jK32-AYN9_Y.jpg' />
      <div className={s.content}>
        {props.message} <br />
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;