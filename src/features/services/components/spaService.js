import React from 'react'
import {withMedia} from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontcontrolhelper';

import styled from "@emotion/styled/macro";

const Hover = styled.div({
    opacity: 0,
    transition: "opacity 350ms ease",
});
 const BigTitle = styled.h2({
     fontFamily: "Cabin",
     transform: "translate3d(0,50px,0)",
     transition: "transform 350ms ease",
     textTransform: "uppercase",
     position: "absolute",
     
     top: "20px",
     left: "20px",
});
const CTA = styled.a({
    position: "absolute",
    bottom: "20px",
    left: "20px",
  });
const DisplayOver = styled.div({
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: 2,
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
    padding: "20px 20px 0 20px",
    boxSizing: "border-box",
});
const Background = styled.div({
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#FFF",
    position: "relative",
    // width: "500px",
    // height: "300px",
    cursor: "pointer",
    [`:hover ${DisplayOver}`]: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
    [`:hover ${BigTitle}`]: {
      transform: "translate3d(0,0,0)",
    },
    [`:hover ${Hover}`]: {
      opacity: 1,
    },
});

const SpaService = props =>{
    const {media} = props
    const {Data, Title, Text,
      SpaData1, SpaData2, 
      SpaData3, SpaData4,
      SpaData5 ,SpaData6,
      SpaData7,SpaData8,
      SpaData9,SpaData10,
      SpaData11,SpaData12,
      SpaData13,SpaData14,
      SpaData15,SpaData16,
      SpaData17,SpaData18,
      price1, price2, 
      price3, price4,
      price5,price6,
      price7,price8,
      price9,price10,
      price11,price12, 
      price13,price14,
      price15,price16,
      price17,price18,
      Detail1, Detail2, 
      Detail3, Detail4,
      Detail5 ,Detail6,
      Detail7,Detail8,
      Detail9,Detail10,
      Detail11,Detail12,
      Detail13,Detail14,
      Detail15,Detail16,
      Detail17,Detail18, }= props;
   return(
    <div className='container pt-3 pb-3'>
        <div className='border border-left-0 border-right-0 p-3 text-center'>
            <h3 style={{fontSize:fsc(media, 33), fontFamily:'Cabin'}}>COMPLIMENTARY SKIN CARE CONSULTATIONS AVAILABLE. CALL TO SCHEDULE. CONSULTATION DURATION IS 30 MINUTES.</h3>
        </div>
        <div className='d-flex flex-wrap pt-5'>
        {Data.map((v,k)=>(
            <div className='col-lg-6 pt-3' key={k}>
                <div>
                    <Background>
                        <img className='img-fluid shadow bg-white rounded'
                        src={process.env.PUBLIC_URL + `${v.ImgUrl}`}
                        id={v.id}
                        alt="styles"
                        style={{height:'300px'}}
                        />
                        <DisplayOver>
                            <Hover>
                                <BigTitle>
                                    follow us
                                </BigTitle>
                                <CTA>
                                    <span style={{fontSize:fsc(media, 35)}}>
                                        <a className='p-1 text-light' href="https://www.facebook.com/" > <i className="fa fa-facebook-square" /></a>
                                        <a className='p-1 text-light' href="https://www.pinterest.com/" > <i className="fa fa-pinterest" /></a>
                                        <a className='p-1 text-light' href="https://www.instagram.com/" > <i className="fa fa-instagram" /></a>
                                        <a className='p-1 text-light' href="https://twitter.com/" > <i className="fa fa-twitter-square" /></a>
                                        <a className='p-1 text-light' href="https://www.youtube.com/" > <i className="fa fa-youtube" /></a>
                                    </span>
                                </CTA>
                            </Hover>
                        </DisplayOver>
                    </Background>  
                </div> 
                <div className='pt-3'>
                <table className='' style={{width:'100%'}}>
                    <thead style={{fontWeight:'bold'}}><h4 style={{fontFamily: 'Cabin'}}>{v.Title}</h4></thead>
                    <tbody className='' style={{fontSize: fsc(media, 20)}}>
                        {v.SpaData1?<tr>
                             <td>
                            <h5>{v.SpaData1}</h5>
                            <p>{v.Detail1}</p>
                            </td>
                            <td><h5>{v.price1}</h5></td>
                        </tr>:null}
                        {v.SpaData2?<tr>
                            <td>
                                <h5>{v.SpaData2}</h5>
                                <p>{v.Detail2}</p>
                            </td>
                            <td><h5>{v.price2}</h5></td>
                        </tr>:null}
                        {v.SpaData3?<tr>
                            <td>
                                <h5>{v.SpaData3}</h5>
                                <p>{v.Detail3}</p>
                            </td>
                            <td><h5>{v.price3}</h5></td>
                        </tr>:null}
                        {v.SpaData4?<tr>
                            <td>
                                <h5>{v.SpaData4}</h5>
                                <p>{v.Detail4}</p>
                            </td>
                            <td><h5>{v.price4}</h5></td>
                            </tr>:null}
                        {v.SpaData5?<tr>
                            <td>
                                <h5>{v.SpaData5}</h5>
                                <p>{v.Detail5}</p>
                            </td>
                            <td><h5>{v.price5}</h5></td>
                        </tr>:null}
                         {v.SpaData6?<tr>
                            <td>
                                <h5>{v.SpaData6}</h5>
                                <p>{v.Detail6}</p>
                            </td>
                            <td><h5>{v.price6}</h5></td>
                        </tr>:null}
                        {v.SpaData7?<tr>
                            <td>
                                <h5>{v.SpaData7}</h5>
                                <p>{v.Detail7}</p>
                            </td>
                            <td><h5>{v.price7}</h5></td>
                         </tr>:null}
                        {v.SpaData8?<tr>
                            <td>
                                <h5>{v.SpaData8}</h5>
                                <p>{v.Detail8}</p>
                            </td>
                            <td><h5>{v.price8}</h5></td>
                        </tr>:null}
                        { v.SpaData9?<tr>
                            <td>
                                <h5>{v.SpaData9}</h5>
                                <p>{v.Detail9}</p>
                            </td>
                            <td><h5>{v.price9}</h5></td>
                        </tr>:null}
                        {v.SpaData10?<tr>
                            <td>
                                <h5>{v.SpaData10}</h5>
                                <p>{v.Detail10}</p>
                            </td>
                            <td><h5>{v.price10}</h5></td>
                        </tr>:null}
                        { v.SpaData11?<tr>
                            <td>
                                <h5>{v.SpaData11}</h5>
                                <p>{v.Detail11}</p>
                            </td>
                            <td><h5>{v.price11}</h5></td>
                        </tr>:null}
                        {v.SpaData12?<tr>
                            <td>
                                <h5>{v.SpaData12}</h5>
                                <p>{v.Detail12}</p>
                            </td>
                            <td><h5>{v.price12}</h5></td>
                        </tr>:null}
                        {v.SpaData13?<tr>
                            <td>
                                <h5>{v.SpaData13}</h5>
                                <p>{v.Detail13}</p>
                            </td>
                            <td><h5>{v.price13}</h5></td>
                        </tr>:null}
                        {v.SpaData14?<tr>
                            <td>
                                <h5>{v.SpaData14}</h5>
                                <p>{v.Detail14}</p>
                            </td>
                            <td><h5>{v.price14}</h5></td>
                        </tr>:null}
                        {v.SpaData15? <tr>
                            <td>
                                <h5>{v.SpaData15}</h5>
                                <p>{v.Detail15}</p>
                            </td>
                            <td><h5>{v.price15}</h5></td>
                        </tr>:null}
                        {v.SpaData16?<tr>
                            <td>
                                <h5>{v.SpaData16}</h5>
                                <p>{v.Detail16}</p>
                            </td>
                            <td><h5>{v.price16}</h5></td>
                        </tr>:null}
                        {v.SpaData17? <tr>
                            <td>
                                <h5>{v.SpaData17}</h5>
                                <p>{v.Detail17}</p>
                            </td>
                            <td><h5>{v.price17}</h5></td>
                        </tr>:null}
                        {v.SpaData18? <tr>
                            <td>
                                <h5>{v.SpaData18}</h5>
                                <p>{v.Detail18}</p>
                                </td>
                                <td><h5>{v.price18}</h5></td>
                        </tr>:null}
                    </tbody>
                </table> 
            </div>
            </div>
            ))}
        </div>
    </div>
    )
}
export default withMedia(SpaService)