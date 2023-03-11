import { IArticle } from "../utils/interface";
import PrintHomeNews from "./Prints/PrintHomeNews";

const HomeNews: React.FC<{
  favorites: Array<IArticle>;
  setFavorites: (val: Array<IArticle>) => void;
}> = ({ favorites, setFavorites }) => {
  const categories = [
    "general",
    "business",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <>
      {categories.map((cat) => (
        <PrintHomeNews
          key={cat}
          favorites={favorites}
          setFavorites={setFavorites}
          category={cat}
        />
      ))}
    </>
  );
};

export default HomeNews;
