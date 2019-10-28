import React from 'react';
import './style.css'

import logo  from '../../assets/images/facebook-icon.jpg'
import profile  from '../../assets/images/profile.png'

export default function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} width='200'/>
      </div>

      <div className='profile'>
        <h5 className='meuperfil'>Meu Perfil</h5>
        <img src={profile} width='50' height='50' className='perfil_logo'/>
      </div>
    </div>
  );
}
