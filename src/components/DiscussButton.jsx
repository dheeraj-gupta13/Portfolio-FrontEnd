import React from 'react'
import {ArrowRightOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './DiscussButton.css'

function DiscussButton() {

    const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/discuss')} className='discuss-container'>
            <div className='discuss-btn-left'>Discuss Algorithms</div>
            <div className='discuss-btn-right'>
                 <ArrowRightOutlined className='discuss-btn-arrow' style={{color:'white'}}  />
            </div>
    </div> 
  )
}

export default DiscussButton