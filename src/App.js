import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";

import { Home, Publisher, Layout } from "./pages";

function App() {
  const [publishers, setPublishers] = useState([]);

  const fetchPublishers = async () => {
    try {
      const { data } = await axios.get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json"
      );
      setPublishers(data);
      window.localStorage.setItem("publishers", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const publishersInLocalStorage = window.localStorage.getItem("publishers");

    if (publishersInLocalStorage) {
      setPublishers(JSON.parse(publishersInLocalStorage));
    } else {
      fetchPublishers();
    }
  }, []);

  return (
    <div className="App">
      <Layout publishers={publishers}>
        <Routes>
          <Route path="/" element={<Home publishers={publishers} />} />
          <Route
            path="/:PUBLISHER"
            element={<Publisher publishers={publishers} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
