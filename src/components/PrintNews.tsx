import { IconUncheckedFavorite } from "../assets/FavoriteIcon";
import "../styles/news.scss";
import { isInArray } from "../utility/customFuncions";

const PrintNews: React.FC<{
  author: string;
  title: string;
  image: string;
  index?: number;
  setFavNews: (val: any[]) => void;
  favNews: any[];
}> = ({ author, title, image, index, setFavNews, favNews }) => {
  const missingImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png";
  return (
    <>
      <div className="article" style={index === 2 ? { marginLeft: "1px" } : {}}>
        <img src={image || missingImageUrl} alt={image} />
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
          <IconUncheckedFavorite
            onClick={() => {
              const status = isInArray(favNews, {
                author: author,
                title: title,
                image: image,
              });
              console.log(status, !status);
              if (!status) {
                setFavNews([
                  ...favNews,
                  { author: author, title: title, image: image },
                ]);
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PrintNews;
