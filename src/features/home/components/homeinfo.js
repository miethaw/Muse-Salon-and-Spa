import React from 'react'
import {withMedia} from 'react-media-query-hoc'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom"
import * as RoutePath from '../../../config/route.Config'

import MyButton from '../../../tools/myButton.js'
import {fsc} from '../../../helper/fontcontrolhelper.js'

const HomeInfo = props => {
    const {Data} = props;
    const {media} = props;
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    return (
    <div className='container pt-2'>
        
        <Carousel className='text-center pt-3' responsive={responsive} swipeable={true} autoPlay={false} autoPlaySpeed={2500} removeArrowOnDeviceType={["superLargeDesktop", "desktop"]} customButtonGroup={<CustomButtonGroup />} infinite={true} >
            {Data.map((v, k) => (
                <div className='p-2' key={k}>
                    <img className='img-fluid'
                    src={process.env.PUBLIC_URL + `${v.ImgUrl}`}
                    id={v.id}
                    alt="rooms"
                    style={{height:'230px',width:'300px'}}
                    />
              </div>
            ))}
        </Carousel>
       
        <div className='d-flex flex-row flex-wrap'>
            <div className='col-lg-6 text-left p-2'>
                <h4 className='' style={{fontSize: fsc(media, 35)}}>Creative excellence and unparalleled hospitality are the driving forces behind the Muse experience.</h4>
                <Link to={`/${RoutePath.Carousel}`}>
                    <MyButton text={"View More Photos"} style={{width:'50%'}}>
                    </MyButton>
                </Link>
            </div>
            
            <div className='col-lg-6 p-3' style={{lineHeight:'1.7'}}>
                <p>Muse Salon and Spa has become one of the most talked about beauty spots in Atlanta and is among the fastest growing salons in the country.
                Our team is extremely talented and passionate. They are also among the most highly trained and educated technicians in the industry. This ensures each and every one of our clients receives world-class service – each and every time. We want your experience to be unlike any other.</p>
            </div>
        </div> 
    </div>
       
   
        )
    }
export default withMedia(HomeInfo)

export const CustomButtonGroup = props =>{
    const {next, previous} = props;
    return(
        <div className='custom-button-group'>
            onClick={()=> previous()} 
            onClick={()=> next()}
        </div>
    )
}




       
   


