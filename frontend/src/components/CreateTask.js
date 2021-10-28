
import { useState } from "react";

export default function CreateTask({ taskId }) {
  let [taskTitle, setTaskTitle] = useState();
  let [taskDescription, setTaskDescription] = useState();
  function CreateTask(url, config) {
    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => err);
  }
  const handlerSubmit = async (e) => {
    CreateTask("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: taskId,
        title: taskTitle,
        description: taskDescription,
      }),
    });
    e.preventDefault();
    e.target.reset();
  };
  const handlerChangeInput = (e) => {
    setTaskTitle((taskTitle = e.target.value));
    // console.log(taskTitle);
  };

  const handlerChangeTextarea = (e) => {
    setTaskDescription((taskDescription = e.target.value));
    // console.log(taskDescription);
  };

  return (
    <div className='container mt-3'>
      <form onSubmit={handlerSubmit}>
        <input
          className='form-control mb-3'
          type='text'
          placeholder='add the task name:'
          onChange={handlerChangeInput}
        />
        <textarea
          className='form-control mb-3'
          placeholder='add the task description:'
          onChange={handlerChangeTextarea}
        />
        <button className='btn btn-primary rounded' type='submit'>
          Create
        </button>
      </form>
    </div>
  );
}
