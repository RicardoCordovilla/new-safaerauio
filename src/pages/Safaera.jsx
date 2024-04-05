import React from 'react'
import FooterLayout from '../layouts/FooterLayout'
import ImagesTransition from '../components/reservas/form/ImagesTransition'
import RegisterForm from '../layouts/forms/RegisterForm'
import "../styles/safaera.css"

const Safaera = () => {
    return (
        <main>
            <nav className="navbar">
                <a href="/" className="navbarBtn_back" rel="noopener noreferrer nofollow">
                    <i className="bx bx-arrow-back"></i>
                </a>
            </nav>
            <ImagesTransition />

            <header>
                <figure className="figura" id="logohead">
                    <img src="/images/logos/safaera_logo.png" alt="" className="logo" />
                </figure>
            </header>

            <div className="descripcion">
                <p>Vive la mejor experiencia de entretenimiento en Quito</p>
                <p>Av. La República y Mañosca, Plaza Mayor</p>
                <p>
                    SEGUNDO PISO
                </p>
            </div>
            <RegisterForm />

            <FooterLayout />
        </main>
    )
}

export default Safaera