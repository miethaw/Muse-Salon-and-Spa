import React from 'react'

import Footer from '../../app/footer.js'
import SalonService from '../components/salonService.js'
import SpaService from '../components/spaService.js'
import ServiceHeader from '../components/serviceHeader.js'


const ServiceContainer = () =>{
    return(
<div className=''>
    <ServiceHeader />
    <SalonService Data={SalonServiceInfo}/>
    <SpaService Data={SpaServiceInfo} />
    <Footer />
</div>
    )
}
export default ServiceContainer

const SalonServiceInfo =[
    {id:1, ImgUrl:"images/hairColor.jpg", Title:"COLOR", SalonData1: "One-Step Color / Root Touch-Up", SalonData2:"Two-Step Color / Root Touch-Up", SalonData3:"INOA Color by L'Oreal Professionnel", SalonData4:"Glaze", SalonData5:"Balayage",  SalonData6:"Express Color",  SalonData7:"Each Additional Color",price1: "$73 - 108", price2: "$83 - 128", price3: "$88 - 128",price4: " $48 - 68", price5: "$128", price6: "$68", price7: " $13"},
    {id:2, ImgUrl:"images/hairstyle.jpg", Title:"HAIR", SalonData1: "Women's Haircut w/Styling", SalonData2:"Women's Haircut w/out Styling", SalonData3:"Men's Haircut", SalonData4:"Children's Haircut's Haircut w/Styling",price1: "$58 - 111",price2: " $48 - 88", price3: " $38 - 48", price4: " $38 - 48"},
    {id:3, ImgUrl:"images/specialStyle.jpg", Title:"SPECIALTY HAIR", SalonData1: "Formal Hair Style", SalonData2:"Conditioning Treatments", price1: "$78 - 128", price2: "$38 - 53"},
    {id:4, ImgUrl:"images/texture.jpg", Title:"TEXTURE", SalonData1: "Perms / Relaxers", SalonData2:"Thermal Straightening", SalonData3:"Perfection Smoothing Treatment", price1: "Starting at $103", price2: "$153 per hour", price3: "Starting at $253"},
    {id:5, ImgUrl:"images/extension.jpg", Title:"EXTENSIONS", SalonData1: "Partial / Fusion", SalonData2:"Full / Fusion", SalonData3:"Maintenance", price1: "from $603", price2: "from $1203", price3: "$16 per strand"},
    {id:6, ImgUrl:"images/foil.jpg", Title:"FOILS", SalonData1: "Face Framing", SalonData2:"Half Head", SalonData3:"Full Head", price1: "$68 - 98", price2: "$93 - 148", price3: "$123 - 168"}
]
const SpaServiceInfo=[
    {
        id:1, ImgUrl:"images/makeup.jpg", Title:"MAKE-UP", Text:"", 
        SpaData1:"Make-up Application", SpaData2:"Bridal Make-up", SpaData3:"Faux Lashes", SpaData4:"Make-up Lesson", SpaData5:"Youth Make-up",
        price1:"$65", price2:"$75", price3:"add on $15", price4:"$125", price5:"from $50"
    },
    {
        id:2, ImgUrl:"images/tinting.jpg", Title:"TINTING", Text:"", 
        SpaData1:"Lashes", SpaData2:"Brows", 
        Detail:"30 MIN", Detail:"15 MIN",
        price1:"$35", price2:"$25"
    },
    {
        id:3, ImgUrl:"images/peel.jpg", Title:"PEELS", Text:"", 
        SpaData1:"Lunchtime Peels", SpaData2:"Derm Renewal Peel", SpaData3:"Glycol Acid Peel", SpaData4:"Lactic Acid Peel", SpaData5:"Salicylic Acid Peel", SpaData6:"Modified Jessner Peel",
        Detail1:"45 MIN / SELECT FROM THE FOLLOWING PEELS", 
        Detail2:"Deep exfoliating treatment that combines Lactic and Glycolic Acid with Argenine to promote hydration.", 
        Detail3:"Intensive peel for lines and wrinkles, photo aging, dull skin, and imperfections.", 
        Detail4:"Indicated for dry, flaky skin, with fine lines and wrinkles. Also for oily prone skin and photo aging.", 
        Detail5:"Indicated for oily prone skin.", 
        Detail6:"For oily prone skin, blemishes, photo aging,mature skin, and pigmentation.",
        price1:"$65 / $40 with facial"
    },
    
    {
         id:4, ImgUrl:"images/treatment.jpg", Title:"FACIAL TREATMENTS", Text:"INCLUDES A HAND TREATMENT", 
        SpaData1:"European Basic Facial", SpaData2:"Deep Pore Cleansing Facial", SpaData3:"Gentleman's Facial", SpaData4:"Teen Clean", SpaData5:"Pick Me Up", SpaData6:"Back Treatment", 
         Detail1:"75 MIN", Detail2:"90 MIN", Detail3:"75 MIN", Detail4:"60 MIN", Detail5:"45 MIN EXPRESS FACIAL", Detail6:"60 MIN",
        price1:"$90", price2:"$100", price3:"$95", price4:"$85", price5:"$75", price6:"$100",
    },
    {
        id:5, ImgUrl:"images/waxing.jpg", 
        Title:"WAXING", Text:"",
        SpaData1:"Brows", SpaData2:"Brow Shaping / Tweezing", SpaData3:"Lip", SpaData4:"Chin", SpaData5:"Cheeks", SpaData6:"Neck", SpaData7:"Full Face", SpaData8:"Bikini",SpaData9:"French Bikini",SpaData10:"Brazilian Bikini",SpaData11:"Arm",SpaData12:"Half Arm",SpaData13:"Underarm",SpaData14:"Full Leg",SpaData15:"Half Leg",SpaData16:"Back",SpaData17:"Chest",SpaData18:"Abdominal", 
        Detail1:"30 MIN", Detail3:"15 MIN",Detail4:"15 MIN",Detail5:"15 MIN Includes Jawline",Detail6:"15 MIN",Detail7:"45 MIN",Detail8:"30 MIN",Detail9:"45 MIN",Detail10:"60 MIN", Detail11:"30 MIN", Detail12:"15 MIN", Detail13:"30 MIN", Detail14:"75 MIN", Detail15:"45 MIN", Detail16:"45 MIN", Detail17:"60 MIN", Detail18:"15 MIN", 
        price1:"$20", price2:"$30", price3:"$14", price4:"$15", price5:"$20", price6:"$20", price7:"$65", price8:"$35", price9:"$55", price10:"$75", price11:"$50", price12:"$30", price13:"$25", price14:"from $80", price15:"$40", price16:"from $45", price17:"from $45", price18:"from $35" 
    },
    {
        id:6, ImgUrl:"images/speFacial.jpg", Title:"SPECIALTY FACIALS", Text:"INCLUDES A HAND TREATMENT",
        SpaData1:"Oxygen Facial", SpaData2:"Hydrolifting Facial", SpaData3:"Vitamin C Facial", SpaData4:"Collagen Facial", SpaData5:"Botinol Facial", SpaData6:"Algomask+", SpaData7:"Specialty Masks", SpaData8:"Eye Treatment", SpaData9:"Lip Treatment", SpaData10:"Eye / Lip Combo", SpaData11:"Foot Treatment", SpaData12:"Microdermabrasion Treatment", SpaData:"Microdermabrasion Plus Facial" ,
        Detail1:"90 MIN / Oxygenating acne treatment designed to clear skin congestion, control acne and revitalize fatigued, stressed and dull skin.", 
        Detail2:"75 MIN / INCLUDES A HAND AND FOOT TREATMENT A clinical treatment that includes four progressive steps that work in synergy to cleanse, hydrate, revitalize, and firm the skin. Perfect before a special event, wedding or public appearance.", 
        Detail3:"90 MIN / Formulated with marine and vegetable ingredients ( Vitamin C Concentrate, Algae Biomatrix Patches, and Thermal Organic Mud). This treatment is exceptional for both pre and post- sun exposure. Ideal for people who live on urban areas with high pollution levels.", 
        Detail4:"105 MIN / INCLUDES HAND AND FOOT TREATMENT Collagen 90-ll is an exclusive age defying treatment by G.M. Collin Skin Care that associates pure native collagen sheets with selected ingredients to provide intense hydration, firm the skin, and reduce the appearance of aging.", 
        Detail5:"90 MIN / INCLUDES HAND AND FOOT TREATMENT G.M. Collin’s signature age defying treatment. This innovative clinically proven procedure combines five peptides including Matrixyl®, Myoxinol®, Argireline®, and Retinol.", 
        Detail6:"ADD TO FACIAL / A hydrating clinical treatment, creating a cooling effect on the skin to revitalize, moisturize, and soothe. Reduces redness.",
        Detail7:"ADD TO FACIAL / An upgraded professional mask that will provide a boost to your skin.",
        Detail8:"15 MIN / ADD TO FACIAL",
        Detail9:"15 MIN / ADD TO FACIAL",
        Detail10:"15 MIN / ADD TO FACIAL",
        Detail12:"45 MIN",
        Detail13:"90 MIN",
        price1:"$130", price2:"$142", price3:"$146", price4:"$150", price5:"$165", price6:"$30", price7:"$30", price8:"$25", price9:"$15", price10:"$30", price11:"$30", price12:"$100", price13:"$175",
    },
   {
        id:7, ImgUrl:"images/darma.jpg", Title:"SPECIALTY", Text:"", 
        SpaData1:"Dermaplaning", Detail1:"60 MIN / A procedure that exfoliates the epidermis and removes fine hair.", price1:"$70 / $50 with facial"
    },
    
]

