const Container = (props) => {
  console.log(props.children);

  return (
    <div className="a">
      <p>Container</p>
      {props.children}
    </div>
  );
};

export default Container;
