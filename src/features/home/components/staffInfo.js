import React from 'react'
import { Link } from "react-router-dom"
import * as RoutePath from '../../../config/route.Config'
import {withMedia} from 'react-media-query-hoc'

import {fsc} from '../../../helper/fontcontrolhelper'
import Jody from '../../../assets/images/Jody.jpg'
import DanielPhoto from '../../../assets/images/Daniel.jpg'
import MyButton from '../../../tools/myButton.js'


const StaffInfo = props =>{
    const {media} = props
    return(
        <div className='container pt-5'>
            <div className='d-flex flex-row flex-wrap pb-5 justify-content-around'>
                <div className='col-lg-6 pb-4 ' style={{width:'400px'}}>
                    <h2>Daniel Mason-Jones</h2>
                    <img className='img-fluid' src={DanielPhoto} alt="daniel" />
                    <h4 className='pt-3' style={{fontSize:fsc(media, 30)}}>OWNER, CREATIVE DIRECTOR</h4>
                    <p>Daniel travels the world to continue his education and mentor other beauty professionals, helping him stay ahead of trends and draw the creative inspiration that fuels his passion to provide the very best luxury experience to every client, every time they visit the salon.</p>
                    <Link to={`/${RoutePath.Daniel}`}>
                        <MyButton text={"GET TO KNOW DANIEL"} style={{width:'60%'}}/>
                    </Link>
                </div>
                <div className='col-lg-6 pb-4' style={{width:'400px'}}>
                    <h2>Jody Mason-Jones</h2>
                    <img className='img-fluid'src={Jody} alt="jody" />
                    <h4 className='pt-3' style={{fontSize:fsc(media, 30)}}>OWNER, GENERAL MANAGER</h4>
                    <p>Having traveled all over the world to perfect his technical expertise, Jody has developed a deep understanding for both the industry and the business. He nows works closely with the entire Muse team to ensure the salon delivers a world class customer experience.</p>
                    <Link to={`/${RoutePath.Jody}`}>
                        <MyButton text={"GET TO KNOW  JODY"} style={{width:'60%'}}/>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
export default withMedia(StaffInfo)
{/* <div className='d-flex flex-row flex-wrap justify-content-around'>
                <div className='col' style={{width:'350px'}}>
                    <img src={DanielPhoto} alt="daniel" style={{width:'350px'}}/>
                    <h2>OWNER, CREATIVE DIRECTOR</h2>
                    <p>Daniel travels the world to continue his education and mentor other beauty professionals, helping him stay ahead of trends and draw the creative inspiration that fuels his passion to provide the very best luxury experience to every client, every time they visit the salon.</p> */}
                    // {/* <Link to={`/${RoutePath.Jody}`}>
                    //      <MyButton text={"GET TO KNOW JODY"} style={{width:'70%'}}/>
                    // </Link> */}
                // </div>
                // <div className='col' style={{width:'350px'}}>
                //     <img src={Jody} alt="jody" style={{width:'350px'}}/>
                //     <h2>OWNER, GENERAL MANAGER</h2>
                //     <p>Having traveled all over the world to perfect his technical expertise, Jody has developed a deep understanding for both the industry and the business. He nows works closely with the entire Muse team to ensure the salon delivers a world class customer experience.</p>
                    {/* <Link to={`/${RoutePath.Daniel}`}>
                        <MyButton text={"GET TO KNOW DANIEL"} style={{width:'70%'}}/>
                    </Link> */}
            //     </div>
            // </div>