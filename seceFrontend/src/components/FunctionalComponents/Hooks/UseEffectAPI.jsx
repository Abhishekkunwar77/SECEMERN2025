import { useEffect, useState } from "react";
import axios from "axios";
const UseEffectApi = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>This page is ment for useEffect with API.</h2>
      <h3>The contents inside my JSONPlaceholder API posts are</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ listStyleType: "number" }}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UseEffectApi;