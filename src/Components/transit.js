import React from 'react';
import {tranportData} from "../utils/dummyData";
import check from "../assests/accept.png";
import clock from "../assests/clock.png"

export default function Transit(){
    return(
        <>
            <div className='transit-data'>
                {tranportData.map(ele =>(
                    <div className={ele?.completed?'event-style completed':'event-style'}>
                    <div className='event-title'>
                        <img src = {ele?.completed?check:clock}/>
                        {ele?.eventTitle}
                    </div>
                    <ul>
                        <li>
                        {ele?.loc}
                        </li>
                        <li>
                            {ele?.time}
                        </li>
                    </ul>
                    </div>
                ))}
                
            </div>
        </>
    )
}
