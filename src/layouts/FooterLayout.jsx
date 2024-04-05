import React from 'react'
import "../styles/footer.style.css";

const FooterLayout = () => {
    return (
        <footer>
            <div className="footerContainer">
                <p>
                    © 2024 desarrollado por
                    <a href="https://rundevweb.netlify.app/" target="_blank"
                        style={{ textDecoration: 'underline', color: '#bbb', fontWeight: 'bold' }}
                    >rundev-web</a>
                </p>
            </div>
        </footer>
    )
}

export default FooterLayout