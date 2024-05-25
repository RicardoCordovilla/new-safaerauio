import React from 'react'
import "../styles/global.css";
import "../styles/home.style.css";
import FooterLayout from '../layouts/FooterLayout';
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div>
                <main className="indexMain">
                    <p>Escoge la experiencia que deseas vivir</p>
                    <section className="indexSection">
                        <p className="description">
                            Si quieres fiesta extrema, bailar y saltar toda la noche:
                        </p>
                        <motion.figure className="indexFigureBx"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0.7, scale: 1.5, y: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <a href="#/safaera">
                                <img
                                    src="/images/logos/safaera_logo.png"
                                    alt="safaera"
                                    className="indexImg"
                                />
                            </a>
                        </motion.figure>
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
        </motion.main>


    )
}

export default Home