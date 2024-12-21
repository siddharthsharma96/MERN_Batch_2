import Button from "./Button";

const ButtonContainer = ({ setVal, val }) => {
  //   console.log("btnCont");

  const handleIncrement = () => {
    setVal(val + 1);
  };
  const handleDecrement = () => {
    setVal(val - 1);
  };
  return (
    <div className="buttonContainer">
      <Button
        name={"dec"}
        clickEvent={handleDecrement}
        text={"Decrement"}
      ></Button>
      <Button
        name={"inc"}
        clickEvent={handleIncrement}
        text={"Increment"}
      ></Button>
    </div>
  );
};

export default ButtonContainer;
