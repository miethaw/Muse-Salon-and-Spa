import React from 'react'
import { withRouter } from 'react-router-dom'

import Header from '../../app/header.js'
import Img from '../../../assets/images/salservice.jpg'

const ServiceHeader = props => {  
  return <Header bgimg={Img}  title={"salon services"}/>;
};
export default withRouter(ServiceHeader)
