import React from 'react'
import {withMedia} from 'react-media-query-hoc'

import  {fsc} from '../../../helper/fontcontrolhelper.js'
import Location from '../../app/location.js'
const ContactInfo = props =>{
const {media} = props
    return(
<div >
    <h5 style={{fontSize:fsc(media, 30), fontFamily: "Cabin"}}>HOURS</h5>
    <div className='row pt-3' style={{lineHeight:'10px'}}>
        <div className='col pt-1'>
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Saturday</p>
        </div>
        <div className='col pt-1'>
            <p>9am - 6pm</p>
            <p>8am - 8pm</p>
            <p>8am - 8pm</p>
            <p>8am - 8pm</p>
            <p>8am - 6pm</p>
            <p>8am - 6pm</p>
        </div>
    </div>
    <p className='pt-2'>Closed Sunday</p>
    <div className='pt-2'>
        <Location Data={Loco}/>
    </div>
    <h5 className='pt-2' style={{fontSize:fsc(media, 30)}}>PHONE</h5>
    <p>(678) 393-2214</p>
    
</div>
    )
}
export default withMedia(ContactInfo)

const Loco=[
    {id:1,Title:"LOCATION", Road:"11705 Medlock Bridge Rd", Block:" Johns Creek, GA 30097"}
]