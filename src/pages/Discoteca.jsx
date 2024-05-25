import React, { useEffect, useState } from 'react'
import FooterLayout from '../layouts/FooterLayout'
import axios from 'axios'
import { API_METHODS } from '../utils/configs'
import { motion } from 'framer-motion'

import "../styles/global.css";
import "../styles/discoteca.css";

const Discoteca = () => {

    const [wts, setWts] = useState('')
    const [wtss, setWtss] = useState('')
    const [drive1, setDrive1] = useState('')

    const getConfigs = () => {
        axios.request(
            API_METHODS.configs.getConfigs
        )
            .then((response) => {
                const data = response.data[0].data
                console.log(data)
                // const wtss = "593" + wts.substring(1, 12);
                // const drive1 = data[0]?.data?.drive1;
                // console.log(drive1);
                const { wts, drive1 } = data
                setWts(wts)
                setWtss("593" + wts.substring(1, 12))
                setDrive1(drive1)
                
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(() => {
        getConfigs()
    }, [])


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <header>
                <nav className="navbar">
                    <a
                        href="/"
                        className="navbarBtn_back"
                        rel="noopener noreferrer nofollow"
                    >
                        <i className="bx bx-arrow-back"></i>
                    </a>
                </nav>

                <figure className="figura" id="logohead">
                    <img src="/images/KARAOKE-PARTY-2024.webp" alt="" className="logo" />
                </figure>

                <section className="descripcion">
                    <p>
                        Reserva tu mesa para cualquier ocasión especial escribiéndonos
                        al WhatsApp
                    </p>
                    <a
                        href={`https://wa.me/${wtss}?text=Hola,%20quisiera%20reservar%20una%20mesa%20para%20una%20ocasión%20especial.`}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="link"
                    >
                        <p className="whatsappP">
                            <img
                                src="/images/logos/whatsapp.webp"
                                alt=""
                                className=""
                                style={{ width: '5rem', height: '5rem', marginRight: '1rem' }}
                            />
                            <span className="numberWts">
                                {wts}
                            </span>
                        </p>
                    </a>
                </section>
            </header>

            <main>
                <section>
                    <p className="linkMenu">
                        <a
                            href={drive1}
                            className="link"
                            rel="noopener noreferrer nofollow"
                            target="_blank"
                        >
                            CONOCE NUESTRO MENÚ (referencial)
                        </a>
                    </p>
                </section>

                <br /><br /><br /><br /><br />
            </main>
            <FooterLayout />
        </motion.div>

    )
}

export default Discoteca