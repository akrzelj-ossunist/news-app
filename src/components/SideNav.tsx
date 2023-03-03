import "../styles/SideNav.scss";
import home from "../assets/Home.svg";
import business from "../assets/Business.svg";
import news from "../assets/News.svg";
import health from "../assets/Health.svg";
import tech from "../assets/TV Guide.svg";
import science from "../assets/Science.svg";
import sports from "../assets/Sports.svg";
import { Link } from "react-router-dom";

const SideNav: React.FC = () => {
  const sideNavProps = [
    {
      image: home,
      name: "Home",
      href: "/",
    },
    {
      image: news,
      name: "General",
      href: "/general",
    },
    {
      image: business,
      name: "Business",
      href: "/business",
    },
    {
      image: health,
      name: "Health",
      href: "/health",
    },
    {
      image: science,
      name: "Science",
      href: "/science",
    },
    {
      image: sports,
      name: "Sports",
      href: "/sports",
    },
    {
      image: tech,
      name: "Technology",
      href: "/technology",
    },
  ];

  return (
    <div className="side-nav">
      {sideNavProps.map((prop) => {
        return (
          <Link to={prop.href} key={prop.name} className="prop">
            <img src={prop.image} />
            <label
              style={{
                fontWeight: "600",
                fontFamily: "Inter",
                fontSize: "10px",
                marginTop: "4px",
                cursor: "pointer",
                color: "#1D1D1B",
              }}
            >
              {prop.name}
            </label>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNav;
