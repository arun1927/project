import React from "react";
import "./Home.css";
import Data from "./Data.json";
import Bill from "./Bill";
import { useState } from "react";
function Home() {
  const [post, setPost] = useState(null);
  const setClick = (post) => {
    setPost(post);
  };
  return (
    <div className="home">
      {Data.map((post) => {
        return (
          <div key={post.id}>
            <img
              src={post.image}
              className="home_image"
              onClick={() => {
                setClick(post);
              }}
            />

            <p> {post.title}</p>
          </div>
        );
      })}
      <Bill post={post} />
    </div>
  );
}

export default Home;
