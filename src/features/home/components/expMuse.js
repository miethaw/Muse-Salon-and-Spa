import React from 'react'
import { withRouter } from 'react-router-dom'

import Header from '../../app/header.js'
import Img from '../../../assets/images/bg2.jpg'

const ExpMuse = props => {  
  return <Header bgimg={Img}  title={"experience your muse"}/>;
};
export default withRouter(ExpMuse)
