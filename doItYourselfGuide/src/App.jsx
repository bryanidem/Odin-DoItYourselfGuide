import { useState } from "react";
import Overview from "./componets/Overview";

const App = () => {
  const [list, setList] = useState([
    { id: 1, task: "test" },
    { id: 2, task: "hola" },
  ]);

  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), task: task };
    const newList = [...list, newTask];
    console.log(newList);
    setList(newList);
    setTask("");
  };

  return (
    <>
      <h1>Do it yourself guide</h1>
      <label htmlFor="addTask">Add a task</label>
      <input type="text" id="addTask" onChange={handleChange} value={task} />
      <button type="submit" onClick={handleClick}>
        add
      </button>
      <Overview list={list} />
    </>
  );
};

export default App;
