import { useEffect, useState } from "react";
import axios from 'axios'
const UseEffectApi = () => {
    var [post, setPost] = useState([]);
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>{
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err)=> console.log(err));
    },[]);
    return (
        <div>
            <h2>This page is  ment for useEffect with Api.</h2>
            <h3> The contents inside my JSONPlaceholder API posts are</h3>
            <ul>
                {post.map((element) => (
                    <li key={element.id} style={{listStyleType:"number"}}>{element.title} </li>
                ))}
            </ul>
        </div>
    );
}
export default UseEffectApi;