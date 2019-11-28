import React from 'react'
import {withMedia} from 'react-media-query-hoc'

import { fsc } from '../../helper/fontcontrolhelper.js'

const Location = props =>{
const {media} = props
const {Data, Title, Road, Block} = props
    return(
        <div>
            {Data.map((v,k) =>(
                <div className='' key={k} style={{fontFamily:'Cabin'}}>
                    <h5 style={{fontSize:fsc(media, 30)}}>{v.Title}</h5>
                    <h6 className='pt-3' style={{fontFamily:'Cabin'}}>{v.Road}</h6>
                    <h6 className='pt-2'>{v.Block}</h6>
                </div>
            ))}
        </div>
    )
}
export default withMedia(Location)