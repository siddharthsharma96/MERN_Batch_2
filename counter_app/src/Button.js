const Button = ({ name, clickEvent, text }) => {
  //   console.log("btn");

  return (
    <button className={`btn ${name} `} onClick={clickEvent}>
      {text}
    </button>
  );
};

export default Button;
