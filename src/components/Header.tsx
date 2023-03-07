import { useEffect, useState } from "react";
import SearchIcon from "../assets/SearchIcon";
import "../styles/header.scss";
import HamIcon from "../assets/HamIcon";
import "../styles/dropNav.scss";
import { Link, useNavigate } from "react-router-dom";
import DropNav from "./DropNav";
import { useDebounce } from "usehooks-ts";

const Header: React.FC<{
  showDropNav: boolean;
  setShowDropNav: (val: boolean) => void;
}> = ({ showDropNav, setShowDropNav }) => {
  const [search, setSearch] = useState<string>("");
  const [phoneSearch, setPhoneSearch] = useState<string>("");
  const debouncedVal = useDebounce(phoneSearch, 250);
  const navigate = useNavigate();
  useEffect(() => {
    if (debouncedVal) navigate(`/search?q=${debouncedVal}`);
  }, [debouncedVal]);
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
          <input
            className="phone-input"
            value={phoneSearch}
            onChange={(el) => setPhoneSearch(el.target.value)}
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
        search={phoneSearch}
        setSearch={setPhoneSearch}
        setShowDropNav={setShowDropNav}
      />
    </>
  );
};

export default Header;
