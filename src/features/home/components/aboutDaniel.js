import React from 'react'
import { Link } from "react-router-dom"
import * as RoutePath from '../../../config/route.Config'

import Footer from '../../app/footer.js'
import Dan from '../../../assets/images/Daniel2.jpg'
import Dan1 from '../../../assets/images/Daniel1.jpeg'
import Dan2 from '../../../assets/images/Daniel3.jpg'
import DanSign from '../../../assets/images/dansign.jpeg'
import MyButton from '../../../tools/myButton.js'
import Navbar from '../../app/navbar.js'

const AboutDaniel = () =>{
    return(
    <div className=''>
        <div className='container pt-5  pb-5'>
            <div className='p-4 border border-right-0 border-left-0 text-center'>
                <h4 className=''>DANIEL MASON-JONES</h4>
            </div>
            <div className='d-flex flex-wrap pb-4 pt-4 justify-content-center'>
                <div className='p-3'>
                    <img className='img-fluid' src={Dan} alt="daniel" />
                </div>
                <div className=''>
                    <div className='p-3'>
                        <img className='img-fluid' src={Dan1} alt="daniel" />
                    </div>
                    <div className='p-3'>
                        <img className='img-fluid' src={Dan2} alt="danie2" />
                    </div>
                    
                </div>
            </div>
            <div className='d-flex flex-row pt-4 flex-wrap border border-right-0 border-left-0'>
                <div className='col-lg-6 pl-3' style={{fontFamily: 'Cabin'}}>
                    <p>Daniel Mason-Jones got his start with an apprenticeship in Atlanta and was inspired immediately. It wasn’t long after he started traveling the world to further his education. He has trained closely with renowned stylist Luis Llonguerras in Barcelona, Jacques Dessange in Paris, Charles Worthington in London, Franco Curletto in Rome, and many other industry greats around the world. His vast knowledge and training has earned him a huge following from all over the country including celebrity clients and allowed him numerous opportunities to work on set with television and film stars.</p>
                    <p>Daniel has a huge passion for traveling all over the country for L’Oreal Professionnel coaching and mentoring other beauty professionals on how to be successful. He is on a mission to elevate the industry and change the misconception of how rewarding a career in the beauty industry can be when coupled with passion and hard work.</p>
                    <p>“All of these opportunities give me the ability to grow as a stylist and stay ahead of upcoming trends and fashions”, comments Mason-Jones. “This ensures we can offer a unique experience like no other at Muse.”</p>
                </div>
                <div className='col-lg-6 pb-4'>
                    <div>
                        <h4 className='text-center' style={{fontFamily: 'Indie Flower'}}>“Our relationship with our guests means everything to us. Whether it’s a product or a service, we want you to experience the absolute best every time you visit the salon.”</h4>
                    </div>
                    <div className='pt-5 text-center'>
                        <img src={DanSign} alt="DanielSign" />
                    </div>
                </div>
            </div>
            <div className='text-center pt-5'>
                <Link to={`/${RoutePath.Jody}`}>
                    <MyButton text={"GET TO KNOW  JODY"} style={{width:'40%'}}/>
                </Link>
            </div>
        </div>
        <Footer />
    </div>
    )
}
export default AboutDaniel
