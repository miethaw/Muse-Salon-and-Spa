import React from 'react'
import { withRouter } from 'react-router-dom'

import Header from '../../app/header.js'
import Img from '../../../assets/images/salon.jpg'

const Salon = props => {  
  return <Header bgimg={Img}  title={"making muse happen"}/>;
};
export default withRouter(Salon)
