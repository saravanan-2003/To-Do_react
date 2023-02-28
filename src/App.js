import './App.css';
import { useState } from 'react';
import Newlist from './component/todo/NewList/Newlist';
import Template from './component/todo/template_form/Template';




  const arr=[
    {
      id:"e1",
    list:'to do the home work'
    },
    {
      id:"e2",
      list:"study for exam"
    },
    {
      id:"e3",
      list:"pay the rent for house"
    },
    {
      id:"e4",
      list:"do codechef"
    },
    {
      id:"e5",
      list:"do leetcode"
    }
];
function App(){
  const [data,setnewdata]=useState(arr)
  const onadddata=(newdata)=>{
    setnewdata((prev)=>{
     return [newdata,...prev];
    
  })
}

  return (
    <div className="App">
      <Newlist onadddata={onadddata}/>
     < Template data={data}/>
    </div>
  );
}

export default App;
