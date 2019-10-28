import React from 'react';
import './styles.css';
import avatar from '../../assets/images/avatar_2.png'
export default function Comment({ comment, user_comment }) {
  return (
    <div className='comment_div'>
      <div className='data_user'>
        <img src={avatar} width='50' height='50' />
        <div className='comment'>
          <span className='name_user_comment'>{user_comment}</span> <br />
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
}
