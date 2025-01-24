import { memo } from "react";
const UpdateNumber1 = ({ value }) => {
    console.log("Update number 1");
    return (
      <div>
        <h2>Update Number 1</h2>
        <h3>Value is {value}</h3>
      </div>
    );
  };
  export default memo(UpdateNumber1);