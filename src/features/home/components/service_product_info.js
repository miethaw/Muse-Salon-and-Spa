import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {withMedia} from 'react-media-query-hoc'
import "mdbreact/dist/css/mdb.css";
import { MDBView} from "mdbreact";


import { fsc } from '../../../helper/fontcontrolhelper.js'


const Service_product_Info = props =>{
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
      <h2 style={{fontSize:fsc(media, 35), fontFamily:'Cabin'}}>We invite you to visit us and treat your senses to a salon and spa experience like no other.</h2>
      <Carousel className='pl-4 pt-3' responsive={responsive} itemClass="carousel-item-padding-40-px" swipeable={true} autoPlay={true} autoPlaySpeed={2500} removeArrowOnDeviceType={["tablet", "mobile"]}centerMode={false} customButtonGroup={<CustomButtonGroup />} infinite={true} >
        {Data.map((v, k) => (
          <div className='p-3'  key={k} >
          <div className=' m-0 border'style={{width:'350px',height:'550px'}}>
            <div className=''>
              <MDBView hover zoom>
                <img style={{width:'100%', height:'250px'}}
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
                //  <div className='card pb-4' style={{height:'450px'}}>
                //     <div className='' key={k}>
                //         <MDBView hover zoom>
                //     <img style={{width:'100%', height:'230px'}}
                //         src={process.env.PUBLIC_URL + `${v.ImgUrl}`}
                //         id={v.id}
                //          alt="cards"
                //     />
                //     </MDBView>
                //     </div>
                //     <div className="card-body" style={{fontFamily:'Cabin'}}>
                //         <h4>
                //             {v.Title}
                //         </h4>
                //         <p>
                //             {v.Text}
                //         </p>
                //     </div>

                // </div>
            ))}
        </Carousel>
    </div>
    
    )
}
export default withMedia(Service_product_Info)

export const CustomButtonGroup = props =>{
    const {next, previous} = props;
    return(
        <div className='custom-button-group'>
            onClick={()=> previous()} 
            onClick={()=> next()}
        </div>
    )
}

