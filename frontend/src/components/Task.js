export default function Task({ title, id, description, setDataModal }) {
  function editById() {
    setDataModal({ display: "block", task: { id, title, description } });
  }
  function deleteById(e) {
    let confirm = window.confirm(`are you delete the task: ${id}`);
    if (confirm) {
      fetch(`http://localhost:5000/delete/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((info) => info)
        .catch((err) => console.error(err));
    }
    e.preventDefault();
  }

  return (
    <tr className='container m-4'>
      <th scope='row'>{id}</th>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <button className='btn btn-warning me-2' onClick={editById}>
          Change
        </button>
        <form onSubmit={deleteById} className='d-inline-block'>
          <button type='submit' className='btn btn-danger'>
            Delete
          </button>
        </form>
      </td>
    </tr>
  );
}
