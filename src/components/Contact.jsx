import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
    return (
        <section className="contact-sec">
            <div className="contact-text">
                <h3>Contact <span>Me</span></h3>
                <p>There are many variations of passages ofLorem Ipsum
                    available, but the majority havesuffered alteration in some
                    form, by injected humour,
                </p>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <ul>
                        <li><span className='primery-span'>Address _ </span><span>House No. 618, 36G Landhi, Karachi, Pakistan</span></li>
                        <li><span className='primery-span'>Phone _ </span><span>+92 327 2705855</span></li>
                        <li><span className='primery-span'>E mail _ </span><span>abdulaziztahir2397@gmail.com</span></li>
                        <li><span className='primery-span'>Website _ </span><span>www.abc.xyz.com</span></li>
                    </ul>
                </div>
                <div className="contact-form">
                    <input type="text" name="contacterName" id="contacterName" placeholder='Name' />
                    <textarea name="contacterMsg" id="contacterMsg" placeholder='Message'></textarea>
                    <button className='contact-btn'>Contact us</button>
                </div>
            </div>
        </section>
    )
}

export default Contact