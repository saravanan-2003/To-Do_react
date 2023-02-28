import React from "react";
import Template_item from "../Template_item/Template_item";
import "./Template.css"
const Template=(props)=>{
  //console.log(props);
    return(
        <div className="expenses">
        {
        props.data.map((exp)=>(
        <Template_item 
        key={exp.id}
        list={exp.list}
        />
      ))}
        </div>
    )
} 
export default Template;