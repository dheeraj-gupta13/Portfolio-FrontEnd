import React, {useContext,useEffect, useState } from 'react'
import Theme from './Theme'
import './Discuss.css'
import {themeContext} from '../App'
import { getTags, getAllProblems } from '../api/discuss'
import { useNavigate } from 'react-router-dom'
import { TagsDrawer, ProblemOverview} from './index'

function Discuss() {
  const { theme } = useContext(themeContext);
  const [ problems, setProblems ] = useState([]);

  useEffect(() => {
      
      async function fetchData(){
        let res = await getAllProblems();
        setProblems(res.problems);
      }

      fetchData();
  },[])

  return (
    <div style={{ backgroundColor:(theme == 'DARK') ? 'white' : 'black'}}>    
      <div className='theme'>
        <Theme/>
      </div>
      {/* <TagsDrawer/> */}
        <div className='parent1'>
          <div className='left1'>
            <div className='tag-heading-prbem-screen'>{"Problem Set"}</div>
            {
                problems.map((questions) => (
                  <ProblemOverview  questions={questions}/>
                ))
            }
          </div>
          <div className='right1'>
            <TagsDrawer/>
          </div>
        </div>
    </div>
  )
}

export default Discuss