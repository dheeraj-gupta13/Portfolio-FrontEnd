import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import { getProblemsByTag } from '../api/discuss'
import {TagsDrawer, Theme, ProblemOverview} from './index'
import './ProblemsScreen.css'

function ProblemsScreen() {

    const [questions, setQuestions] = useState([]);
    const params = useParams();


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
            const res = await getProblemsByTag(params.id)
            console.log(res.ans);

            setQuestions(res.ans);
        }
        fetchData();
    },[params.id])

    return (
        <div style={{height:'100%', }}>
            {/* <div className='theme'>
                <Theme/>
            </div> */}
            <div className='parent1'>
            
                
                <div className='left1'>
                    <div className='tag-heading-prbem-screen'>{deFormatTag(params.id)}</div>
                    {
                        questions.map((questions) => (
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

export default ProblemsScreen