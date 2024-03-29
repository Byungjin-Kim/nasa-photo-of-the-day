import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Nasaphoto from "./Components/Nasaphoto";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const apiKey = process.env.REACT_APP_NASA_API_KEY;
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      {data && <Nasaphoto photo={data} />}
    </div>
  );
}

export default App;
