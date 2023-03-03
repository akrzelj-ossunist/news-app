import "../styles/header.scss";

const Header: React.FC<{ setNews: (val: string) => void }> = ({ setNews }) => {
  return (
    <div className="header">
      <div className="logo">
        <p>My</p>
        <p>News</p>
      </div>
      <div className="search">
        <input
          onChange={(el) => setNews(el.target.value)}
          type="text"
          placeholder="Search news"
        />
        <button>SEARCH</button>
      </div>
    </div>
  );
};

export default Header;
