import React from "react";
import image from '../images/suppurt.jpg'; 
import img1 from '../images/gas.png'
import technicians from '../images/technicians.jpg'
import increase from '../images/increase.jpg'
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';


export default () => {

    const posts = [
        {
            title: "24 Hour Rapid Response",
            desc: "We understand that when equipment goes down you lose profitability. Our number one priority is to get your equipment serviced, installed and operational the right way in the shortest amount of time.",
            img: image,
        },
        {
            title: "First Time Fix",
            desc: "At Mabden we've invested in our inventory to allow extremely quick facilitation of repairs and replacement parts. Our technicians maintain a well-stocked inventory on hand to keep you pumping! We are focused on fixing it right, the first time, on the first trip.",
            img: img1,
        },
        {
            title: "Industry Trained Techs",
            desc: "We continuously train to ensure all of our technicians provide you with the very best in service and product knowledge. Keeping your station running at peak performance at all times.",
            img: technicians,
        },
        {
            title: "Increased Profitability",
            desc: "When your equipment is not operating at peak capacity revenues are lost. Not only do we handle your immediate challenges but we also work to identify any hidden issues and provide recommendations to prevent future downtime. We help you maximize your potential and increase your bottom line.",
            img: increase,
        },
        {
            title: "24 Hour Rapid Response",
            desc: "We understand that when equipment goes down you lose profitability. Our number one priority is to get your equipment serviced, installed and operational the right way in the shortest amount of time.",
            img: {image},
        },
        {
            title: "24 Hour Rapid Response",
            desc: "We understand that when equipment goes down you lose profitability. Our number one priority is to get your equipment serviced, installed and operational the right way in the shortest amount of time.",
            img: {image},
        }
    ]
    
    return (
        <div className="hero ">
            <section className="pt-4 mx-auto px-4 max-w-screen-xl lg:px-8">
            <div className="text-left mt-24">
            <Zoom left>
                <h1 className="text-4xl text-gray-800 font-semibold">
                Innovation that works.
                </h1>
            </Zoom>
            <Roll right>
            <p className="mt-3 text-gray-500">
                Our Commitment to You
            </p>
            </Roll>
                
            </div>
            <div className=" eachCard mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className=" card max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        {/* <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} /> */}
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{items.authorName}</span>
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
        </div>
        
    )
}
