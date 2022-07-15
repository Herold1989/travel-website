import React from 'react'
import './ImgCarouselStyles.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Select1 from '../../assets/select_img1.jpg'
import Select2 from '../../assets/select_img2.jpg'
import Select3 from '../../assets/select_img3.jpg'
import Select4 from '../../assets/select_img4.jpg'
import Select5 from '../../assets/select_img5.jpg'
import Maldives3 from '../../assets/maldives3.jpg'

function ImgCarousel() {
    return (
        <div className='container'>
        <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true} >
            <div>
                <img src={Select1} />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
            <img src={Select2} />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
            <img src={Select3} />
                {/* <p className="legend">Legend 3</p> */}
            </div>
            <div>
            <img src={Select4} />
                {/* <p className="legend">Legend 4</p> */}
            </div>
            <div>
            <img src={Select5} />
                {/* <p className="legend">Legend 5</p> */}
            </div>
            
        </Carousel>
        </div>
        )
}

export default ImgCarousel