import './App.css';
import React, { Children } from 'react'
import { About, Home, NavBar, Projects, Chat, Discuss, ProblemsScreen, SingleProblem,  Works } from './components';
import {  Routes, Route } from "react-router-dom";
import {useEffect, useState } from 'react'
import { getHomeData } from '../src/api/home'


export const themeContext = React.createContext(null);

function App() {

  const [theme, setTheme] = useState("DARK") 
  const [data, setData] = useState({})

  useEffect(() => {
        async function fetchData(){
            const data =  await getHomeData();
            setData(data.msg)
        }
        fetchData();
  }, [])

  const Fun = ({children}) => {
    return (
      <>
        <NavBar data={data}/>
        {children}
      </>
    )
  }

  return (

    <div >
      <themeContext.Provider value={{ theme, setTheme }}>
        <div style={{backgroundColor:(theme=='DARK') ? 'white' : 'black' }}>
          
          <Routes>
            <Route path="/" exact element={<Fun children={<Home/>}/> } />
          </Routes>
          <Routes>
            <Route path="/works" exact element={<Fun children={<Works/>}/> } />
          </Routes>
          <Routes>
            <Route path="/about" exact element={<Fun children={<About/>}/> } />
          </Routes>
          <Routes>
            <Route path="/projects" exact element={<Fun children={<Projects/>}/> } />
          </Routes>
          <Routes>
            <Route path="/chat" exact element={<Fun children={<Chat/>}/> } />
          </Routes>
          <Routes>
            <Route path="/discuss" exact element={<Discuss />} />
          </Routes>
          <Routes>
            <Route path="/discuss/:id" exact element={<ProblemsScreen id={"id"}/> } />
          </Routes>

          <Routes>
            <Route path="/discuss/problems/:id" exact element={<SingleProblem id={"id"}/> } />
          </Routes>
        </div>
      </themeContext.Provider>
    </div>
  );
}

export default App;
