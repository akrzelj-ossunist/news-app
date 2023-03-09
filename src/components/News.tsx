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

  const activeDesign = {
    background: "rgba(187, 30, 30, 0.1)",
    color: "#BB1E1E",
    padding: "10px 16px 10px 16px",
    borderRadius: "20px",
  };

  return (
    <>
      <div className="news-content">
        <h3>News</h3>
        <div className="phone-news-toggle">
          <p
            onClick={() => setPanel("featured")}
            style={panel === "featured" ? activeDesign : {}}
          >
            Featured
          </p>
          <p
            onClick={() => setPanel("latest")}
            style={panel === "latest" ? activeDesign : {}}
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
