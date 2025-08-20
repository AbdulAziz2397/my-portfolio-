import React from 'react'
import '../styles/Experience.css'

const Experience = () => {
    return (
        <section className="Experiences-sec">

            <div className="Experience-container">
                <div className="Experience-text">
                    <h3>My <span>Experiences</span></h3>
                    <p>There are many variations of passages ofLorem Ipsum <br />
                        available, but the majority havesuffered alteration in some
                        form, by injected humour,
                    </p>
                </div>
                <div className="Experience-cards">
                    <div className="Ex-card">
                        <span className='date-span'>Jan 2021 – Present</span>
                        <h3>Full-Stack Developer</h3>
                        <span>MERN Stack (MongoDB, Express.js, React, Node.js)</span>
                        <p>Developed and maintained scalable web applications for e-commerce and service-based businesses.
                            Implemented RESTful APIs, integrated secure authentication, and optimized database queries to improve performance by 40%.</p>
                    </div>
                    <div className="Ex-card">
                        <span className='date-span'>Mar 2018 – Dec 2020</span>
                        <h3>Full-Stack Developer</h3>
                        <span>PHP | Laravel | MySQL | Vue.js</span>
                        <p>Led the development of a customer management system used by over 5,000 clients.
                            Collaborated with designers to build responsive UIs, while ensuring backend stability and security.</p>
                    </div>
                    <div className="Ex-card">
                        <span className='date-span'>Jun 2015 – Feb 2018</span>
                        <h3>Full-Stack Developer</h3>
                        <span>ASP.NET | C# | SQL Server | Angular</span>
                        <p>Designed and deployed enterprise web solutions for healthcare organizations.
                            Created reusable components, automated deployment pipelines, and ensured cross-platform compatibility.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience