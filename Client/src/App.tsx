import { FC, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <h1>Hello</h1>
      ) : (
        <div>
          <NavBar />
          <Body />
        </div>
      )}
    </>
  );
};

export default App;
