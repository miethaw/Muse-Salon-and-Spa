import React from 'react'
import {withMedia} from 'react-media-query-hoc'

import { fsc } from '../../helper/fontcontrolhelper.js'
import Location from '../app/location.js'

const Footer = props =>{
    const {media} = props
    let imgUrl = 'images/spaBg.jpg';
    return(
        <div className=''
        style = {{ backgroundImage: 'url(' + imgUrl + ')', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',height:'100%'
          }}>
            <div className='pt-5'>
                <div className='text-center' style={{textAlign:'left',fontWeight:'bold'}}> 
                    <span style={{fontSize:fsc(media, 35)}}>
                    <a className='p-1 text-light' href="https://www.facebook.com/" > <i className="fa fa-facebook-square" /></a>
                    <a className='p-1 text-light' href="https://www.pinterest.com/" > <i className="fa fa-pinterest" /></a>
                    <a className='p-1 text-light' href="https://www.instagram.com/" > <i className="fa fa-instagram" /></a>
                    <a className='p-1 text-light' href="https://twitter.com/" > <i className="fa fa-twitter-square" /></a>
                    <a className='p-1 text-light' href="https://www.youtube.com/" > <i className="fa fa-youtube" /></a>
                    </span>
                </div>
            </div>
            <div className='d-flex flex-row flex-wrap pt-3 text-light justify-content-center' style={{fontSize:fsc(media, 15)}}>
                <div className='col-md-4 pt-3'>
                    <h3 className='' style={{fontSize:fsc(media, 30)}}>HOURS</h3>
                    <div className='row pt-3' style={{lineHeight:'10px', fontFamily: "Cabin"}}>
                        <div className='col'>
                            <h6>Monday</h6>
                            <h6>Tuesday</h6>
                            <h6>Wednesday</h6>
                            <h6>Thursday</h6>
                            <h6>Friday</h6>
                            <h6>Saturday</h6>
                        </div>
                        <div className='col'>
                            <h6>9am - 6pm</h6>    
                            <h6>8am - 8pm</h6>
                            <h6>8am - 8pm</h6>
                            <h6>8am - 8pm</h6>
                            <h6>8am - 6pm</h6>
                            <h6>8am - 6pm</h6>
                        </div>
                    </div>
                    <h6 className='pt-2'>Closed Sunday</h6>
                </div>
                <div className='col-md-3 pt-4' style={{lineHeight:'20px'}}>
                    <Location Data={Loco}/>
                </div>
                <div className='col-md-3 pt-4'>
                    <h3 style={{fontSize:fsc(media, 30)}}>CAREERS</h3>
                    <h6 className='pt-2' style={{textAlign:'left', lineHeight:'30px'}}>If you are interested in a career with Muse Salon and Spa, we would like to get to know you. For more information on available opportunities, click here.</h6>

                </div>
            </div>
            <div className='text-light text-center p-5' style={{fontSize:fsc(media, 23)}}>
                <h6>©Copyright 2019 – Kumo Solutions. All Rights Reserved.</h6>
                <h6>Privacy Statement  /  Policies and Procedures</h6>
            </div>
        </div>
    )
}
export default withMedia(Footer)

const Loco=[
    {id:1,Title:"LOCATION", Road:"11705 Medlock Bridge Rd", Block:" Johns Creek, GA 30097"}
]