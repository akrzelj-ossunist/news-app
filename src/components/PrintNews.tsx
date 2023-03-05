import "../styles/news.scss";

const PrintNews: React.FC<{
  author: string;
  title: string;
  image: string;
}> = ({ author, title, image }) => {
  const missingImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png";
  return (
    <>
      <div className="article">
        <img src={image || missingImageUrl} alt={image} />
        <p className="article-title">
          {title.length > 80 ? title.substring(0, 80) + "..." : title}
        </p>
        <p className="article-author">{author}</p>
      </div>
    </>
  );
};

export default PrintNews;
