import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {withMedia} from 'react-media-query-hoc'
import {fsc} from '../../../helper/fontcontrolhelper.js'
 
import Footer from '../../app/footer.js'
import Photo1 from '../../../assets/images/photo1.jpg'
import Photo4 from '../../../assets/images/photo4.jpg'
import Photo5 from '../../../assets/images/photo5.JPG'
import Photo6 from '../../../assets/images/photo6.jpg'
import Photo7 from '../../../assets/images/photo7.jpg'

const InfoCarousel =props=>{
const {media}=props
    return(
        <div>
        <div className='container pt-3 pb-5'>
            <div className=' text-center border border-left-0 border-right-0 p-4'>
               <h2 style={{fontSize:fsc(media, 35)}}> MUSE SALON AND SPA GALLERY</h2>
           </div>
           <div className='row pt-3 justify-content-center'>
                <Carousel showIndicators={false} infiniteLoop={true} showStatus={false} width={'800px'}>
                <div>
                     <img className='img-fluid' src={Photo1} alt="salonroom"/>
                 </div>
                 <div>
                     <img className='img-fluid' src={Photo7} alt="room" />
                 </div>
                 <div>
                     <img className='img-fluid' src={Photo4} alt="spa" />
                 </div>
                 <div>
                     <img className='img-fluid'src={Photo5} alt="spa" />
                 </div>
                 <div>
                     <img className='img-fluid' src={Photo6} alt="spa" />
                 </div>
                </Carousel>
            </div>
          </div>
        <Footer />
        </div>
    )
}
export default withMedia(InfoCarousel)
           


