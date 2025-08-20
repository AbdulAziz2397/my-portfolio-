import React from 'react'
import AboutImage from '../assets/about-images/about-me.jpg'
import '../styles/About.css'

export const About = () => {
  return (
    <section id='aboutSection'>
              <div className="about-container">
                <div className="about-media">
                  <img src={AboutImage} alt="" />
                </div>
                <div className="about-text">
                  <h3>About <span>Me</span></h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, harum totam dolore labore ipsum ratione adipisci accusantium delectus minima facere porro ad?
                    <br />
                    <br />
                    Repellat architecto quisquam, inventore consequatur exercitationem aut rerum?
                  </p>
                  <button className="contact-btn">Contact Us</button>
                </div>
              </div>
    </section>
  )
}
