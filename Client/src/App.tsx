import  { FC } from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <div>
      <NavBar />
      <Body />
    </div>
  );
};

export default App;
