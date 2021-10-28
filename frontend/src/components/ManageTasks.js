import { useState } from "react";
import CreateTask from "./CreateTask";
import ContainerTask from "./ContainerTask";
import Modal from "./Modal";

export default function ManageTasks() {
  let [tasks, setTasks] = useState(undefined);
  let [taskId, setTaskId] = useState(1);
  let [dataModal, setDataModal] = useState({
    display: "none",
    task: { id:0, title: "", description:"" },
  });
  return (
    <>
      <CreateTask taskId={taskId} setTaskId={setTaskId} />
      <ContainerTask
        setTasks={setTasks}
        tasks={tasks}
        setTaskId={setTaskId}
        taskId={taskId}
        setDataModal={setDataModal}
      />
      ReactDOM.createPortal(
      <Modal dataModal={dataModal} setDataModal={setDataModal}/>
      ,document.getElementById("modal"))
    </>
  );
}
