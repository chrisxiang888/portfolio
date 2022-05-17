import React from 'react'
import './styles/Section.css'
import man2 from './images/man2.jpg'

const Section = () => {
    return (
        <div className='section' id="hero">


            <div className="section_container">


                <div className="section_img">
                    <img src={man2} alt="" />
                </div>


                <div className="section_content">
                        <h1>Who is Chris</h1>
                    <p>8 years experience in IT industry</p>
                    <p>Responsive Web Design(HTML,CSS) Certificate</p>
                    <p>Javascript Developer</p>
                    <p>React js Developer</p>
                    <p>php Developer</p>
                    <p>Version Control</p>
                </div>



            </div>


        </div>
    )
}

export default Section
