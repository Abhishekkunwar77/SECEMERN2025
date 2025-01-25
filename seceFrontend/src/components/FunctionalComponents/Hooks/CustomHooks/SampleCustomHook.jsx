import {useEffect,}
const useLocaStorage =(key, value)=>{
const useLocanStorage =(key, value)=>{
    var[text, settext] =useState(()=>{
        const (!jsonValue) return jsonValue;
        return value;
    });
    useEffect(()=>{
        localStorage.setItem(key,text);
    },[key,text]);
};
}
export default useLocaStorage;