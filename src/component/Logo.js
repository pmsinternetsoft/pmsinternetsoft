import React from "react";

const Logo = (props) => {
  return (
    <img
      src="/images/logo.png"
      style={{
        width: "100%",
        margin: "0px 4px",
        maxWidth: "185px",
      }}
      alt="Logo"
      className="logoMain"
      {...props}
    />
  );
};

export default Logo;
