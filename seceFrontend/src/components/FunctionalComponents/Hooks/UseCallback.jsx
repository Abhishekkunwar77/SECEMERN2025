import { useCallback, useState } from "react";
const UseCallback = () => {
    const UseCallback = () => {
        var [num, setNum] = useState(0);
        var [dark, setDark] = useState(true);
        var styling = {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
        var getItems = useCallback((inc) => {
            return [number + inc + 1, number + inc + 2, number + inc + 3]
        }, [num])
    }
    return (
        <div style={styling}> <button onClick={() => setDark(dark => !dark)}>Theme Change </button>
            <h2> Welcome to UseCallback Page </h2>
            <input type="number"
                value={num}
                onChange={(e) => {
                    setNum(parseInt(e.target.value));
                }} />
            <ListItems func={getItems} />
        </div>
    );
};
export default UseCallback;