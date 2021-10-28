import React, { useEffect } from "react";
import Task from "./Task";

export default function ContainerTask({ setTasks, tasks, setTaskId, setDataModal}) {
  function GetAllTasks(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setTasks(data);
          setTaskId(data[data.length - 1].id + 1);
        }
      })
      .catch((err) => err);
  }
  useEffect(() => {
    GetAllTasks("http://localhost:5000");
  });

  return (
    <section className='container mt-4'>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>title</th>
            <th scope='col'>description</th>
            <th scope='col'>options</th>
          </tr>
        </thead>
        <tbody>
          {tasks === undefined ? (
            <tr className="table-danger">
              <th scope='row'>?</th>
              <th>any title task</th>
              <th>any description task</th>
              <th>you need create a task</th>
            </tr>
          ) : (
            tasks.map((task) => {
              return (
                <Task
                  key={task._id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  setDataModal={setDataModal}
                />
              );
            })
          )}
        </tbody>
      </table>
    </section>
  );
}
