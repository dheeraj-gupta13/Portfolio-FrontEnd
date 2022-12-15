import React from 'react'
import {useEffect, useState, useContext } from 'react'
import { getHomeData } from '../api/home'
import './Home.css'
import {ArrowRightOutlined} from '@ant-design/icons'
import {themeContext} from '../App'
import { useNavigate } from 'react-router-dom'
import DiscussButton from './DiscussButton'


import github from '../assets/gh.png'
import linkedin from '../assets/li.png'
import insta from '../assets/in.png'
import githubPurple from '../assets/github.png'

const Home = () => {

    const [data, setData] = useState({})
    const [fetching, setFetching] = useState(true)
    const [idx, setIdx] = useState(0)
    const { theme } = useContext(themeContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData(){
            const data =  await getHomeData();
            setData(data.msg)
        }
        fetchData();
    }, [])

    useEffect(()=> {
      if(data.title){
        setFetching(false)
      }
    })


    useEffect(() => {
        const interval = setInterval(() => {

          
          if(data.jargons){
            setIdx((idx) => ((idx+1)%data.jargons.length));
          }
          else{
            setIdx((idx) => (idx+1));
          }

          if(data.jargons && idx > data.jargons.length){
            setIdx(0);
          }
        }, 2500);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
     
    }, [idx])

    const getFirstHalf = (s) => {
      const c =  s.split(" ");
      return c[0] +  " " +  c[1] + " "  + c[2];
    }
    const getSecondHalf = (s) => {
      const c =  s.split(" ");
      return c[3] +  " " +  c[4] ;
    }


    
  return (

    <div className='parent'>

      {
        (fetching) 
        ? 
          <div>Loading...</div> 
        : 

        <div className='root' style={{backgroundColor :(theme == 'DARK') ? "#FEFCFF" : 'black'}}>
          <div className='left'>

          <span className='batch'>{data.jargons[idx]}</span>

            <div className='heading-in-two-lines'  style={{color :(theme == 'DARK') ? 'black' : 'white',  }}>  
                <div>{getFirstHalf(data.title) }</div>
                <div>{getSecondHalf(data.title) }</div>
            </div>
            <div style={{color :(theme == 'DARK') ? 'black' : 'white' }} className='sub-heading'>{data.subTitle}</div>

            <div className='buttons-container'>
              <div className='resume'>
                <a className='resume-link' href="https://drive.google.com/file/d/1FirChVyI4g4VaJmrQOXmukbDUZehbjY7/view" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </div>

              <div style={{color :(theme == 'DARK') ? 'black' : 'white' }} className='projects-container' onClick={() => navigate('/projects')}>
                <div className='projects' >Projects</div>
                <div className='arrow'><ArrowRightOutlined /></div>
              </div>
            </div>


            <div className="social-media-container">
                <a target="_blank"  href="https://github.com/Dheeraj13042002"  >
                  {
                    (theme == 'DARK') ?
                    <img src={github} alt="github" className='social-icon' />
                    :
                    <img src={githubPurple} alt="github" className='social-icon' />
                  }
                </a>
                <a target="_blank"  href="https://www.linkedin.com/in/dheeraj-gupta-8861461bb/"  >
                    <img src={linkedin} alt="linkedin" className='social-icon' />
                </a>
                <a target="_blank"  href="https://www.instagram.com/dheeraj_gupta13/"  >
                    <img src={insta} alt="instagram" className='social-icon' />
                </a>
              </div>

            </div>
            <div className='right'>
              {
                (theme == 'DARK')
                ?
                  <img className='image' src={require('../assets/dheeraj_1.jpg')}/> 
                :
                  <img className='image' src={require('../assets/dheeraj_4.jpg')}/> 
              }
            </div>

            <div className='discuss-btn-container-home'>
              <DiscussButton/>
            </div>
        </div>
      }
    </div>
  )
}

export default Home