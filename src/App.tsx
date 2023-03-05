import "./styles/index.scss";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import News from "./components/News";
import { useState } from "react";

const Home: React.FC = () => {
  const [news, setNews] = useState<string>("");
  const [showDropNav, setShowDropNav] = useState(false);

  return (
    <div style={showDropNav ? { overflow: "hidden" } : {}}>
      <Header
        setNews={setNews}
        showDropNav={showDropNav}
        setShowDropNav={setShowDropNav}
      />
      <div className="content">
        <div className="hide-phone">
          <SideNav />
        </div>
        <News searchValue={news} />
      </div>
    </div>
  );
};

export default Home;
