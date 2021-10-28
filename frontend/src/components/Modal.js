import { useState } from "react";
export default function Modal({ dataModal, setDataModal }) {
  const style = { display: dataModal.display, background: "#00000090" };
  let [newTitle, setNewTitle] = useState();
  let [newDescription, setNewDescription] = useState();
  const handlerSubmit = (e) => {
    const url=`http://localhost:5000/update/${dataModal.task.id}`;
    const configFetch ={
      method: "PUT",
      body: JSON.stringify({
        title: newTitle,
        description: newDescription
      }),
      headers: {
        "Content-Type": "application/json",
      }
    }
    fetch(url,configFetch ).then(res=>res.json()).then(info=>{console.log(info)}).catch(err=>err);
    setDataModal({
      display: "none",
      task: { id: "", title: "", description: "" },
    })
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className='modal' style={style}>
      <div className='modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable'>
        <div className='modal-content'>
          <div className='modal-header bg-dark'>
            <h5 className='modal-title text-white'>
              You are going to change the task: {dataModal.task.id}
            </h5>
            <button
              type='button'
              className='btn-close btn-close-white'
              onClick={() => {
                setDataModal({
                  display: "none",
                  task: { id: "", title: "", description: "" },
                });
              }}></button>
          </div>
          <div className='modal-body'>
            <div className='container'>
              <span>Before:</span>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>title</th>
                    <th scope='col'>description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{dataModal.task.id}</td>
                    <td>{dataModal.task.title}</td>
                    <td>{dataModal.task.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr></hr>
            <form
              id='changeForm'
              className='container'
              onSubmit={handlerSubmit}>
              <div className='mb-3'>
                <span>Change:</span>
                <label className='container'>
                  New title:
                  <input
                    className='form-control'
                    type='text'
                    onChange={(e) => {
                      setNewTitle((newTitle = e.target.value));
                    }}
                  />
                </label>
              </div>
              <div className='mb-3'>
                <label className='container'>
                  New description:
                  <textarea
                    className='form-control'
                    onChange={(e) => {
                      setNewDescription((newDescription = e.target.value));
                    }}></textarea>
                </label>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button type='submit' className='btn btn-primary' form='changeForm'>
              Save changes
            </button>
            <button
              type='button'
              className='btn btn-outline-secondary'
              onClick={() => {
                setDataModal({
                  display: "none",
                  task: { id: "", title: "", description: "" },
                });
              }}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
