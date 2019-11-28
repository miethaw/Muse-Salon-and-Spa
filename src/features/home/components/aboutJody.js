import React from 'react'
import { Link } from "react-router-dom"
import * as RoutePath from '../../../config/route.Config'

import Footer from '../../app/footer.js'
import Jody1 from '../../../assets/images/Jody1.jpeg'
import Jody2 from '../../../assets/images/Jody2.jpeg'
import Jody3 from '../../../assets/images/Jody3.jpeg'
import JodySign from '../../../assets/images/Jodysign.jpeg'
import MyButton from '../../../tools/myButton.js'
import Navbar from '../../app/navbar.js'

const AboutJody = () =>{
    return(
    <div className=''>
        {/* <Navbar /> */}
        <div className='container pt-4 pb-5 text-center'>
            <div className='p-4 border border-right-0 border-left-0 text-center'>
                <h4 className=''>Jody MASON-JONES</h4>
            </div>
           <div className='pt-4 pb-4'>
                <div className='p-2 '>
                    <img className='img-fluid' src={Jody1} alt="Jody" style={{width:'1050px'}}/>
                </div>
                <div className='d-flex flex-wrap justify-content-center'>
                    <div className='col-md-6 p-2' >
                        <img className='img-fluid' src={Jody2} alt="Jody" style={{ width:'500px', height:'250px'}}/>
                    </div>
                    <div className='col-md-6 p-2'>
                        <img className='img-fluid' src={Jody3} alt="Jody2" style={{ width:'500px', height:'250px'}}/>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-row pt-4 flex-wrap border border-right-0 border-left-0' style={{textAlign:'left',fontFamily: 'Cabin'}}>
                <div className='col-lg-6 pl-3'>
                    <p>After 22 years behind the chair, Jody Mason-Jones is now officially Muse Salon and Spa's General Manager. He spent most of his career being a forever student to his craft, training all over the world to bring back the technical expertise that would create a very large and loyal following. He now spends his days in the salon working closely with the very talented team at Muse and making sure that the guests are receiving world class customer service.</p>
                    <p>Jody loves the feedback he gets from guests who liken the welcoming atmosphere at Muse to that of a big family. His top priority is to make the salon standout in a very competitive industry, while also being the benchmark for what a professional, luxury hair salon should aspire to.</p>
                </div>
                <div className='col-lg-6 pb-4'>
                    <div>
                        <h4 className='text-center' style={{fontFamily: 'Indie Flower'}}>“Our relationship with our guests means everything to us. Whether it’s a product or a service, we want you to experience the absolute best every time you visit the salon.”</h4>
                    </div>
                    <div className='pt-5 text-center'>
                        <img src={JodySign} alt="JodySign" />
                    </div>
                </div>
            </div>
            <div className='text-center pt-5'>
                <Link to={`/${RoutePath.Daniel}`}>
                    <MyButton text={"GET TO KNOW  Daniel"} style={{width:'40%'}}/>
                </Link>
            </div>
        </div>
        <Footer />
    </div>
    )
}
export default AboutJody
