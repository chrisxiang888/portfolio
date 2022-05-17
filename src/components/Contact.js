import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from '@mui/material/Link';
import emailjs from 'emailjs-com'
import './styles/Contact.css'
import {  useRef, useState } from "react";
import { EggTwoTone } from '@mui/icons-material';


const Contact = () => {
    const formRef = useRef();
  const [done, setDone] = useState(false)



    const sendEmail=(e)=>{
        e.preventDefault();
       emailjs.sendForm('service_wo7ehut','template_p0mzjqs',formRef.current,"1cUJSGd4hquri0TUV").then(res=>{
           console.log(res);
           
       }).catch(err=>console.log(err));
       e.target.reset();
       setDone(true)
    }
  return (
    <div className='contact' id='contact'>
            <Link href='/'>
                <ArrowBackIcon className='arrow'/>
            </Link>
            <div className="container border"
            style={{marginTop:"50px",width:'50%',backgroundImage:`url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?t=st=1652208798~exp=1652209398~hmac=51c0f5abd90378179487d85752ee2abdf467e9a925184f9f10524dadb711e18f&w=360')`,
            backgroundPosition:'center',backgroundSize:"cover"}}>
                <h1 style={{marginTop:'25px'}}>Contact Form</h1>
                <p>Please keep in touch! You can see me message about the projects or jobs by Email.</p>
                <form  ref={formRef} className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
                    <label>name</label>
                    <input type="text" name='name' className="form-control"/>

                    <label>Email</label>
                    <input type="email" name='user_email' className="form-control"/>
                    <label>message</label>

                    <textarea name='message'  row='4' className="form-control" />
                    <button type="submit">submit</button>
                     {done && "Your message is sent successfully. I will contact you soon.Thank you"}


                </form>



            </div>
          
        </div>
    
  
  )
}

export default Contact
