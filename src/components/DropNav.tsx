import ExitIcon from "../assets/ExitIcon";
import SearchIcon from "../assets/SearchIcon";
import SideNav from "./SideNav";

const DropNav: React.FC<{
  showDropNav: boolean;
  search: string;
  setSearch: (val: string) => void;
  setShowDropNav: (val: boolean) => void;
}> = ({ showDropNav, search, setSearch, setShowDropNav }) => {
  return (
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
      </div>
      <div onClick={() => setShowDropNav(false)}>
        <SideNav />
      </div>
      <div className="exit-icon" onClick={() => setShowDropNav(false)}>
        <ExitIcon />
      </div>
    </div>
  );
};

export default DropNav;
