import React, { useState, useEffect, useContext } from 'react'
import { getWorksData } from '../api/works'
import './Works.css'
import { themeContext } from '../App'
import Loading from './Loading'

// WorkCard
const WorkExperienceCard = ({ experience }) => {

  return (
    <div className='work-card-wrapper'>
      <div className='work-card-timeline-wrapper'>
        <div className='work-card-timeline'>{experience.InternTime}</div>
      </div>

      <div className='work-card-heading'>
        <div className='work-card-heading-title'>{experience.InternRole}</div>
        <div className='work-card-heading-company'>{experience.InternCompany}</div>
      </div>

      <div className='work-card-information'>{experience.InternDescription}</div>
    </div>
  )
}

// WorkCard
const WorkRatingsCard = ({ ratings }) => {

  const { theme } = useContext(themeContext);

  return (
    <div className='work-card-wrapper'>
      <div className='work-card-timeline-wrapper'>
        <a target="_blank" href={ratings.PlatFormLink} >
          <div className='work-card-timeline'>{ratings.PlatFormLink}</div>
        </a>
      </div>

      <div className='work-card-heading'>
        <div className='work-card-heading-title'>{ratings.PlatformRating}</div>
        <div className='work-card-heading-company'>{ratings.PlatformName}</div>
      </div>

      <div className='work-card-information'>{ratings.PlatformDescription}</div>
    </div>
  )
}

const Works = () => {

  const [data, setData] = useState()
  const [experience, setExperience] = useState([])
  const [ratings, setRatings] = useState([])
  const [fetching, setFetching] = useState(true)
  const { theme } = useContext(themeContext);


  useEffect(() => {
    async function fetchData() {
      const data = await getWorksData();
      setData(data.msg)
      setExperience(data.msg[0].Experience)
      setRatings(data.msg[0].Ratings)
    }
    fetchData();
  }, [])

  useEffect(() => {
    if (experience.length) {
      setFetching(false)
    }
  }, [experience])


  return (
    <div >

      {
        (fetching)
          ?
          <Loading />
          :

          <div className='works-wrapper'>
            {/* left */}
            <div className='works-left'>
              <div className='work-heading'>
                {
                  (theme == 'DARK')
                    ?
                    <h1>Experience</h1>
                    :
                    <h1 style={{ color: 'white' }}>Experience</h1>
                }
              </div>

              <div className='work-content'>
                {
                  experience.map((singleExperience) =>
                    singleExperience.display && (
                      <WorkExperienceCard experience={singleExperience} />
                    ))
                }
              </div>
            </div>



            {/* right */}
            <div className='works-right'>
              <div className='work-heading'>
                {
                  (theme == 'DARK')
                    ?
                    <h1>Ratings</h1>
                    :
                    <h1 style={{ color: 'white' }}>Ratings</h1>
                }
              </div>

              <div className='work-content'>
                {
                  ratings.map((singleExperience) => (
                    <WorkRatingsCard ratings={singleExperience} />
                  ))
                }
              </div>
            </div>
          </div>
      }

    </div>
  )
}

export default Works