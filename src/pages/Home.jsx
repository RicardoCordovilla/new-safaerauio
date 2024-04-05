import React from 'react'
import "../styles/global.css";
import "../styles/home.style.css";
import FooterLayout from '../layouts/FooterLayout';

const Home = () => {
    return (
        <main>
            <div>
                <main className="indexMain">
                    <p>Escoge la experiencia que deseas vivir</p>
                    <section className="indexSection">
                        <p className="description">
                            Si quieres fiesta extrema, bailar y saltar toda la noche:
                        </p>
                        <figure className="indexFigureBx">
                            <a href="#/safaera">
                                <img
                                    src="/images/logos/safaera_logo.png"
                                    alt="safaera"
                                    className="indexImg"
                                />
                            </a>
                        </figure>
                        <p>Jueves, Viernes y Sábado de 20h00 a 04h00</p>
                    </section>

                    <section className="indexSection">
                        <p className="description">
                            Si quieres bailar, cantar y disfrutar con tu pareja, amigos y
                            compañeros de trabajo:
                        </p>
                        <figure className="indexFigureBx">
                            <a href="#/discoteca" className="">
                                <img
                                    src="/images/logos/discoteca_logo.webp"
                                    alt="discoteca"
                                    className="indexImg"
                                />
                            </a>
                        </figure>
                        <p>Miércoles, Jueves, Viernes, y Sábado de 18h00 a 04h00</p>
                    </section>

                    <p>Av. La República y Mañosca (Plaza Mayor)</p>
                </main>
                <br />
                <br />
                <br />
                <br />
            </div>
            <FooterLayout />
        </main>


    )
}

export default Home