import useGetLatestNewsQuery from "../services/getLatestNews";
import "../styles/latestNews.scss";
import PrintLatestArticle from "./PrintLatestArticle";
import { concatArrayOfArray } from "../utility/customFuncions";

const LatestNews: React.FC = () => {
  const {
    data: latestNewsData,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useGetLatestNewsQuery();

  return (
    <>
      <div className="latest-news">
        <div
          className="latest-article"
          style={{
            display: "flex",
            position: "sticky",
            top: "-15px",
            background: "white",
          }}
        >
          <div className="circle">
            <span className="large-circle"></span>
            <span className="middle-circle"></span>
          </div>
          <p>Latest news</p>
        </div>
        <div className="latest-articles">
          {isLoading ? (
            <p>Loading...</p>
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
