import { useState } from "react";
import Navigation from "./Navigation";
import "../styles/index.scss";
import Header from "./Header";
import SideNav from "./SideNav";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [showDropNav, setShowDropNav] = useState<boolean>(false);
  return (
    <>
      <Navigation />
      <div className="layout">
        <div>
          <Header showDropNav={showDropNav} setShowDropNav={setShowDropNav} />
          <div className="content">
            <div className="hide-phone">
              <SideNav />
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
