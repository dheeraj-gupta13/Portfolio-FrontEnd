import React from 'react'
import './GeneralTag.css'

function GeneralTag({val}) {
  return (
    <span className='tag'>
        {val}
    </span>
  )
}

export default GeneralTag