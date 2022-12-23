import React from 'react'
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import whatssap from '../images/WhatsApp_icon.png'
import '../index.css';


export default function Contact() {
  return (
    <div className='Contact pb-12 mt-12 pt-12'>
   <container >
   <section className="cta-sec relative max-w-screen-xl mx-auto py-4 px-4 sm:px-8">
        <div className=" w-full h-full">
        <div className="relative z-0 gap-5 items-center lg:flex">
            <Bounce left cascade>
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left md:text-center">
                    <h1 className="text-3xl text-gray-800 font-semibold md:text-4xl lg:pr-48 md:pr-0 sm:pr-2">
                    <span className="text-indigo-600">Questions?</span> Find all your <br /> answers here.
                    </h1>
                    <button className='btnContact mt-10 mb-5'>We are available 24hrs! <br /> Chat us Now</button>
                   <a href='https://api.whatsapp.com/send?phone=+2348035331782&text=I will like to request for your service'><i class='bx bxs-like bx-tada'></i><img className='invisible lg:visible' width={50} height={50} src={whatssap} alt="" /></a>  
                </div>
            </Bounce>
            <div >
                <Slide right>
                    <form action="https://formsubmit.co/idowuolatunde32@gmail.com" method="POST" >
                        <div className="row">
                            <div className="col-md-6 form-group">
                            <input type="text" name="name" className="form-control py-2 px-1" size={50} id="name" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control py-2 px-1 " name="email" size={50} id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control py-2 px-1 " name="subject" size={50} id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control py-2 px-1" name="message" rows="5" cols={50} placeholder="Message" required></textarea>
                        </div>
                        <div className="  text"><button type="submit" className="btn btn-primary py-3 px-20">Send Message</button></div>
                    </form>
                </Slide>
            </div>
        </div>
        </div>
        
    </section>
   </container>
  </div>  
  )
}


