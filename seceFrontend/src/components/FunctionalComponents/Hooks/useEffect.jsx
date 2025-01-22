import { useState } from "react";
const UseEffect = () => {
    var [text, setText] = useState("Abhishek");
    var [text1, setText1] = useState("");
    useEffect(() => {
    },[text, text1])
    console.log(text);
    return (
        <div>
            <h1>This useEffect Example</h1>
            <input
                type="Number"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <h1> The text is {text}</h1>
            <input
                type="Number"
                value={text1}
                onChange={(e) => setText(e.target.value)} />
            <h1> The text is {text1}</h1>

        </div>
    )
}
export default UseEffect;