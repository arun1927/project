import React from "react";
import Data from "./Data.json";
function Sample() {
  return (
    <div>
      {Data.map((post) => {
        <div key={post.id}>
          <h1> {post.title}</h1>
        </div>;
      })}
    </div>
  );
}

export default Sample;
