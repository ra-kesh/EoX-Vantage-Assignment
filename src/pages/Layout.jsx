import React, { useState } from "react";
import { useNavigate } from "react-router";

export const Layout = ({ children, publishers }) => {
  const [searchText, setSearchText] = useState("");
  // const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="Container">
      <div className="Header">
        <h1 onClick={() => navigate("/")}>News Portal</h1>
        <div
          style={{
            display: "relative",
            alignSelf: "center",
          }}
        >
          <input
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText.length > 0 && (
            <div className="Dropdown">
              <span>djedj</span>
            </div>
          )}
        </div>
      </div>

      {children}
    </div>
  );
};
