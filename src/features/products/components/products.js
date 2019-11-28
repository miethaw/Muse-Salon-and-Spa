import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {withMedia} from 'react-media-query-hoc'
import "mdbreact/dist/css/mdb.css";
import { MDBView} from "mdbreact";

import { fsc } from '../../../helper/fontcontrolhelper.js'


const Products = props =>{
    const{Data, Title, Text}= props
    const {media} = props
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
      
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2,
          slideToSlide:2
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1,
          slideToSlide:2
        },
      };
    return(
    <div className='container pt-4 pb-5 text-center '>
      <h2 style={{fontSize:fsc(media, 33)}}>At Muse, we want each and every client to have the very best in luxury beauty products. That's why we offer the best money can buy for both hair and skin.</h2>
      <Carousel className='pt-3' responsive={responsive} itemClass="carousel-item-padding-40-px" swipeable={true} autoPlay={true} autoPlaySpeed={2500} removeArrowOnDeviceType={["tablet", "mobile"]}centerMode={false} customButtonGroup={<CustomButtonGroup />} infinite={true} >
        {Data.map((v, k) => (
          <div className='p-3'  key={k} >
          <div className=' m-0 border'style={{height:'500px'}}>
            <div className=''>
              <MDBView hover zoom>
                <img className='img-fluid' style={{width:'100%'}}
                  src={process.env.PUBLIC_URL + `${v.ImgUrl}`}
                  id={v.id}
                  alt="cards"
                />
              </MDBView>
            </div>
            <div className='pt-2' style={{fontFamily:'Cabin', height:'350px'}}>
            <h4>
              {v.Title}
            </h4>
            <p>
              {v.Text}
            </p>
            </div>
            </div>

          </div>
            ))}
        </Carousel>
    </div>
    
    )
}
export default withMedia(Products)

export const CustomButtonGroup = props =>{
    const {next, previous} = props;
    return(
        <div className='custom-button-group'>
            onClick={()=> previous()} 
            onClick={()=> next()}
        </div>
    )
}
