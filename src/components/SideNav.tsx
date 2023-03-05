import "../styles/sideNav.scss";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon";
import BusinessIcon from "../assets/BusinessIcon";
import GeneralIcon from "../assets/GeneralIcon";
import HealthIcon from "../assets/HealthIcon";
import ScienceIcon from "../assets/ScienceIcon";
import SportsIcon from "../assets/SportsIcon";
import TechIcon from "../assets/TechIcon";

const SideNav: React.FC = () => {
  const location = useLocation();
  const sideNavProps = [
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
        const design =
          location.pathname === prop.href
            ? {
                color: "#BB1E1E",
                background: "white",
                opacity: 1,
                boxShadow: "0px 6px 36px rgba(0, 0, 0, 0.16)",
              }
            : {
                color: "#1D1D1B",
                background: "inherit",
                opacity: 0.6,
                boxShadow: "none",
              };
        return (
          <Link
            to={prop.href}
            key={prop.name}
            className="prop"
            style={{
              background: design.background,
              opacity: design.opacity,
              boxShadow: design.boxShadow,
            }}
          >
            {prop.image}
            <label style={{ color: design.color, opacity: design.opacity }}>
              {prop.name}
            </label>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNav;
