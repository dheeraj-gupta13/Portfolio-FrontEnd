import React, {useContext} from 'react'
import './About.css'
import DiscussButton from './DiscussButton'
import {themeContext} from '../App'
import { CoffeeOutlined } from '@ant-design/icons'
import CoffeeIcon from '@mui/icons-material/Coffee';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import LaptopIcon from '@mui/icons-material/Laptop';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function InfoCard() {
  return (
    <div className='info-card'>

      <div className='intro-poem'>
        <div className='intro-poem-line'>Pain have some reason,</div>
        <div className='intro-poem-line'>Mistakes have some cause.</div>
        <div className='intro-poem-line'>Believe in yourself,</div>
        <div className='intro-poem-line'>Let them call you orz...</div>
      </div>

      <div className='intro-intro'>
        <div className='intro-intro-line'> 
          <p>Hi, I am Dheeraj Gupta, persuing B.tech from Manav Rachna University. 
              I am teach enthusiast, and I have keen Interest in coding.
              I love competitive coding and building cool stuff. 
            </p>
            <p>
                I have learnt coding by Youtube, Udemy Courses and by googling,
                and i have made some cool project which you can find project section.
                Also I love practicing coding problems and I have solved 2000+ problems on various platforms.
                And have amazing ratings on these platforms
            </p>
        </div>
      </div>
    </div>
  )
}

function InfoCardSmall(param) {
  return (
    <div className='info-card-small'>
      {param}
    </div>
  )
}

function HobbyCard(param) {
  return (
    <div className='hobby-card'>
        <div className='single-hobby'>{param}</div>
    </div>
  )
}

function About() {


  const { theme } = useContext(themeContext);

  return (

    <div className='about-root'>

      {
        (theme == 'DARK')
        ?
        <div className='aboutMe-heading'>
          <span className='aboutMe-about'>About</span>
          <span className='aboutMe-me'>Me</span>
        </div>

        :

        <div className='aboutMe-heading'>
          <span style={{color:'white'}}  className='aboutMe-about'>About</span>
          <span style={{color:'white'}} className='aboutMe-me'>Me</span>
        </div>
      }


        <div className='about-parent'>
          <div className='about-left'>
            <div className='about-heading'>{ InfoCard() }</div>
          </div>

          <div className='about-right'>

            {/* <div > */}
              <div className='about-personal-points-wrapper'>
                <div className='about-heading'>{ InfoCardSmall("He/ Him") } </div>
                <div className='about-heading'>{ InfoCardSmall("20 years old") } </div>
                <div className='about-heading'>{ InfoCardSmall("Aries") } </div>
              </div>


              <div className='about-hobbies'>
                <div className='about-heading'>{ HobbyCard(<CoffeeIcon />) } </div>
                <div className='about-heading'>{ HobbyCard(<LaptopIcon/>)} </div>
                <div className='about-heading'>{ HobbyCard(<SportsCricketIcon/>) } </div>
                <div className='about-heading'>{ HobbyCard(<FitnessCenterIcon/>) } </div>
              </div>
            {/* </div> */}
          </div>

        </div>

        {/* <div className='about-discuss'>
          <DiscussButton/>
        </div> */}
    </div>
  )
}

export default About