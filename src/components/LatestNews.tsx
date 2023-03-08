import useGetLatestNewsQuery from "../services/getLatestNews";
import "../styles/latestNews.scss";
import PrintLatestArticle from "./PrintLatestArticle";
import { concatArrayOfArray } from "../utils/customFuncions";
import LoadingSpinner from "./LoadingSpinner";
import { useLocation } from "react-router-dom";

const LatestNews: React.FC = () => {
  const {
    data: latestNewsData,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useGetLatestNewsQuery();
  const path = useLocation().pathname;
  return (
    <>
      <div
        className="latest-news"
        style={path === "/" ? { marginTop: "65px" } : {}}
      >
        <div className="latest-article">
          <div className="circle">
            <span className="large-circle"></span>
            <span className="middle-circle"></span>
          </div>
          <p>Latest news</p>
        </div>
        <div className="latest-articles">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <PrintLatestArticle
              latestNewsData={concatArrayOfArray(latestNewsData?.pages!)}
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
            />
          )}
        </div>
        <div className="all-news">
          <p>See all news</p>
        </div>
      </div>
    </>
  );
};
export default LatestNews;
