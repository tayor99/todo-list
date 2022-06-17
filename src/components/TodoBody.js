import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
const TodoBody = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(
        'https://robottodoapi.herokuapp.com/api/v1/todo/'
      );
      setPost(data);
    };
    getPost();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`https://robottodoapi.herokuapp.com/api/v1/todo/${id}/`);
  };

  return (
    <div className="body-container">
      {posts.map((post) => {
        return (
          <React.Fragment key={post.id}>
            <div className="todo-details">
              <div className="todo-list">
                <h4 className="title">{post.title}</h4>
                <p className="description">{post.decriptions}</p>
              </div>
              <div className="todo-delete">
                <AiOutlineDelete onClick={() => handleDelete(post.id)} />
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TodoBody;
