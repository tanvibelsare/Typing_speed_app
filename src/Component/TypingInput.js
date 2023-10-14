import React,{useState} from "react";

const TypingInput=()=>{
    const [userInput,setUserInput]=useState('')
    return(<div className="typing">
        <input type="text" value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>
        <p>{userInput}</p>
    </div>)
}
export default TypingInput