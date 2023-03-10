import LatestNews from "./LatestNews";
import "../styles/news.scss";
import { useState } from "react";
import PrintCategoryNews from "./PrintCategoryNews";
import PrintSearchNews from "./PrintSearchNews";
import { IArticle } from "../utils/interface";
import { useLocation } from "react-router-dom";

const News: React.FC = () => {
  const [panel, setPanel] = useState<string>("featured");
  const location = useLocation();
  const [favNews, setFavNews] = useState<Array<IArticle>>(
    JSON.parse(localStorage.getItem("favorites")!) || []
  );

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
        <div className="display-desktop">
          <PrintCategoryNews favorites={favNews} setFavorites={setFavNews} />
          {location.search !== "" && (
            <PrintSearchNews favorites={favNews} setFavorites={setFavNews} />
          )}
        </div>
      </div>

      <div className="display-phone">
        {panel === "latest" ? (
          <LatestNews />
        ) : (
          <>
            <PrintCategoryNews favorites={favNews} setFavorites={setFavNews} />
            {location.search !== "" && (
              <PrintSearchNews favorites={favNews} setFavorites={setFavNews} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default News;
