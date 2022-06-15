import axios from "axios";
import { useEffect, useState } from "react";

const TodoBody = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(
        "https://robottodoapi.herokuapp.com/api/v1/todo/"
      );
      setPost(data);
    };
    getPost();
  });

  return (
    <>
      {posts.map((post) => {
        return (
          <div className="body-container">
            <h4 className="title">{post.title}</h4>
            <p className="description">{post.decriptions}</p>
          </div>
        );
      })}
    </>
  );
};

export default TodoBody;
