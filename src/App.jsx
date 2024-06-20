import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const [inputValue, setInputValue] = useState("");
  const [hours, setHours] = useState(0);
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e){
      e.preventDefault();
      if(inputValue !== ""){
        const obj = {};
      obj.task = inputValue;
      obj.hour = hours;
      obj.id = Date.now();
      setTasks([...tasks, obj]);
      }
      

      setInputValue("");
      setHours(0);
  }
  
  function handleHourIncrement(id){
    const updatedTask = tasks.map((task) => {
      return task.id === id ? {...task, hour: parseInt(task.hour, 10) + 1} : task;
    })
    setTasks(updatedTask);
    // console.log(id);
  }
  function handleHourDecrement(id){
    const updatedTask = tasks.map((task) => {
      return task.id === id ? {...task, hour: parseInt(task.hour, 10) - 1} : task;
    })
    setTasks(updatedTask);
  }

  return (
    <div className="container">
      <h3>Geekster Education Planner</h3>
      <form action="" onSubmit={handleSubmit}>
        
        <input type="text"  className="inputval" placeholder="Subject"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          />
        <input type="number" value={hours !== "" ? hours : ""} onInput={(e) => setHours(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {
          tasks.map((task, index ) => {
            return(
              <li key={index}>
                {task.task}   -   {task.hour} hours
                <button onClick={() => handleHourIncrement(task.id)}>+</button>
                <button onClick={() => handleHourDecrement(task.id)}>-</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
