import React, { useEffect, useState } from "react";
import "./style.css";
import { FaStreetView } from "react-icons/fa";

const WeatherApp = () => {
  const [search, setSearch] = useState("Bengaluru");
  const [data, setData] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8de77857camshe932224c8f03e5ap119487jsn668138f4ea31",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
      }
    };

    fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="background">
      <div className="input">
        <input
          className="textbox"
          type="search"
          placeholder="Enter City"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div>
        <h2 className="location">
          <FaStreetView className="icon" />
          {search}
        </h2>
        <h1 className="temp">{data?.current?.temp_c}°c</h1>
        <h1 className="temp">Humidity {data?.current?.humidity}</h1>
        <p>Last Updated {data?.current?.last_updated}</p>
      </div>
    </div>
  );
};

export default WeatherApp;
