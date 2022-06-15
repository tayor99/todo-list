import { useState } from "react";

const TodoForm = () => {
  const [details, setDetails] = useState({
    title: "",
    description: "",
  });
  const postDetails = (e) => {
    setDetails((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="form-body">
      <form>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          cols="5"
          rows="3"
        ></textarea>
      </form>
    </div>
  );
};

export default TodoForm;
