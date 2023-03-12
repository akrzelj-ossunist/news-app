import { useLocation, useSearchParams } from "react-router-dom";
import useGetNewsByTitleQuery from "../../services/getNewsByTitle";
import { IArticle } from "../../utils/interface";
import LoadingSpinner from "../LoadingSpinner";
import NotFound from "../NotFound";
import PrintNews from "./PrintNews";

const PrintSearchNews: React.FC<{
  favorites: Array<IArticle>;
  setFavorites: (val: Array<IArticle>) => void;
}> = ({ favorites, setFavorites }) => {
  const search = useLocation().search;
  const { data: newsByTitleData, isLoading } = useGetNewsByTitleQuery(
    search.substring(search.indexOf("=") + 1)
  );
  return (
    <>
      {isLoading ? (
        <LoadingSpinner className="load-articles" />
      ) : newsByTitleData?.articles.length === 0 ? (
        <NotFound message="search" />
      ) : (
        newsByTitleData?.articles.map((article: any, index: number) => (
          <PrintNews
            key={index}
            article={article}
            index={index}
            setFavNews={setFavorites}
            favNews={favorites}
          />
        ))
      )}
    </>
  );
};

export default PrintSearchNews;
