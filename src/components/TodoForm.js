import { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ getTodos }) => {
  const [details, setDetails] = useState({
    title: '',
    decriptions: '',
    completed: false,
  });
  const postDetails = (e) => {
    setDetails((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      'https://robottodoapi.herokuapp.com/api/v1/todo/',
      details
    );
    getTodos();

    setDetails({
      title: '',
      decriptions: '',
    });
  };
  return (
    <div className="form-body">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={details.title}
          onChange={postDetails}
        />
        <label htmlFor="decriptions">Description:</label>
        <textarea
          name="decriptions"
          id="decriptions"
          cols="5"
          rows="3"
          value={details.decriptions}
          onChange={postDetails}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
