import React, {useContext} from 'react'
import './About.css'
import DiscussButton from './DiscussButton'
import {themeContext} from '../App'


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
        <div className='intro-intro-line'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptatum necessitatibus error sunt eaque ab amet! Quam corrupti magnam vel maxime dolore recusandae nisi distinctio facere, ducimus repudiandae eaque modi dignissimos eum itaque debitis qui harum sequi reprehenderit ut et. </div>
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
        {/* <img className='image' src={require('../assets/dheeraj_4.jpg')}/>  */}
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
                <div className='about-heading'>{ HobbyCard(``) } </div>
                <div className='about-heading'>{ HobbyCard(``) } </div>
                <div className='about-heading'>{ HobbyCard(``) } </div>
                <div className='about-heading'>{ HobbyCard(``) } </div>
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