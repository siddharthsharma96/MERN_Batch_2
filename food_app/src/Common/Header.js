import { NavLink } from "react-router-dom";
import NavItems from "../UI/NavItems";
import { useEffect, useState } from "react";

const Header = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/navItems.json");
      if (response.status === 200) {
        const datas = await response.json();
        setData(datas);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="header">
      <div className="logo__Container">
        <NavLink to={"/"}>
          <img src="/images/image.png" className="logo" alt="logo" />
        </NavLink>
      </div>
      <div className="navItems">
        <ul>
          {data.map((res) => {
            return <NavItems path={res.path} content={res.content} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
