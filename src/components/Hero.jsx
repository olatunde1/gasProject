import React from 'react'
import maint from '../images/maint.jpg';
import '../index.css';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';


export default function Hero ()  {
    return (
        <div className='hero'>
        <section className="cta-sec relative max-w-screen-xl mx-auto py-4 px-4 sm:px-8 mt-12">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
            <div className="relative z-0 gap-5 items-center lg:flex">
            <Bounce left cascade>
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left md:text-center">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                    The leading turnkey fueling equipment <span className="text-indigo-600">solutions provider</span>
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-8">
                    Our experience and expertise have solidified us as the national leader in fuel handling systems. Our comprehensive service and product offerings allow our professional staff to handle projects from start to finish, making us the one-stop-shop for all your fuel management needs.
                    </p>
                </div>
            </Bounce>
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                <Slide right>
                    <img 
                        src={maint}
                        alt="" 
                        className="w-full" 
                    />
                </Slide>
                </div>
            </div>
        </section>
      </div>
    )
}
    
