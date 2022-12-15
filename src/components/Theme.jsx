import React from 'react'
import {useContext} from 'react';
import {themeContext} from '../App'
import './Theme.css'

function Theme() {

    const { theme, setTheme } = useContext(themeContext);

    return (
        <div style={{color :(theme == 'DARK') ? 'black' : 'white' }} onClick={() => setTheme((theme == 'DARK') ? 'LIGHT' : 'DARK') }>
        {
                    (theme == 'DARK') 
                    ?
                        <div className='theme'>
                             <img  src={require('../assets/icons8-sun-50.png')}/> 
                        </div>

                    :
                        <div style={{color:'white'}} className='theme'>
                            <img src={require('../assets/sun-icon-18-48.png')}/> 
                        </div>
        }
        </div>
    )
}

export default Theme