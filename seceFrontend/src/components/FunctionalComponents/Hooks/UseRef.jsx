import { useEffect } from "react";

const UseRef = () => {
    var [text, setText] = useState("");
    var prevRender = useRef();
    useEffect(() => {
        console.log(prevRender.current)
        prevRender.current = text;


    }, [text]);
    return (
        <div>
            <h1>This page is ment for UseRef </h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <h4>  The text is {text} </h4>
        </div>
    )
}
export default UseRef;