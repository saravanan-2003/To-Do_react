import React, { useState } from "react";
import "./Login.css";
const Login = (props) => {
  const [entereddata,setentereddata]=useState('');
 
  const onchangeddata=(event)=>setentereddata(event.target.value);
  const getdata=(event)=>{
    event.preventDefault();
    const new_data={
      list:entereddata
    }
    props.onSave(new_data);
    setentereddata('')
  }
  return (
    <form onSubmit={getdata}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>ToDo</label>
          <input type="text" 
          name="name" 
          placeholder="write to do something ...."
          value={entereddata}
          onChange={onchangeddata}
          />
        </div>
        </div>
      <div className="new-expense__actions">
      <button onClick={props.onCancel}>Cancel</button>
        <button type="submit" value={"Submit"}>Add to List</button>
      </div>
    </form>
  );
};
export default Login;
