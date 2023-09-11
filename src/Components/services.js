import React,{useState} from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import circle from "../Assests/circle.png";


export default function Services(){
        const images = [
            {image:"https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/03/robson-hatsukami-morgan.jpg",
    title:"General Sales Agent",
    content:"You need professional representation and support to gain traction efficiently in the northeastern US markets. You don’t have time for mediocre service. ImEx Cargo professionals customize GSA operations to your logistics and communication needs."
    ,link:"https://imexcargo.com/airline-gsa-gssa-service/",
    card1:true,
    color:"white",textColor:"black"}
    ,{image:"https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/12/shutterstock_1064062517-scaled.jpeg",
    title:"3PL/4PL SERVICE",
    content:"Tailored solutions to accomplish your supply chain goals and remain competitive."
    ,link:"https://imexcargo.com/airline-gsa-gssa-service/",
    card1:false,
    color:"#006FB2",textColor:"white"}
    ,{image:"https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/03/pexels-david-dibert-1117210.jpg",
    title:"GOVERNMENT CONTRACTOR",
    content:"Achieve supplier diversity goals with an approved government contractor for both prime and subprime contracts with multiple certifications."
    ,link:"https://imexcargo.com/airline-gsa-gssa-service/",
    card1:true,
    color:"white",textColor:"black"}
    ,{image:"https://sz8303.p3cdn1.secureserver.net/wp-content/uploads/2021/03/pexels-pixabay-3274301.jpg",
    title:"LOGISTICS PARTNER",
    content:"Plug into a worldwide logistics eco- system with a trusted partner You require custom solutions and consistently dependable service. Customers repeatedly choose ImEx Cargo time and again to ship products and materials locally, nationally and internationally to almost anywhere in the world. As an integrated logistics service provider, ImEx Cargo manages end-to-end transportation of materials."
    ,link:"https://imexcargo.com/airline-gsa-gssa-service/",
    card1:false,
    color:"white",textColor:"black"}
    ]

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    
    return(
        <>
        <div className='services'>
            <div className='service-nav'>
                <ul>
                   {images?.map(img =>(
                    <div onClick={()=>setIndex(images.indexOf(img))}>
                        <div>
                            <img src = {circle}/>
                        </div>
                    <li className={index === images.indexOf(img)?'active-li':''}>
                        {img?.title}
                    </li>
                    </div>
                   ))}
                </ul>
            </div>
            <div>
        <Carousel activeIndex={index} onSelect={handleSelect} controls = {false} indicators	= {false} interval = {"5500"}>
        {images.map(img =>(
        <Carousel.Item>
        {img?.card1 ?(<div className='service-card' style={{backgroundColor:img?.color,color:img?.textColor}}>
        <div className='service-img'>
            <img src = {img?.image}/>
        </div>
        <div className='service-data'>
            <h3>{img?.title}</h3>
            <p>{img?.content}</p>
            <a href={img?.link} style={{border:`solid 2px ${img?.textColor}`,color:img?.textColor}}> Click Here</a>
        </div>
        </div>):
        (<div className='service-card-2'style={{backgroundColor:img?.color,color:img?.textColor}}>
        <div className='service-data'>
            <h3>{img?.title}</h3>
            <p>{img?.content}</p>
            <a href={img?.link} style={{border:`solid 2px ${img?.textColor}`,color:img?.textColor}}> Click Here</a>
        </div>
        <div className='service-img'>
            <img src = {img?.image}/>
        </div>
        </div>)}
        </Carousel.Item>
        ))}
    </Carousel>
    </div>
    
        </div>
        <div className='otherServices-header'>
            Other Services
        </div>
        <div className='otherServices'>
        <div className='service-data'>
            <h3>CHARTER</h3>
            <h5 className='service-subHeader'>
            From anywhere in the world to the most remote destinations.
            </h5>
            <p>
            ImEx Cargo tailors charter solutions to your meet specific requirements. Whether you need to transport time- critical cargo, hazardous materials, perishable products or oversized freight, we provide partial and full charter service on schedule and non-scheduled flights for maximum transportation flexibility.
            </p>
        </div>
        <div className='service-data'>
            <h3>SUPPLIER DIVERSITY</h3>
            <h5 className='service-subHeader'>
            Integrated Warehouse Services.
            </h5>
            <p>
            Our integrated solutions include Warehousing, Pick and Pack, Consolidation, and Distribution Services, Cargo Screening/ General Order (G.O.)
-Conveniently located on the Heavyweight and Oversized Cargo Access Road<br></br>
-4 minutes from both Logan Air Cargo Terminal and Conley Ocean Cargo Terminal<br></br>
–Cargo Screening / G.O. Government Order<br></br>
-Packaging/ Distribution/ Trucking to Gateway<br></br>
-Pick & Pack<br></br>

We have Refrigeration Services at the Hub Available for Specialized Commodities that may have Temperature Requirements.<br></br>
            </p>
        </div>
        <div className='service-data'>
            <h3>WAREHOUSING</h3>
            <h5 className='service-subHeader'>
            Looking for a government contract partner?
            </h5>
            <p>
            Contact us at contracts@imexcargo.com to discuss Prime and Sub-Prime Contractor opportunities.
            <br></br>
    Check out our city, state, and federal certifications listed below.
<br></br>
Woman Business Enterprise (WBE)<br></br>
Disadvantaged Business Enterprise (DBE)<br></br>
Women’s Business Enterprise National Council (WBENC)<br></br>
Woman-Owned Small Business (WOSB)<br></br>
Economically Disadvantaged Women-Owned Small Business (EDWOSB)<br></br>
Airport Concession Disadvantaged Business Enterprise (ACDBE)<br></br>
Small Local Business Enterprise (SLBE)<br></br>
            </p>
        </div>
    </div>
        </>
    )
}
