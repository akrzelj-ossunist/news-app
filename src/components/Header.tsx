import { useState } from "react";
import SearchIcon from "../assets/SearchIcon";
import "../styles/header.scss";
import HamIcon from "../assets/HamIcon";
import SideNav from "./SideNav";
import ExitIcon from "../assets/ExitIcon";
import "../styles/dropNav.scss";
import { Link } from "react-router-dom";

const Header: React.FC<{
  showDropNav: boolean;
  setShowDropNav: (val: boolean) => void;
}> = ({ showDropNav, setShowDropNav }) => {
  const [search, setSearch] = useState("");

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
          <Link to={`/?search=${search}`} className="search-button">
            SEARCH
          </Link>
        </div>
      </div>

      <div
        className="drop-nav"
        style={showDropNav ? { translate: "0% 0%" } : { translate: "0% -100%" }}
      >
        <div className="logo">
          <p>My</p>
          <p>News</p>
        </div>
        <div className="search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input
            type="text"
            value={search}
            placeholder="Search news"
            onChange={(el) => setSearch(el.target.value)}
          />
          <Link
            to={`/?search=${search}`}
            className="search-button"
            onClick={() => setShowDropNav(false)}
          >
            SEARCH
          </Link>
        </div>
        <div onClick={() => setShowDropNav(false)}>
          <SideNav />
        </div>
        <div className="exit-icon" onClick={() => setShowDropNav(false)}>
          <ExitIcon />
        </div>
      </div>
    </>
  );
};

export default Header;
