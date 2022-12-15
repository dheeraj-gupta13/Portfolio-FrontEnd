import React, {useContext,useEffect, useState } from 'react'
import Theme from './Theme'
import {themeContext} from '../App'
import { getTags } from '../api/discuss'
import { useNavigate } from 'react-router-dom'
import './TagsDrawer.css'
import { GeneralTag } from './index'
import TextField from "@mui/material/TextField";

function TagsDrawer() {
  const { theme } = useContext(themeContext);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");


  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };


  const filteredData = tags.filter((el) => {
    if (inputText === '') {
        return el;
    }
    else {
        return el.toLowerCase().includes(inputText)
    }
  })

  useEffect(() => {
    async function fetchData(){
      let res =  await getTags()
      setTags(res.tags)
    }
    fetchData();
  },[])

  const formatTag = (str) => {
    const arr = str.split(" ");
    let final = []
    arr.map((a)=> {
      final.push(a.toLowerCase());
    })
    
    return  final.join('-');
  }

  return (

    <>

      <div className="search-bar-container">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>

      <div className='tags-wrapper' >
          {
            filteredData.map((tag) => (
              <div className='tags-container' onClick={() => navigate(`/discuss/${formatTag(tag)}`)}>
                  <GeneralTag val={tag} />
              </div>
            
            ))
          }
      </div>
    </>
  )
}

export default TagsDrawer