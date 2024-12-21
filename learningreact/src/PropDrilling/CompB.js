import CompC from "./CompC";

const CompB = ({ data }) => {
  console.log(data, "In  Comp B");

  return (
    <div>
      <h1>Parent Component</h1>
      <CompC pa={data} />
    </div>
  );
};

export default CompB;
