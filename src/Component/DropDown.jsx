import React from "react";

const DropDown = ({ publishers, searchText }) => {
  let filteredPublishers = publishers.filter((item) => {
    const { ID, TITLE, URL, PUBLISHER, CATEGORY, HOSTNAME, TIMESTAMP } = item;

    let serachItems = {
      ID,
      TITLE,
      URL,
      PUBLISHER,
      CATEGORY,
      HOSTNAME,
      TIMESTAMP,
    };

    let x = Object.values(serachItems).join("");

    if (x.toLowerCase().includes(searchText.toLowerCase())) {
      return item;
    }
    return null;
  });
  return (
    <div className="Dropdown">
      {filteredPublishers.map(({ TITLE, URL }) => (
        <div style={{ cursor: "pointer" }}>
          <h5 onClick={() => window.open(URL, "_blank")}>{TITLE}</h5>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
