import { IArticle } from "../../utils/interface";
import NotFound from "../NotFound";
import PrintNews from "./PrintNews";

const PrintFavorites: React.FC<{
  favorites: Array<IArticle>;
  setFavNews: (val: Array<IArticle>) => void;
}> = ({ favorites, setFavNews }) => {
  return (
    <>
      {favorites.length === 0 ? (
        <NotFound message="fav" />
      ) : (
        favorites.map((article: any, index: any) => {
          return (
            <PrintNews
              key={index}
              article={article}
              setFavNews={setFavNews}
              favNews={favorites}
            />
          );
        })
      )}
    </>
  );
};

export default PrintFavorites;
