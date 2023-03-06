import PrintNews from "./PrintNews";

const PrintFavorites: React.FC<{
  favorites: any[];
  setFavNews: (val: any[]) => void;
}> = ({ favorites, setFavNews }) => {
  return (
    <>
      {favorites.length === 0 ? (
        <p>You have no articles in favorites.</p>
      ) : (
        favorites.map((article: any, index: any) => {
          return (
            <PrintNews
              key={index}
              author={article.name}
              title={article.title}
              image={article.image}
              setFavNews={setFavNews}
              index={index}
              favNews={favorites}
            />
          );
        })
      )}
    </>
  );
};

export default PrintFavorites;
