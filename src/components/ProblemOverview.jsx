import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProblemOverview.css'


const TagWrapper = ({tag}) => {
  return (
      <div style={{backgroundColor:'grey', 
                      marginRight:10, 
                      marginTop:8,
                      paddingLeft:8, 
                      paddingRight:8, 
                      paddingTop:4, 
                      paddingBottom:4, 
                      borderRadius:40, 
                      color:'white', 
                      fontWeight:600,
                      fontSize:13
        }}>{tag}</div>
  )
}


const formatTag = (str) => {
    const arr = str.split(" ");
    let final = []
    arr.map((a)=> {
      final.push(a.toLowerCase());
    })
    
    return  final.join('-');
  }

function ProblemOverview({questions}) {
  const navigate = useNavigate();

  return (
    <div className="problem-overview-container" onClick={() => navigate(`/discuss/problems/${formatTag(questions.ProblemTitle)}`, {state:{question:questions}})}  >
      <div className="problem-overview-header">
        <div className="problem-overview-title">{questions.ProblemTitle}</div>
          <div className="problem-overview-tags-container">
              {
                  questions.ProblemTags.map((tag)=> (
                      <div className='className="problem-tag"'>
                        <TagWrapper tag={tag}/>
                      </div>
                  ))
              }
          </div>
      </div>
      <div className='right-wrapper'>
        <div className='acceptance'  style={{marginRight:(questions.ProblemLevel == "Medium") ? 120 : 140  }} >
          {/* {questions.ProblemAcceptanceRate}%  */}
        </div>
        <div className='level'  style={{backgroundColor:(questions.ProblemLevel == 'Easy') ? 'green' : (questions.ProblemLevel == 'Medium') ? 'orange' : 'red'  }}>
          {questions.ProblemLevel} 
        </div>
      </div>
    </div>
  )
}

export default ProblemOverview