import React from 'react'
import { LinkedIn,GitHub } from '@mui/icons-material'
import './styles/Main.css'
import man666 from './images/man666.png'
import Link from '@mui/material/Link';
const Main = () => {
  return (
    <div className='main' id="home">
        <div className="main_container">

            <div className='main_content'>

                <div className="text">
                    <p>hey there</p>
                    <h1> I am Chris Xiang</h1>
                    <p>Front-end Developer and Website Designer</p>
               
                    <div className='icons'>
                    <a href="https://www.linkedin.com/in/chrisxiang/details/experience/" style={{color:'green'}}><LinkedIn className='icon' /> </a>
                    <a href="https://github.com/chrisxiang888" style={{color:'green'}}><GitHub className='icon'/></a>
                    </div>

                <div className="buttons">
                    <button><Link href="https://docs.google.com/document/d/e/2PACX-1vQEFrIgtt3Ks7HhmNJbbbmFNQw1rZKfMvx0cs9anWk6svyg2mPZzBy1QgPvD7IzN9G50G_ntaPtR1bv/pub" style={{color:"white"}} >see my resume</Link></button>
                   
                </div>
                </div>
            </div>
            <div className="main_img">
                <img src={man666} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Main
