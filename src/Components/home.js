import React from 'react';
import Card from './card.js'
import Ratings from '../Assests/ratings.png'
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate()
  const next_services =()=>{
    navigate('/services');
  }

    let data=[{
        body:"Airline Cargo Partner GSA/GSSA New England, New York, New Jersey & Philadelphia"
    },

    {
        body:"Government Contractor Supplier Diversity for Local, National & Global Supply Chain Logistics"
    },
    
    {
        body:"3PL/4PL Custom Supply Chain Logistics Solution to Move Buisness Forward"
    }
]

let service_data=[{
    title:"GENERAL SALES AGENT",
    body:"You need professional representation and support to gain traction efficiently in the northeastern US markets. You don’t have time for mediocre service. ImEx Cargo professionals customize GSA operations to your logistics and communication needs."
},

{
    title:"3PL/4PL SERVICE",
    body:"Tailored solutions to accomplish your supply chain goals and remain competitive."
},

{
    title:"GOVERNMENT CONTRACTOR",
    body:"Achieve supplier diversity goals with an approved government contractor for both prime and subprime contracts with multiple certifications."
}
]
    return(
        <div>
       
        <div className='tag-line'>
        <h1><span>LOGISTICS</span> <span>THAT</span> <span>PERFORM</span> <span>UNDER</span> <span>PRESSURE</span></h1>
        </div>
        
        <div className='home-container'>
        <div className='h_card'>
        {data.map(elem=>(
            <Card
            body={elem.body}
        />
        ))}     
    </div>
    </div>
    <div className='logistics-parnter'>
        <div className='logistics-title'>
            <h2>Logistics Partner</h2>
        </div>
        <div className="logistics-main">
        <div className='logistics-body'>
        <b>Plug into a worldwide logistics eco- system with a trusted partner</b>
        <p>You require custom solutions and consistently dependable service. Customers repeatedly choose ImEx Cargo time and again to ship products and materials locally, nationally and internationally to almost anywhere in the world. As an integrated logistics service provider, ImEx Cargo manages end-to-end transportation of materials.</p>
        </div>
        </div>
        </div>
        <div className='ratings'>
        <img src={Ratings} alt='ratings'></img>
        </div>
        <div>
            <h1>Our Services</h1>
            <div className='view-services'>
                <a href='/services'><h5>View all</h5></a>
            </div>
        <div className='service-container'>
        <div className='s_card'>
        {service_data.map(elem=>(
            <Card
            title={elem.title}
            body={elem.body}
        />
        ))}     
    </div>
    </div>
        </div>
        </div>
    )
}
