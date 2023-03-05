import LatestNews from "./LatestNews";
import { useLocation } from "react-router-dom";
import "../styles/news.scss";
import useGetNewsQuery from "../services/getNews";
import PrintNews from "./PrintNews";
import { useState, useEffect } from "react";
import useGetNewsByTitleQuery from "../services/getNewsByTitle";

const News: React.FC<{
  searchValue: string;
  setSearchValue: (val: string) => void;
}> = ({ searchValue: search, setSearchValue }) => {
  const category = useLocation().pathname;
  const [panel, setPanel] = useState("featured");
  const [favNews, setFavNews] = useState<any[]>([]);

  useEffect(() => {
    setSearchValue("aeiou");
  }, [category]);

  const { data: newsData, isLoading } = useGetNewsQuery(category);
  const { data: newsByTitleData, isLoading: titleLoading } =
    useGetNewsByTitleQuery(search || "aeiou");

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
          {isLoading || titleLoading ? (
            <p>Loading...</p>
          ) : newsByTitleData.totalResults === 0 ? (
            newsData.articles.map((article: any, index: any) => (
              <PrintNews
                key={index}
                author={article.source.name}
                title={article.title}
                image={article.urlToImage}
                index={index}
                setFavNews={setFavNews}
                favNews={favNews}
              />
            ))
          ) : (
            newsByTitleData.articles.map((article: any, index: any) => (
              <PrintNews
                key={index}
                author={article.source.name}
                title={article.title}
                image={article.urlToImage}
                index={index}
                setFavNews={setFavNews}
                favNews={favNews}
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
              author={article.source.name}
              title={article.title}
              image={article.urlToImage}
              setFavNews={setFavNews}
              favNews={favNews}
            />
          ))
        )}
      </div>
    </>
  );
};

export default News;
