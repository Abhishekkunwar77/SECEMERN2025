const UseLocalStorage=()=>{
    var[text, setText]=useLocalStorage
    return (
        <div>
            <h1> Utilizing Custom Hook Created</h1>
            <h3> The text typed is {text} </h3>
        </div>
    );
};
export default UseLocalStorage;
