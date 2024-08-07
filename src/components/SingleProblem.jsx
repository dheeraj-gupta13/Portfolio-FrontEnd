import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
import { Theme } from './index';
import './SingleProblem.css'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";


const TagWrapper = ({tag}) => {
    return (
        <div style={{backgroundColor:'grey', 
                        margin:5, 
                        paddingLeft:8, 
                        paddingRight:8, 
                        paddingTop:4, 
                        paddingBottom:4, 
                        borderRadius:40, 
                        color:'white', 
                        fontWeight:600,
                        fontSize:15
                    }}>{tag}</div>
    )
}


function SingleProblem() {

    const [codeLang, setCodeLang] = useState([]);

    const [currentCodeLang, setCurrentCodeLang] = useState([]);
    const [currentCode, setCurrentCode] = useState("");

    const location = useLocation();

    useEffect(()=> {
        ProblemCode.map((codeObj) => {
            setCodeLang(oldArr => [...oldArr,  Object.keys(codeObj)[0] ])
        })
    },[])


    useEffect(() => {

        ProblemCode.map((codeObj) => {
            // if(Object.keys(codeObj)[0] == currentCodeLang){
            //     setCurrentCode(Object.values(codeObj))
            // }

            console.log(Object.keys(codeObj)[0])
            setCurrentCodeLang(Object.keys(codeObj)[0])
        })
    },[]) 
    


    useEffect(() => {

        // console.log(ProblemCode);

        console.log(currentCodeLang)
        ProblemCode.map((codeObj) => {
            if(Object.keys(codeObj)[0] == currentCodeLang){
                setCurrentCode(Object.values(codeObj))
            }
        })
    
    },[currentCodeLang])

    const {ProblemTitle, 
            ProblemLevel, 
            ProblemTags, 
            ProblemQuestionParas, 
            ProblemTestCases,
            ProblemApproachParas,
            ProblemCode
    } = location.state.question;

    
    
    const changeLanguage = (e) => {
        setCurrentCodeLang(e.target.value);
    }
   

    return (
        <>
            {/* <div> <Theme/> </div> */}
            <div className='heading'>
                <div>{ProblemTitle}</div>
            </div>
            <div  className='tags-container-s-p'>
                {
                    ProblemTags.map((tag) => (
                        <TagWrapper tag={tag} />
                    ))
                }
            </div>

            <div className='approach-wrapper'>
                <div className='approach-heading'>Approach</div>
                {
                    ProblemApproachParas.map((para) => (

                        <div>{para}</div>
                    ))
                }
            </div>

            <div className='code-wrapper'>
                <div className='code-heading'>Code</div>
                <div className='code-editor-container'>
                   
                   <div style={{display:'flex'}}>
                        <select className="code-language" onChange={changeLanguage}>
                            {
                                codeLang.map((lang)=> (                                  
                                    <option className="code-language-option">{lang}</option>
                                ))
                            }
                        </select>
                   



                        <div className='code-editor'>
                            <AceEditor
                                style={{width:800, height:500}}
                                placeholder="Code"
                                mode="CPP"
                                theme="monokai"
                                name="blah2"
                                onLoad={()=> console.log(currentCode) }
                                onChange={currentCode}
                                fontSize={16}
                                showPrintMargin={true}
                                showGutter={true}
                                highlightActiveLine={false}
                                value={`${currentCode}`}
                                setOptions={{
                                enableBasicAutocompletion: false,
                                enableLiveAutocompletion: false,
                                enableSnippets: true,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProblem