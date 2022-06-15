import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = ({ logo, cars }) => {
  // console.log(logo);
  // console.log(cars);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <img src={logo} alt="" width={"200px"} />
      <Navbar cars={cars} />
    </div>
  );
};

export default Header;
