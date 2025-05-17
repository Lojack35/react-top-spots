import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [topspots, setTopspots] = useState([]);

  useEffect(() => {
    axios
      .get("https://ccc.helloworldbox.com/items/top_spots")
      .then((response) => response.data)
      .then((data) => setTopspots(data));
  }, []);

  return (
    <div className="container">
      <h1>San Diego Top Spots</h1>
      <p>A list of the top 30 places to see in San Diego, California.</p>
      <pre>{JSON.stringify(topspots, null, 2)}</pre>
    </div>
  );
};

export default App;
