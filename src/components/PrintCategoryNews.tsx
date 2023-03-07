import { useLocation } from "react-router-dom";
import useGetNewsQuery from "../services/getNews";
import { IArticle } from "../utils/interface";
import LoadingSpinner from "./LoadingSpinner";
import PrintFavorites from "./PrintFavorites";
import PrintNews from "./PrintNews";

const PrintCategoryNews: React.FC<{
  favorites: Array<IArticle>;
  setFavorites: (val: Array<IArticle>) => void;
}> = ({ favorites, setFavorites }) => {
  const category = useLocation().pathname;
  const { data: newsData, isLoading } = useGetNewsQuery(category);
  return (
    <>
      {category === "/favorites" ? (
        <PrintFavorites favorites={favorites} setFavNews={setFavorites} />
      ) : isLoading ? (
        <LoadingSpinner />
      ) : (
        newsData?.articles.map((article: any, index: any) => (
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

export default PrintCategoryNews;
