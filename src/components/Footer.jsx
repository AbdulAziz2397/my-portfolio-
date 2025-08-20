import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <section className="footer-sec">
            <div className="footer-text">
                <h3>Contact <span>Me</span></h3>
                <p>There are many variations of passages ofLorem Ipsum
                    available, but the majority havesuffered alteration in some
                    form, by injected humour,
                </p>
            </div>
            <div className="footer-social">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-pinterest"></i>
            </div>
        </section>

    )
}

export default Footer