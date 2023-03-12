import React, { useState } from "react";
import "../styles/navigation.scss";

const Navigation: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(true);
  return (
    <div
      className="nav-bar"
      style={showNav ? {} : { marginTop: "-60px", opacity: 0 }}
    >
      <div className="nav-text">
        <p className="first-text">Make MyNews your homepage</p>
        <p className="second-text">
          Every day discover what’s trending on the internet!
        </p>
      </div>
      <div className="nav-buttons">
        <button className="first-button">GET</button>
        <button className="second-button" onClick={() => setShowNav(false)}>
          No, thanks
        </button>
      </div>
    </div>
  );
};

export default Navigation;
