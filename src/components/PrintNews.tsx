import {
  IconCheckedFavorite,
  IconUncheckedFavorite,
} from "../assets/FavoriteIcon";
import "../styles/news.scss";

const PrintNews: React.FC<{
  author: string;
  title: string;
  image: string;
  index?: number;
  setFavNews: (val: any[]) => void;
  favNews: any[];
}> = ({ author, title, image, index, setFavNews, favNews }) => {
  let favIndex = -1;
  for (let i = 0; i < favNews.length || i === favIndex; i++) {
    if (favNews[i].title === title) favIndex = i;
  }
  const inFavorites = favIndex >= 0 ? true : false;
  const missingImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png";

  return (
    <>
      <div className="article" style={index === 2 ? { marginLeft: "1px" } : {}}>
        <img
          src={image || missingImageUrl}
          onError={({ currentTarget }) => {
            currentTarget.src =
              "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png";
          }}
        />
        <p className="article-title">
          {title.length > 80 ? title.substring(0, 80) + "..." : title}
        </p>
        <p className="article-author">{author}</p>
        <div
          style={{
            position: "absolute",
            right: "10px",
            bottom: "5px",
            cursor: "pointer",
          }}
        >
          {inFavorites ? (
            <IconCheckedFavorite
              onClick={() => {
                favNews.splice(favIndex, 1);
                setFavNews([...favNews]);
              }}
            />
          ) : (
            <IconUncheckedFavorite
              onClick={() => {
                setFavNews([
                  ...favNews,
                  {
                    author: author,
                    title: title,
                    image: image,
                  },
                ]);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PrintNews;
