import { FC, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import ContentLoader from "react-content-loader";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    timer();
  }, []);

  return (
    <div>
      <NavBar />{" "}
      {loading ? (
        <div className="w-10/12 pb-4 mx-auto lg:w-7/12 pt-14">
          <ContentLoader
            speed={1}
            backgroundColor={"#333"}
            foregroundColor={"#999"}
            viewBox="0 0 380 70"
          >
            <rect x="0" y="0" rx="4" ry="4" width="110" height="10" />
            <rect x="0" y="15" rx="4" ry="4" width="370" height="20" />
            <rect x="0" y="40" rx="3" ry="3" width="40" height="19" />{" "}
          </ContentLoader>{" "}
          <ContentLoader
            speed={1}
            backgroundColor={"#333"}
            foregroundColor={"#999"}
            viewBox="0 0 380 70"
          >
            <rect x="0" y="0" rx="4" ry="4" width="110" height="10" />
            <rect x="0" y="15" rx="4" ry="4" width="370" height="20" />
            <rect x="0" y="40" rx="3" ry="3" width="40" height="19" />{" "}
          </ContentLoader>
        </div>
      ) : (
        <Body />
      )}
    </div>
  );
};

export default App;
