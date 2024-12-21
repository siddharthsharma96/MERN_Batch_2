import CompB from "./CompB";

const CompA = () => {
  let a = { id: 123, password: "CodehubNexus" };
  console.log(a, "In Comp A");

  return (
    <div>
      <h1>GrandParent</h1>
      <CompB data={a} />
    </div>
  );
};

export default CompA;
