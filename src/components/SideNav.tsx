import "../styles/sideNav.scss";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon";
import BusinessIcon from "../assets/BusinessIcon";
import GeneralIcon from "../assets/GeneralIcon";
import HealthIcon from "../assets/HealthIcon";
import ScienceIcon from "../assets/ScienceIcon";
import SportsIcon from "../assets/SportsIcon";
import TechIcon from "../assets/TechIcon";
import { IconUncheckedFavorite } from "../assets/FavoriteIcon";

const SideNav: React.FC = () => {
  const location = useLocation();
  const sideNavProps = [
    {
      image: (
        <IconUncheckedFavorite
          fill={location.pathname === "/favorites" ? "#BB1E1E" : "#1D1D1B"}
        />
      ),
      name: "Favorites",
      href: "/favorites",
    },
    {
      image: (
        <HomeIcon fill={location.pathname === "/" ? "#BB1E1E" : "#1D1D1B"} />
      ),
      name: "Home",
      href: "/",
    },
    {
      image: (
        <GeneralIcon
          fill={location.pathname === "/general" ? "#BB1E1E" : "#1D1D1B"}
        />
      ),
      name: "General",
      href: "/general",
    },
    {
      image: (
        <BusinessIcon
          fill={location.pathname === "/business" ? "#BB1E1E" : "#1D1D1B"}
        />
      ),
      name: "Business",
      href: "/business",
    },
    {
      image: (
        <HealthIcon
          fill={location.pathname === "/health" ? "#BB1E1E" : "#1D1D1B"}
        />
      ),
      name: "Health",
      href: "/health",
    },
    {
      image: (
        <ScienceIcon
          fill={location.pathname === "/science" ? "#BB1E1E" : "#1D1D1B"}
        />
      ),
      name: "Science",
      href: "/science",
    },
    {
      image: (
        <SportsIcon
          fill={location.pathname === "/sports" ? "#BB1E1E" : "#1D1D1B"}
        />
      ),
      name: "Sports",
      href: "/sports",
    },
    {
      image: (
        <TechIcon
          fill={location.pathname === "/technology" ? "#BB1E1E" : "#1D1D1B"}
        />
      ),
      name: "Technology",
      href: "/technology",
    },
  ];

  return (
    <div className="side-nav">
      {sideNavProps.map((prop) => {
        const design = location.pathname === prop.href ? "prop active" : "prop";
        return (
          <Link to={prop.href} key={prop.name} className={design}>
            {prop.image}
            <label className="prop-name">{prop.name}</label>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNav;
