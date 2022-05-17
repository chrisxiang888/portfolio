import React,{useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './styles/Header.css'
import {Link} from 'react-scroll'
import { MenuOutlined } from '@mui/icons-material';



const Header = () => {

    const [active,setActive]=useState(false);
    const showMenu=()=>{
        setActive(!active)
    }
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
  return (
    <div className='header'>
            <div className='headerlogo'>
              <h1>chris</h1>

            </div>    

            <nav className={active?'navbar-active':'navbar'}>
                <ul className="navbarMenu">
                    <div className='closed'>
                    <CloseIcon  className="insideClosed"  onClick={showMenu}/>
                    </div>
                    
                    <li className='nav-item'>
                    <Link to="home" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home
                        </Link>
                    </li>


                    <li className='nav-item'>
                    <Link to="section" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link>
                    </li>

                    <li className='nav-item'>
                    <Link to="work" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Projects</Link>
                    </li>
                      
                    <li className='nav-item'>
                        <a href="/Contact" style={{textDecoration: 'none',color:'black'}} className="links">Contacts
                        </a>
                    </li>
                      
                </ul>
                
            </nav>  
            <div className="hamburger">
                <MenuOutlined className='menu' onClick={showMenu} />

            </div>
    </div>
  )
}

export default Header
