import React from 'react'
import { withRouter } from 'react-router-dom'

import Header from '../../app/header.js'
import Img from '../../../assets/images/proimage.jpg'

const ProductHeader = props => {  
  return <Header bgimg={Img}  title={"PRODUCTS"}/>;
};
export default withRouter(ProductHeader)
