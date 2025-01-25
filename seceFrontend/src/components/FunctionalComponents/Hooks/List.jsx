import { useEffect, useState } from "react";

const ListItems = ({ func }) => {
  var [numbers, setNumbers] = useState([]);
  useEffect(() => {
    setNumbers(func(4));
  }, [func]);
  return (
    <div>
      <h3>
        This number List is as follows according to the number present in input
        box
      </h3>
      {numbers.map((number, index) => {
        return <h4 key={index}>{number}</h4>;
      })}
    </div>
  );
};
export default ListItems;