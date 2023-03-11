import { IArticle } from "../../utils/interface";
import PrintNews from "./PrintNews";

const PrintFavorites: React.FC<{
  favorites: Array<IArticle>;
  setFavNews: (val: Array<IArticle>) => void;
}> = ({ favorites, setFavNews }) => {
  return (
    <>
      {favorites.map((article: any, index: any) => {
        return (
          <PrintNews
            key={index}
            article={article}
            setFavNews={setFavNews}
            favNews={favorites}
          />
        );
      })}
    </>
  );
};

export default PrintFavorites;
