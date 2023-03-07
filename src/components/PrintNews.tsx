import {
  IconCheckedFavorite,
  IconUncheckedFavorite,
} from "../assets/FavoriteIcon";
import "../styles/news.scss";
import missing from "../assets/Missing-image.png";
import { isInArray } from "../utils/customFuncions";
import { IArticle } from "../utils/interface";
import { Link } from "react-router-dom";

const PrintNews: React.FC<{
  article: IArticle;
  index?: number;
  setFavNews: (val: Array<IArticle>) => void;
  favNews: Array<IArticle>;
}> = ({ article, index, setFavNews, favNews }) => {
  const favIndex = isInArray(favNews, article.title);
  return (
    <div className="article" style={index === 2 ? { marginLeft: "1px" } : {}}>
      <img
        src={article.urlToImage || missing}
        onError={({ currentTarget }) => {
          currentTarget.src = missing;
        }}
      />
      <p className="article-source">{article.source.name}</p>
      <Link to={article.url} target="_blank" className="article-title">
        {article.title.length > 80
          ? article.title.substring(0, 65) + "..."
          : article.title}
      </Link>
      <p className="article-author">{article.author}</p>
      <div className="fav-icon">
        {favIndex >= 0 ? (
          <IconCheckedFavorite
            onClick={() => {
              favNews.splice(favIndex, 1);
              setFavNews([...favNews]);
            }}
          />
        ) : (
          <IconUncheckedFavorite
            onClick={() => {
              setFavNews([...favNews, article]);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PrintNews;
