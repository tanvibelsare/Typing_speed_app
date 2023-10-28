import React from "react";


const ThemeButton =(props)=>{
  console.log (props)
    return (<div className=" button">
        <button>{props.name}</button>
        </div>)
}
  
  
  export default ThemeButton;