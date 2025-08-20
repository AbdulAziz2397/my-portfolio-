import React from 'react'
import '../styles/Services.css'

const Services = () => {
    return (
        <section className="services-sec">

            <div className="service-container">
                <div className="service-text">
                    <h3>My <span>Service</span></h3>
                    <p>There are many variations of passages ofLorem Ipsum
                        available, but the majority havesuffered alteration in some
                        form, by injected humour,
                    </p>
                </div>
                <div className="service-cards">
                    <div className="card">
                        <i class="fas fa-layer-group"></i>
                        <h3>Full-Stack Development & Scalability</h3>
                        <p>We build complete web and mobile solutions tailored to your business.
                            Our full-stack expertise ensures your app runs smoothly and scales seamlessly with growing users.</p>
                    </div>
                    <div className="card">
                        <i class="fas fa-cloud"></i>
                        <h3>Cloud Integration & DevOps</h3>
                        <p>We deploy your systems on modern cloud platforms like AWS, Google Cloud, and Azure.
                            With CI/CD pipelines, your app stays updated, fast, and highly reliable.</p>
                    </div>
                    <div className="card">
                        <i class="fas fa-shield-alt"></i>
                        <h3>Security & Advanced Features</h3>
                        <p>We implement strong security with encryption, authentication, and firewalls.
                            Advanced technologies like AI/ML, IoT, and Blockchain make your system smarter and more powerful.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services