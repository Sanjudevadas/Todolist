import React, { useState } from "react";
function Todolist() {
  const [task, setTask] = useState([]);
  const [newtask, setNewtask] = useState("");
  
  
  function HandleChange(event) {
    setNewtask(event.target.value);
  }
  function Addtasks(){
   if(newtask.trim() !== ""){
    setTask(t=>[...t,newtask]);
    setNewtask("");

   }

   
  }

function Deletetask(index)
{
  const updatetask= task.filter((element,i)=> i !== index);
  setTask(updatetask);
    
}
function Movetaskup(index){
  if(index>0){
    const updatedtask= [...task];
    [updatedtask[index],updatedtask[index-1]]=
    [updatedtask[index-1],updatedtask[index]]
    setTask(updatedtask);
  }

}
function Movetaskdown(index){
  if(index< task.length - 1){
    const updatedtask= [...task];
    [updatedtask[index],updatedtask[index+1]]=
    [updatedtask[index+1],updatedtask[index]]
    setTask(updatedtask);
  }

}


  return (
    <>
      <div className="todolist">
        <h1>To Do List </h1>
        <h3>Created By Sanju Devadas</h3>
        <div>
          <input
            type="text"
            placeholder="Enter task..." value={newtask}
            onChange={HandleChange}
          />
          <button className="addbutton" onClick={Addtasks}>Add</button>
         
        </div>
        <ol>
            {task.map((c, index) => 
              <li key={index}>
                <span className="text">{c}</span>
                <button className="deletebutton" onClick={()=>Deletetask(index)}>
                  Delete
                  </button>
                  <button className="movebutton" onClick={()=>Movetaskup(index)}>
                  👆
                  </button>
                  <button className="movebutton" onClick={()=>Movetaskdown(index)}>
                  👇
                  </button>
              </li>
            )}
          </ol>
      </div>
    </>
  );
}

export default Todolist;
