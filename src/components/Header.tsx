import { useState } from "react";
import SearchIcon from "../assets/SearchIcon";
import "../styles/header.scss";
import HamIcon from "../assets/HamIcon";
import SideNav from "./SideNav";
import ExitIcon from "../assets/ExitIcon";
import "../styles/dropNav.scss";

const Header: React.FC<{
  setNews: (val: string) => void;
  showDropNav: boolean;
  setShowDropNav: (val: boolean) => void;
}> = ({ setNews, showDropNav, setShowDropNav }) => {
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
            onChange={(el) => setSearch(el.target.value)}
            type="text"
            placeholder="Search news"
          />
          <button onClick={() => setNews(search)}>SEARCH</button>
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
          <input type="text" placeholder="Search news" />
        </div>
        <SideNav />
        <div className="exit-icon" onClick={() => setShowDropNav(false)}>
          <ExitIcon />
        </div>
      </div>
    </>
  );
};

export default Header;
