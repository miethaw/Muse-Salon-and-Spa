import React from 'react'
import {withMedia} from 'react-media-query-hoc'
 
import {fsc} from '../../../helper/fontcontrolhelper.js'
import ContactInfo from '../components/contactInfo.js'
import ContactMap from '../components/contactMap.js'
import Footer from '../../app/footer'
import ContactHeader from '../components/contactHeader.js'
import Navbar from '../../app/navbar.js'

const ContactContainer = props =>{
    const {media} = props
    return(
<div className=''>
    {/* <Navbar /> */}
    <ContactHeader />
    <div className='container pt-4'>
        <div className=' p-4 border border-right-0 border-left-0 text-center' >
            <h4 style={{fontSize:fsc(media, 30)}}>CALL TODAY TO SCHEDULE YOUR NEXT APPOINTMENT</h4>
            <h4 style={{fontSize:fsc(media, 25)}}>678 393 2214</h4>
        </div>
        <div className='d-flex flex-wrap pt-4 pb-4'>
            <div className='flex-fill'>
                <ContactInfo />
            </div>
            <div className='col-lg-6 p-0' style={{height:'400px'}}>
                <ContactMap />
            </div>
        </div>
        <div className='p-5 border border-left-0 border-right-0 border-bottom-0'>
        <div className='text-center' style={{textAlign:'left',fontWeight:'bold'}}> 
            <span style={{fontSize:fsc(media, 35)}}>
                <a className='p-1 text-dark' href="https://www.facebook.com/" > <i className="fa fa-facebook-square" /></a>
                <a className='p-1 text-dark' href="https://www.pinterest.com/" > <i className="fa fa-pinterest" /></a>
                <a className='p-1 text-dark' href="https://www.instagram.com/" > <i className="fa fa-instagram" /></a>
                <a className='p-1 text-dark' href="https://twitter.com/" > <i className="fa fa-twitter-square" /></a>
                <a className='p-1 text-dark' href="https://www.youtube.com/" > <i className="fa fa-youtube" /></a>
            </span>
        </div>       
    </div>
    </div>
    <div className='pt-3'>
        <Footer />
    </div>
    
</div>
    )
}
export default withMedia(ContactContainer)