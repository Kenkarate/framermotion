import React from "react";

function Header() {
  return (
    <div className="h-[8vh] flex justify-between mx-44 shadow-lg font-bold ">
      <p className="my-auto mx-10">CodeWithAjesh</p>
      <div className="flex gap-5 my-auto mx-10">
        <p>Home</p>
        <p>Shop</p>
        <p>About us</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Header;
