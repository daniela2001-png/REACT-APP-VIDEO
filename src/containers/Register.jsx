import React from 'react'
import { Link } from "react-router-dom"
import "../assets/styles/Register.scss"


export default function Register() {
    return (
        <div>
            <section className="register">
                <section className="register__container">
                    <h2>Regístrate</h2>
                    <form className="register__container--form">
                        <input className="myinput" type="text" placeholder="Nombre" />
                        <input className="myinput" type="text" placeholder="Correo" />
                        <input className="myinput" type="password" placeholder="Contraseña" />
                        <button className="mybutton">Registrarme</button>
                    </form>
                    <Link to="/login">Iniciar sesión</Link>
                </section>
            </section>
        </div>

    )
}
