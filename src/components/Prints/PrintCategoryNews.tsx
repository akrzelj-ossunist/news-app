import { useParams } from "react-router-dom";
import useGetNewsQuery from "../../services/getNews";
import { IArticle } from "../../utils/interface";
import LoadingSpinner from "../LoadingSpinner";
import PrintFavorites from "./PrintFavorites";
import PrintNews from "./PrintNews";

const PrintCategoryNews: React.FC<{
  favorites: Array<IArticle>;
  setFavorites: (val: Array<IArticle>) => void;
}> = ({ favorites, setFavorites }) => {
  const { categoryId } = useParams();
  const { data: newsData, isLoading } = useGetNewsQuery(categoryId!);
  return (
    <>
      {categoryId === "favorites" ? (
        <PrintFavorites favorites={favorites} setFavNews={setFavorites} />
      ) : isLoading ? (
        <LoadingSpinner className="load-articles" />
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
