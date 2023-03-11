import "./styles/news.scss";
import { useState } from "react";
import PrintCategoryNews from "./components/Prints/PrintCategoryNews";
import PrintSearchNews from "./components/Prints/PrintSearchNews";
import { IArticle } from "./utils/interface";
import { useRoutes } from "react-router-dom";
import HomeNews from "./components/HomeNews";
import LatestNews from "./components/LatestNews";

const App: React.FC = () => {
  const [panel, setPanel] = useState<string>("featured");
  const [favNews, setFavNews] = useState<Array<IArticle>>(
    JSON.parse(localStorage.getItem("favorites")!) || []
  );
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeNews favorites={favNews} setFavorites={setFavNews} />,
    },
    {
      path: "/:categoryId",
      element: (
        <PrintCategoryNews favorites={favNews} setFavorites={setFavNews} />
      ),
    },
    {
      path: "/search",
      element: (
        <PrintSearchNews favorites={favNews} setFavorites={setFavNews} />
      ),
    },
    {
      path: "*",
      element: <h1>Not found</h1>,
    },
  ]);
  return (
    <>
      <div className="news-content">
        <h3>News</h3>
        <div className="phone-news-toggle">
          <p
            onClick={() => setPanel("featured")}
            className={panel === "featured" ? "active-panel" : ""}
          >
            Featured
          </p>
          <p
            onClick={() => setPanel("latest")}
            className={panel === "latest" ? "active-panel" : ""}
          >
            Latest
          </p>
        </div>
        <div className="display-desktop">{routes}</div>
      </div>

      <div className="display-phone">
        {panel === "latest" ? <LatestNews /> : routes}
      </div>
    </>
  );
};

export default App;
