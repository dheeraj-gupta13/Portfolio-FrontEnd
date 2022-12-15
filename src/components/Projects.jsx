import React from 'react'
import {useEffect, useState, useContext } from 'react'
import { getProjects } from '../api/project'
import DiscussButton from './DiscussButton'
import {themeContext} from '../App'
import './Projects.css'


const ProjectCard = ({data}) => {

  return (
    <div className='project-card'>
      <div className="image-container">
          <a href={data.ProjectGithubLink} className="project-external-link">
              <img src={data.ProjectImageUrl} alt="project" className="project-image" />
          </a>
      </div>
      <div className='projects-details-container'>
          <div className="project-heading">{data.ProjectName}</div>
          <div className="project-details">{data.ProjectDescriptionParas[0]}</div>
          <div className="buttons-project">
              <a href={data.ProjectLiveLink} className="project-link">Watch Live!</a>
                <a href={data.ProjectGithubLink} className="project-link">Source Code</a>
           </div>
      </div>
    </div>
  )
}

function Projects() {

  const [data, setData] = useState([])
  const { theme } = useContext(themeContext);

  useEffect(() => {
    async function fetchData(){
        const data =  await getProjects();
        setData(data.projects)
    }
    fetchData();
  }, [])


  return (
    <div>

      {
        (theme == 'DARK')
        ?
        <div className='aboutMe-heading'>
          <span className='aboutMe-about'>Featured</span>
          <span className='aboutMe-me'>Projects</span>
        </div>

        :

        <div className='aboutMe-heading'>
          <span style={{color:'white'}}  className='aboutMe-about'>Featured</span>
          <span style={{color:'white'}} className='aboutMe-me'>Projects</span>
        </div>
      }


      <div className='projects-card-container'>
        {
          data.map((d) => (
            <ProjectCard data={d} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects