import React, {useContext,useEffect, useState } from 'react'
import Theme from './Theme'
import './Discuss.css'
import {themeContext} from '../App'
import { getTags, getAllProblems } from '../api/discuss'
import { useNavigate } from 'react-router-dom'
import { TagsDrawer, ProblemOverview} from './index'
import Pagination from './Pagination'
import Loading from './Loading'

function Discuss() {
  const { theme } = useContext(themeContext);
  const [ problems, setProblems ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage ] = useState(7);


  useEffect(() => {
      
      async function fetchData(){
        setLoading(true);
        let res = await getAllProblems();
        setProblems(res.problems);
        setLoading(false);
      }

      fetchData();
  },[])


  const   indexOfLastPost = currentPage * postsPerPage;
  const   indexOfFirstPost = indexOfLastPost - postsPerPage;
  const   currentProblems = problems.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ backgroundColor:(theme == 'DARK') ? 'white' : 'black'}}>    
      <div className='theme'>
        <Theme/>
      </div>
      <div>
        <div >back to Portfolio</div>
      </div>


      {
        (loading)
        ?
           <Loading/>
        :

        <div className='parent1'>
          <div className='left1'>
            <div style={{color:(theme=='DARK')? "black"  : "white" }} className='tag-heading-prbem-screen'>{"Problem Set"}</div>
            {
                currentProblems.map((questions) => (
                  <ProblemOverview  questions={questions}/>
                ))
            }
            <Pagination postsPerPage={postsPerPage} totalPosts={problems.length} paginate={paginate}/>
          </div>
          <div className='right1'>
            <TagsDrawer/>
          </div>
        </div>
      }
    </div>
  )
}

export default Discuss