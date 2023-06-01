import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import { getProblemsByTag } from '../api/discuss'
import {TagsDrawer, Theme, ProblemOverview} from './index'
import './ProblemsScreen.css'
import Pagination from './Pagination'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'


function ProblemsScreen() {

    const [questions, setQuestions] = useState([]);
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage ] = useState(7);
    const navigate = useNavigate();


    const deFormatTag = (s) => {
        let arr =  s.split("-")

        let arr2 = []
        arr.map((e)=> {   
            arr2.push(e.charAt(0).toUpperCase() + e.slice(1))
        })

        return arr2.join(" ");
    }

    useEffect(()=>{
        async function fetchData(){
            setLoading(true);
            const res = await getProblemsByTag(params.id)
            setQuestions(res.ans);
            setLoading(false);
        }
        fetchData();
    },[params.id])


    const   indexOfLastPost = currentPage * postsPerPage;
    const   indexOfFirstPost = indexOfLastPost - postsPerPage;
    const   currentProblems = questions.slice(indexOfFirstPost, indexOfLastPost);

     // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div style={{height:'100%', }}>
            <div className='theme'>
        <Theme/>
      </div>
      <div>
        <div  onClick={() => navigate(`/`)}>back to Portfolio</div>
      </div>

        {
            (loading)
            ?
            <Loading/>
            :

            <div className='parent1'>
            
                
                <div className='left1'>
                    <div className='tag-heading-prbem-screen'>{deFormatTag(params.id)}</div>
                    {
                        currentProblems.map((questions) => (
                            <ProblemOverview  questions={questions}/>
                        ))
                    }
                    <Pagination postsPerPage={postsPerPage} totalPosts={questions.length} paginate={paginate}/>
                </div>
                <div className='right1'>
                    <TagsDrawer/>
                </div>
            </div>
        }
        </div>
    )
}

export default ProblemsScreen