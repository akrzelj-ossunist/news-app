import LatestNews from "./LatestNews";
import { useLocation } from "react-router-dom";
import "../styles/news.scss";
import useGetNewsQuery from "../services/getNews";
import PrintNews from "./PrintNews";
import { useState } from "react";

const News: React.FC<{ searchValue: string }> = ({ searchValue: search }) => {
  const location = useLocation();
  const category = location.pathname;
  const [panel, setPanel] = useState("featured");
  const { data: newsData, isLoading } = useGetNewsQuery(search, category);
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
          <LatestNews />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            newsData.articles.map((article: any, index: any) => (
              <PrintNews
                key={index}
                author={article.author}
                title={article.title}
                image={article.urlToImage}
              />
            ))
          )}
        </div>
      </div>

      <div className="display-phone">
        {panel === "latest" ? (
          <LatestNews />
        ) : isLoading ? (
          <p>Loading...</p>
        ) : (
          newsData.articles.map((article: any, index: any) => (
            <PrintNews
              key={index}
              author={article.author}
              title={article.title}
              image={article.urlToImage}
            />
          ))
        )}
      </div>
    </>
  );
};

export default News;
