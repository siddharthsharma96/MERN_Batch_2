import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";

const Counter = () => {
  //   console.log("counter");

  // Syntax of useState
  // [variable,function]=useState(Default Value)
  let [val, setVal] = useState(0);

  // Syntax of UseEffect
  // useEffect(callback Function,[array of dependencies])
  useEffect(() => {
    let timer = setTimeout(() => {
      if (val < 0) {
        setVal(0);
      }
    }, 2000);

    // cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [val]);
  // Case 1: When Array of depencdency is empty:
  // It will run only 1 time at the time of rendering
  return (
    <div className="container">
      <p className="value">{val}</p>
      <ButtonContainer setVal={setVal} val={val} />
    </div>
  );
};

export default Counter;
