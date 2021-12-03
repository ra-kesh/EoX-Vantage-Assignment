import React from "react";
import { useNavigate } from "react-router";
import { removeDuplicates } from "../util";

export const Home = ({ publishers }) => {
  const navigate = useNavigate();

  let uniquePublishers = removeDuplicates(publishers, "PUBLISHER");

  return (
    <>
      <div className="Button_Container">
        {uniquePublishers?.map(({ PUBLISHER, ID }) => (
          <button
            className="toggleButton"
            key={ID}
            onClick={() => navigate(`/${encodeURI(PUBLISHER)}`)}
          >
            {PUBLISHER.replace(/[\\]/g, "")}
          </button>
        ))}
      </div>
    </>
  );
};
