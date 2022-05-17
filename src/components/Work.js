import React from 'react'
import weather from './images/weather.jpg'
import pokemon1 from './images/pokemon.jpg'
import businesscard1 from './images/businesscard1.jpg'
import airbnb2 from './images/airbnb2.jpg'
import travel1 from './images/travel1.jpeg'
import randomquote from './images/randomquote.jpg'
import ourmenu from './images/ourmenu.jpg'
import shoppingcart from './images/shoppingcart.jpg'
import './styles/Work.css'
import Link from '@mui/material/Link';
const Work = () => {
  return (
    <div className='works' id='work'>
        <div className="work_section">
        <div className="cards">
                    <img src={weather} alt="" />
                    <button ><Link href="https://fantastic-mooncake-ada8aa.netlify.app/" >See demo</Link></button>
                </div>

                <div className="cards">
                    <img src={pokemon1} alt="" />
                    <button><Link href="https://stately-alpaca-859c83.netlify.app/" >See demo</Link></button>
                </div>

                <div className="cards">
                   <img src={businesscard1} alt="" />
                    <button><Link href="https://scrimba.com/scrim/cpZ4PEu4" >See demo</Link></button>
                </div>

                <div className="cards">
                   <img src={airbnb2} alt="" />
                    <button><Link href="https://scrimba.com/scrim/cZqPBLtz" >See demo</Link></button>
                </div>

                <div className="cards">
                   <img src={travel1} alt="" />
                    <button><Link href="https://scrimba.com/scrim/crRGqBh6" >See demo</Link></button>
                </div>

                <div className="cards">
                   <img src={randomquote} alt="" />
                    <button><Link href="https://chrisxiang888.github.io/bootstrap_randomquote/" >See demo</Link></button>
                </div>

                <div className="cards">
                   <img src={ourmenu} alt="" />
                    <button><Link href="https://chrisxiang888.github.io/menuetest/" >See demo</Link></button>
                </div>

                <div className="cards">
                   <img src={shoppingcart} alt="" />
                    <button><Link href="https://chrisxiang888.github.io/cart/" >See demo</Link></button>
                </div>
        </div>

      
    </div>
  )
}

export default Work
