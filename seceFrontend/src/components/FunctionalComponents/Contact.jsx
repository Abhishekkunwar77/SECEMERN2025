import {useState} from 'react';
const Contact = () => {
  var [num,setNum]=useState(0);
 
    return (
      <div>
        <h2>You wish to Contact</h2>
        <h3>This is state example</h3>
        <h4>Number is {num}</h4>
        <button onclick={()=>setNum(num+1)}></button>
        
      </div>
    );
  };
  export default Contact;