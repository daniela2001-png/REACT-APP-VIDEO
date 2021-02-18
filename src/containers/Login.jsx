import React from 'react'
import { Link } from "react-router-dom"
import Google from "../assets/static/google-icon.png"
import Twitter from "../assets/static/twitter-icon.png"
import "../assets/styles/Login.scss";

export default function Login() {
    return (
        <>
            <section className='login'>
                <section className='login__container'>
                    <h2>Inicia sesión</h2>
                    <form className='login__container--form'>
                        <input className='myinput' type='text' placeholder='Correo' />
                        <input className='myinput' type='password' placeholder='Contraseña' />
                        <button className='mybutton'>Iniciar sesión</button>
                        <div className='login__container--remember-me'>
                            <label>
                                <input type='checkbox' id='cbox1' value='first_checkbox' />
						Recuérdame
					</label>
                            <a href='/'>Olvidé mi contraseña</a>
                        </div>
                    </form>
                    <section className='login__container--social-media'>
                        <div>
                            <img src={Google} /> Inicia sesión con Google
				</div>
                        <div>
                            <img src={Twitter} /> Inicia sesión con Twitter
				</div>
                    </section>
                    <p className='login__container--register'>
                        No tienes ninguna cuenta <Link to='/register'>Regístrate</Link>
                    </p>
                </section>
            </section>
        </>
    )
}