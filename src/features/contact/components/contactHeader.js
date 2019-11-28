import React from 'react'
import { withRouter } from 'react-router-dom'

import Header from '../../app/header.js'
import Img from '../../../assets/images/conh.jpg'

const ContactHeader = props => {  
  return <Header bgimg={Img}  title={"contact"}/>;
};
export default withRouter(ContactHeader)
