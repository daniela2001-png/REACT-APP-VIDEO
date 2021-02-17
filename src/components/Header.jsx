import React from 'react';
import LogoPlatzi from "../assets/static/movie-camera.png"
import UserIcon from '../assets/static/user-icon.png'
import '../assets/styles/components/Header.scss';


const Header = () => (
  <header className="header">
    <img className="header__img" src={LogoPlatzi} alt="Platzi Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={UserIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
