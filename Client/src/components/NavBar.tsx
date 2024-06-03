import React, { FC } from "react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <div className="font-sans  font-medium flex justify-between px-4 py-4">
      <div className="text-2xl">
        {" "}
        <h1>AskMyPDF 🚀</h1>
      </div>
      <div className="flex gap-2 text-sm">
        {" "}
        <h1>Fork</h1>
        <h1>Github</h1>
      </div>
    </div>
  );
};

export default NavBar;
