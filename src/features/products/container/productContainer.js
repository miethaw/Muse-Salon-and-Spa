import React from 'react'

import Products from '../../products/components/products.js'
import Footer from '../../app/footer.js'
import ProductHeader from '../components/productHeader.js'
import Navbar from '../../app/navbar.js'

const ProdutContainer = () =>{
    return(
        <div className=''>
            {/* <Navbar /> */}
            <ProductHeader />
            <Products Data={ProductInfo}/>
            <Footer />
        </div>
    )
}
export default ProdutContainer
const ProductInfo=[
    {id:1, ImgUrl:"images/product1.jpeg", Title:"KÉRASTASE", Text:"Muse is proud to partner with Kérastase Paris. The most advanced technology in the beauty business allows instant hair transformation customized to your needs. Start your journey with a concentrated in-salon ritual treatment."},
    {id:2, ImgUrl:"images/product2.jpeg", Title:"SHU UEMURA", Text:"SHU UEMURA Art of Hair brings together the confidence in the power of nature and science with the passion and sensitivity of an artist. The perfect balance constitutes the unique artistry that is Shu Uemura."},
    {id:3, ImgUrl:"images/product3.jpeg", Title:"L'OREAL PROFESSIONNEL", Text:"L’Oreal Professionnel asserts its capacity for constant innovation and demonstrates a commitment to offering the highest quality and best performing tools to all our guests."},
    {id:4, ImgUrl:"images/product4.jpeg", Title:"G.M. COLLIN", Text:"Founded in 1957 by a French dermatologist, G.M. Collin products are developed with one goal in mind – to offer high tech skin care solutions, that are deeply rooted in the brilliance of nature."},
    {id:5, ImgUrl:"images/product5.jpeg", Title:"YOUNGBLOOD MINERAL COSMETICS", Text:"Youngblood is the premier luxury mineral cosmetics line made of natural, finely ground minerals from the earth – without any of the common irritants found in conventional makeup"},

]