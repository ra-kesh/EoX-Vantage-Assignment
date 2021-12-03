import React from "react";
import { useParams } from "react-router";

export const Publisher = ({ publishers }) => {
  const { PUBLISHER } = useParams();

  const filteredPublishers = publishers?.filter(
    (publisher) => publisher.PUBLISHER === PUBLISHER
  );

  const sortedPublishers = filteredPublishers.sort((a, b) => {
    if (a.TIMESTAMP < b.TIMESTAMP) {
      return 1;
    }
    if (a.TIMESTAMP > b.TIMESTAMP) {
      return -1;
    }
    return 0;
  });

  return (
    <>
      <div className="Header">
        <h2>Published BY : {PUBLISHER.replace(/[\\]/g, "")}</h2>
      </div>

      {sortedPublishers.map(({ ID, TITLE, TIMESTAMP, URL, CATEGORY }) => (
        <div
          className="List_Card"
          onClick={() => window.open(URL, "_blank")}
          key={ID}
        >
          <h3>{TITLE}</h3>
          <h5>Category : {CATEGORY}</h5>
          <h4>Published : {new Date(TIMESTAMP).toLocaleDateString()}</h4>
        </div>
      ))}
    </>
  );
};
