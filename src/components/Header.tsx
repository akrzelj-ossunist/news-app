import { useState } from "react";
import SearchIcon from "../assets/SearchIcon";
import "../styles/header.scss";
import HamIcon from "../assets/HamIcon";
import "../styles/dropNav.scss";
import { Link } from "react-router-dom";
import DropNav from "./DropNav";

const Header: React.FC<{
  showDropNav: boolean;
  setShowDropNav: (val: boolean) => void;
}> = ({ showDropNav, setShowDropNav }) => {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <div className="header">
        <div className="phone-nav">
          <div className="logo">
            <p>My</p>
            <p>News</p>
          </div>
          <div className="ham-icon" onClick={() => setShowDropNav(true)}>
            <HamIcon />
          </div>
        </div>
        <div className="search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input
            value={search}
            onChange={(el) => setSearch(el.target.value)}
            type="text"
            placeholder="Search news"
          />
          <Link to={`/search?q=${search}`} className="search-button">
            SEARCH
          </Link>
        </div>
      </div>
      <DropNav
        showDropNav={showDropNav}
        search={search}
        setSearch={setSearch}
        setShowDropNav={setShowDropNav}
      />
    </>
  );
};

export default Header;
