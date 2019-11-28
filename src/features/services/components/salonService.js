import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontcontrolhelper';
import styled from "@emotion/styled/macro";

const Hover = styled.div({
    opacity: 0,
    transition: "opacity 350ms ease",
});
const BigTitle = styled.h2({
    fontFamily: " Cabin",
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
    textTransform: "uppercase",
    position: "absolute",

    top: "25px",
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
const SalonService = props => {
    const { media } = props

    const { Data, Title,
        SalonData1, SalonData2,
        SalonData3, SalonData4,
        SalonData5, SalonData6,
        SalonData7, price1,
        price2, price3,
        price4, price5,
        price6, price7 } = props;

    return (
        <div className='container pt-3 pb-3'>

            <div className='d-flex flex-wrap'>
                {Data.map((v, k) => (
                    <div className='col-md-6 pt-3 pb-5' key={k}>
                        <div>
                            <Background>
                                <img className='img-fluid shadow bg-white rounded'
                                    src={process.env.PUBLIC_URL + `${v.ImgUrl}`}
                                    id={v.id}
                                    alt="styles"
                                />
                                <DisplayOver>
                                    <Hover>
                                        <BigTitle>
                                            follow us
                                </BigTitle>
                                        <CTA>
                                            <span style={{ fontSize: fsc(media, 35) }}>
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
                        <table style={{ width: '100%'}}>
                            <thead><h4 style={{fontFamily: 'Cabin',}}>{v.Title}</h4></thead>
                            <tbody style={{fontSize: fsc(media, 20)}}>
                                {v.SalonData1? <tr>
                                    <td><h5>{v.SalonData1}</h5></td>
                                    <td><h5>{v.price1}</h5></td>
                                </tr> : null}
                                {v.SalonData2? <tr>
                                    <td><h5>{v.SalonData2}</h5></td>
                                    <td><h5>{v.price2}</h5></td>
                                </tr> : null}
                                {v.SalonData3? <tr>
                                    <td><h5>{v.SalonData3}</h5></td>
                                    <td><h5>{v.price3}</h5></td>
                                </tr> : null}
                                    {v.SalonData4? <tr>
                                    <td><h5>{v.SalonData4}</h5></td>
                                    <td><h5>{v.price4}</h5></td>
                                </tr> : null}
                                {v.SalonData5? <tr>
                                    <td><h5>{v.SalonData5}</h5></td>
                                    <td><h5>{v.price5}</h5></td>
                                </tr> : null}
                                {v.SalonData6? <tr>
                                    <td><h5>{v.SalonData6}</h5></td>
                                    <td><h5>{v.price6}</h5></td>
                                </tr> : null}
                                {v.SalonData7? <tr>
                                    <td><h5>{v.SalonData7}</h5></td>
                                    <td><h5>{v.price7}</h5></td>
                                </tr> : null}
                            </tbody>
                        </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default withMedia(SalonService)