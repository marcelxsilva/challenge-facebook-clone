import React from 'react';

import './styles.css';
import avatar from '../../assets/images/avatar.jpg'
import Comment from '../Comment';

export default function Card({ name, date, children, data }) {
  return (
    <div className='card'>
      <div className='data_user'>
        <img src={avatar} width='60' height='60' />
        <h5 className='name_user'>{name}<br /> <span>{date}</span> </h5>
      </div>
      <div className='data_publication'>
        {data}
      </div>
      <hr />
      {children}
    </div>
  );
}
