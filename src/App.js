import React from "react";
import TypingInput from "./Component/TypingInput";
import Button from "./Component/Button";

import "./style.css"

const App=()=>{
    
    return (
        <div className="container">
            <div>
                <h1>TypeCat</h1>
            </div>
           
           <TypingInput/>
          <div className="buttoncontainer">
          <Button name="10"/>
          <Button name="change"/>
           <Button name="50"/>
           <Button name="80"/>
           <Button name="100"/>
               - no of words
          </div>
        </div>
    )
    }
    export default App