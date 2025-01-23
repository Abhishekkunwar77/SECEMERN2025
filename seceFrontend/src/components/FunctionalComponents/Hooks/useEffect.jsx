import { useEffect, useState } from "react";
const UseEffect = () => {
  var [text, setText] = useState("");
  var [text1, setText1] = useState("");
  useEffect(()=>{
    console.log(text);
  },[text])
  return (
    <div>
      <h1>This is useEffect Example.</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h4>The text is {text}</h4>
      <input
        type="text"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
      />
      <h4>The text is {text1}</h4>
    </div>
  );
};
export default UseEffect;