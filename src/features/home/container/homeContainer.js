import React from 'react'
import { Link } from "react-router-dom"
import * as RoutePath from '../../../config/route.Config'

import Header from '../../app/header.js'
import HomeInfo from '../components/homeinfo.js'
import Service_product_Info from '../components/service_product_info.js'
import Footer from '../../app/footer.js'
import Img from '../../../assets/images/spa.jpg'
import StaffInfo from '../components/staffInfo.js'
import Salon from '../../home/components/salon.js'
import ExpMuse from '../../home/components/expMuse.js'

const HomeContainer = () =>{
    return(
    <div className='' style={{fontFamily: "Cabin"}}>
        <Header bgimg={Img} title={"this is your muse"} />
        <div className='pt-3'>
            <HomeInfo Data={Info}/>
        </div>
        <ExpMuse />
        <Service_product_Info Data={Service_product_Info_Details} />
        <Salon />
        <StaffInfo />
        <Footer />
    
</div>
    )
}
export default HomeContainer

const Info = [
    {id:1, ImgUrl: "/images/salonRoom.jpg"},
    {id:2, ImgUrl: "/images/room.jpg"},
    {id:3, ImgUrl: "/images/spa1.jpg"},
    {id:4, ImgUrl: "/images/spa3.jpg"}
]
const Service_product_Info_Details =[
    {id:1, ImgUrl: "/images/service.jpg", Title: "SALON SERVICES", Text: "Talented, educated, and fashion-forward artists meet the unique needs of every client so you feel recharged and look runway-ready."},
    {id:2,  ImgUrl: "/images/salon2.jpeg", Title: "SPA SERVICES", Text: "Our skilled estheticians offer an array of refreshing treatments, leaving you feeling rejuvenated, restored, and relaxed."},
    {id:3,  ImgUrl: "/images/spa2.jpeg", Title: "PRODUCTS", Text: "We offer the very best in luxury beauty products for both hair and skin – all right here in the salon."},
]