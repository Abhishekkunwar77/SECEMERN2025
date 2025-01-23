import { useState, useMemo } from "react";

const slowFunction = (num) => {
    for (let slow = 0; slow < 10000000000; slow++) { }
    return num * 2;
};

const UseMemo = () => {
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);

    const styling = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    };

    const doublingUpANumber = useMemo(() => {
        return slowFunction(num);
    }, [num]);

    return (
        <div>
            <h2>This page is meant for useMemo Hook.</h2>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
            <button onClick={() => setDark(curTheme => !curTheme)}>Toggle Theme</button>
            <h4 style={styling}>The number is {doublingUpANumber}</h4>
        </div>
    );
};

export default UseMemo;