import React from "react";
import "../styles/notfound.scss";

const NotFound: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="not-found">
      {message === "404" ? (
        <>
          <h1 className="title">404 - Not Found</h1>
          <p className="message">The page you're looking for doesn't exist.</p>
        </>
      ) : message === "fav" ? (
        <>
          <h1 className="title">No favorites found</h1>
          <p className="message">Please add some favorites to see them here</p>
        </>
      ) : (
        <>
          <h1 className="title">No Results Found</h1>
          <p className="message">
            Sorry, we couldn't find any results for your search.
          </p>
        </>
      )}
    </div>
  );
};

export default NotFound;
