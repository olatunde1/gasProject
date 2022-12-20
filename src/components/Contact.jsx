import React from 'react'
import '../index.css';


const Contact = () => {
  return (
    <div id="contact" className="contact">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Contact</h2>
            </div>

            <div className="row mt-1" />

            <div className="col-lg-4">
                <div className="info">
                    <div className="address">
                        <i className="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p>Lagos, Nigeria</p>
                    </div>

                    <div className="email">
                        <i className="bi bi-envelope bx-burst"></i>
                        <h4>Email:</h4>
                        <p>idowuolatunde32@gmail.com</p>
                    </div>

                    <div className="phone">
                        <i className="bi bi-phone bx-tada"></i>
                        <h4>Call:</h4>
                        <p>+234 8035 331782</p>
                    </div>

                </div>

            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="https://formsubmit.co/idowuolatunde32@gmail.com" method="POST">
            <div className="row">
                <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
            </div>
            <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div> 
            </div>
            <div className="  text-center"><button type="submit" className="btn btn-primary py-3 px-4">Send Message</button></div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
