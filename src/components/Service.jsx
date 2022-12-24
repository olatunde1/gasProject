import React from 'react'
import Bounce from 'react-reveal/Bounce';


export default function Service() {
  return (
    <div className='service'>
        <section className=" mt-0 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
            <Bounce top cascade>

                <div className="text-center space-y-4">
                    <h1 className="text-white font-bold text-4xl md:text-5xl pt-8">
                    We are committed to 
                         <span className="text-indigo-600"> Your success!</span>
                    </h1>
                    <p className="text-white max-w-xl mx-auto leading-relaxed">
                    we are determined to bring a new level of customer service to the retail petroleum service industry.
                    </p>
                </div>
            </Bounce>
        </section>
    </div>
  )
}
