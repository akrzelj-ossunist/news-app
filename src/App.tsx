import "./styles/index.scss";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import News from "./components/News";
import { useState } from "react";
import { useDebounce } from "usehooks-ts";

const Home: React.FC = () => {
  const [news, setNews] = useState<string>("");
  const debouncedNews = useDebounce(news, 500);

  return (
    <>
      <Header setNews={setNews} />
      <div className="content">
        <SideNav />
        <News searchValue={debouncedNews} />
      </div>
    </>
  );
};

export default Home;
