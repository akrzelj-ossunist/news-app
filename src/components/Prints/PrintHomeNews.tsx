import useGetNewsQuery from "../../services/getNews";
import { IArticle } from "../../utils/interface";
import LoadingSpinner from "../LoadingSpinner";
import PrintNews from "./PrintNews";

const PrintHomeNews: React.FC<{
  favorites: Array<IArticle>;
  setFavorites: (val: Array<IArticle>) => void;
  category: string;
}> = ({ favorites, setFavorites, category }) => {
  const { data: newsData, isLoading } = useGetNewsQuery(
    category,
    category === "general" ? 7 : 6
  );
  return (
    <div>
      {isLoading ? (
        <LoadingSpinner className="load-articles" />
      ) : (
        <>
          <p className="category-title">{category}</p>
          <div className="article-section">
            {newsData?.articles.map((article: any, index: any) => {
              return (
                <PrintNews
                  key={index}
                  article={article}
                  index={category === "general" ? index : 0}
                  setFavNews={setFavorites}
                  favNews={favorites}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default PrintHomeNews;
