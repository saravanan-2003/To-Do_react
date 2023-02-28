import React from "react";
import Login from "../NewlistForm/Login";
import "./Newlist.css";
import { useState } from "react";


const Newlist=(props)=>{
    const [isEditing, setIsEditing] = useState(false);

    const startEditing = () => setIsEditing(true);
    const stopEditing = () => setIsEditing(false);
    const onSave=(value)=>{
        const new_data={
            ...value,
            id:Math.random().toString()
        };
        props.onadddata(value)
    }
    return (
        <div className="new-expense">
             {!isEditing && <button onClick={startEditing}>ADD TASK</button>}
             {isEditing && <Login  onSave={onSave} onCancel={stopEditing}/>}
        
    </div>
    );
};
export default Newlist;