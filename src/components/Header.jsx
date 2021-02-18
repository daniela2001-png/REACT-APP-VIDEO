import React from 'react';
import { Link } from "react-router-dom";
import LogoPlatzi from "../assets/static/music.png"
import UserIcon from '../assets/static/user-icon.png'
import '../assets/styles/components/Header.scss';


const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src={LogoPlatzi} style={{ width: "100px" }} alt="Platzi Video" />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={UserIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link href="/">Cuenta</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
