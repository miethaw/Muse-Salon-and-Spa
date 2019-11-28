import React from 'react'
import {withMedia} from 'react-media-query-hoc'

import {fsc} from '../../helper/fontcontrolhelper.js'
import * as RoutePath from '../../config/route.Config'
import KumoLogo from '../../assets/icons/kumo_Logo.png'

const Navbar = props =>{
    const {media} = props
    return(
        <div className='sticky-top shadow' style={{zIndex:5}}>
        <nav className='navbar navbar-expand-lg navbar-light' style={{backgroundColor:'#FFFFFF'}}>
            <div className='w-75  py-3'>
                <img src={KumoLogo} alt="logo" style={{width:'70px'}}/>
            </div>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse'  id="navbarSupportedContent">
                <ul className='navbar-nav' style={{fontSize:fsc(media, 23) , textShadow: '1px 1px #C5C4BF'}}>
                    <li className='nav-item'>
                        <a className='nav-link active' href={`/${RoutePath.Home}`}  >Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link active' href={`/${RoutePath.Services}`} >Services</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link active' href={`/${RoutePath.Products}`}>Products</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link active' href={`/${RoutePath.Contact}`} >Contact</a>
                    </li>
                </ul>
                {/* <form className='form-inline my-2 my-lg-0'>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                         <MyButton text={"Search"} />
                </form> */}
            </div>
        </nav>
    </div>
    )
}
export default withMedia(Navbar)