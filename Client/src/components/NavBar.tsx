import { FC } from "react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <>
      <div className="flex items-center justify-between py-4 mx-4 font-semibold lg:mx-10">
        <div className="lg:text-2xl">
          {" "}
          <h1>AskMyPDF</h1>
        </div>
        <div className="flex gap-2 text-sm">
          {" "}
          <h1>Github</h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;
