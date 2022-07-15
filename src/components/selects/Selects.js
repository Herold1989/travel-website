import React from 'react'
import './SelectsStyles.css'

import Select1 from '../../assets/select_img1.jpg'
import Select2 from '../../assets/select_img2.jpg'
import Select3 from '../../assets/select_img3.jpg'
import Select4 from '../../assets/select_img4.jpg'
import Select5 from '../../assets/select_img5.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import SelectsImg from '../SelectsImg/SelectsImg'

function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Select1} text='St. Thomas' />
                <SelectsImg bgImg={Select2} text='Guadeloupe' />
                <SelectsImg bgImg={Select3} text='Bahamas' />
                <SelectsImg bgImg={Select4} text='Dominica' />
                <SelectsImg bgImg={Select5} text='Barbados' />
                <SelectsImg bgImg={Maldives3} text='West Indies' />
            </div>

        </div>
    )
}

export default Selects
