import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getposts")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="posts_container">
      <div>
        {posts.map((post) => (
          <Link to={`/post/${post._id}`} className="post">
            <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
            <div className="post_text">
              <h2 key={"title"}>{post.title}</h2>
              <p key={"description"}>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
