import React from 'react'
import './Loading.css'
import ReactLoading from "react-loading";

function Loading() {

    //https://www.geeksforgeeks.org/how-to-create-loading-screen-in-reactjs/
  return (
    <div className='loading-parent'>
        <div>
            <ReactLoading
                type="spinningBubbles"
                color="black"
                // height={100}
                width={60}
            />
        </div>
        <div className='loading-text'>Loading...</div>
    </div>
  )
}

export default Loading