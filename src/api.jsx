import React, { useEffect, useState } from "react";
import axios from "axios";

export const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("YOUR_SHAZAM_API_ENDPOINT", {
          headers: {
            "X-RapidAPI-Key": "YOUR_API_KEY",
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Fetching Example</h2>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};