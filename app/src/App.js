import React, { useEffect, useState } from "react";
import "./App.css";
import SingleCampaign from "./SingleCampaign";

function App() {
  const [allData, setAllData] = useState();
  const [error, setError] = useState();

  //Fetch the initial data to use to create the layout of the app
  useEffect(() => {
    fetch("https://www.plugco.in/public/take_home_sample_feed")
      .then((response) => {
        return response.json();
      })
      .then((res) => res.campaigns)
      .then(setAllData)
      .catch(setError);
  }, []);

  // Here I check if the data is made from
  return allData
    ? allData.map((data) => {
        return <SingleCampaign data={data} />;
      })
    : null;
}

export default App;
