import React from 'react'
import { useState } from 'react';
import logo from '../images/logo.png';
import '../index.css';



export default function Nav () {

    const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "HOME", path: 'Hero' },
      { title: "ABOUT US", path: "" },
      { title: "SERVICE LOCATOR", path: "" },
      { title: "CONTACT",path:'Contact'} 
  ]

  return (
        <>
        <header className='wrap relative'>
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
            <div className="flex justify-between">
                <a href="javascript:void(0)">
                    <img
                        src={logo} 
                        width={120} 
                        height={50}
                        alt="Float UI logo"
                    />
                </a>
                <button className="text-gray-500 outline-none md:hidden"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )
                    }
                </button>
            </div>
            
            <ul className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${state ? '' : 'hidden'}`}>
                <li className="order-2 pb-5 md:pb-0">
                    <a href="https://api.whatsapp.com/send?phone=+2348035331782&text=I will like to request for your service" className="py-3 px-6 rounded-md shadow-md text-white text-black hover:bg-indigo-500 hover:text-white focus:shadow-none block md:inline">
                        REQUEST SERVICE
                    </a>
                </li>
                <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
                    {
                        navigation.map((item, idx) => (
                            <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                                <a href={item.path}>{item.title}</a>
                            </li>
                        ))
                    }
                </div>
            </ul>
        </nav>
        </header>
            </>
        ) 

}
           