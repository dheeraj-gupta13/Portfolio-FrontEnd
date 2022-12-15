import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'
import {themeContext} from '../App'
import Theme from './Theme'



function NavBar({data}) {

    const { theme } = useContext(themeContext);
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggle = () => {
        setToggleMenu((toggleMenu) => !toggleMenu);
    }


    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
    }, [])

    return (
    
        <div>
            <div className='nav-container' style={{backgroundColor :(theme == 'DARK') ? 'white' : 'black' }}>
                    
                <div className={'header'}>

                    <span className='dheeraj-container'>
                        <div style={{display:'flex'}}>
                            <span style={{color :(theme == 'DARK') ? 'black' : 'white' }}  className='dheeraj-text'>{data.navHeading}</span>
                            <span className='dot'></span>
                        </div>
                    </span>

                    <button onClick={toggle} className='menu-button-in-mobile'>B</button>

                    {
                        (toggleMenu || screenWidth > 500) && (
                            <div style={{color :(theme == 'DARK') ? 'black' : 'white' }} className='buttons'>
                                <div className='single-button'  onClick={() => navigate('/')}>Home</div>
                                <div className='single-button'  onClick={() => navigate('/works')}>Works</div>
                                <div className='single-button'  onClick={() => navigate('/about')}>About</div>
                                <div className='single-button'  onClick={() => navigate('/projects')}>Projects</div>
                            </div>
                        )
                    }     
                </div>
            </div>

            <div style={{color :(theme == 'DARK') ? 'black' : 'white' }} className='chat-container'>      
                <div style={{  border:'2px solid orange' ,color :(theme == 'DARK') ? 'black' : 'white' }} className='single-chat-button'  onClick={() => navigate('/chat')}>Let's Chat</div>
                <Theme/>
            </div>
            <div className='seperator'></div>
        </div>
    )
}

export default NavBar