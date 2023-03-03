import React from "react";
import Navigation from "./Navigation";
import "../styles/index.scss";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="layout">{children}</div>
    </>
  );
};

export default Layout;
