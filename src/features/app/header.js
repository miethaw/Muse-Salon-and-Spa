import React from "react"
import { withMedia } from "react-media-query-hoc"

import {fsc} from '../../helper/fontcontrolhelper.js'
import Navbar from '../app/navbar.js'

const Header = props => {
  const { bgimg, title, media, text } = props;
 

  const bgStyle = {
    paddingTop: media.mobile ? '8rem' : media.tablet ? '8rem' : '15rem',
    paddingBottom: media.mobile ? "5rem" : media.tablet ? "8rem" : "8rem",
    backgroundImage: `url(${bgimg})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxSizing: "border-box",
    textAlign: "center",
    height:"700px"
  };

  return (
    <div
      style={bgStyle}
      className="text-center text-light w-100"

    >
      
        <div className="row text-uppercase pt-5 justify-content-center w-100"> 
            <h1 className='col-md-4 p-4'style={{fontSize:fsc(media, 35),fontFamily: 'Cabin', textShadow: '2px 2px #2A2B2B',background: 'rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0.2)', width:'100%'}}>{title}
            </h1>
        </div>
    </div>
  );
};

export default withMedia(Header)
