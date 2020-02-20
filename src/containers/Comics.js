import React, { useState, useEffect } from "react";

import axios from "axios";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/comics");

      setData(response.data.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      {isLoading === true ? (
        <p>En cours de chargement...</p>
      ) : (
        <div>
          {data.results.map((result, index) => {
            return (
              <div className="container" key={result.id}>
                <div className="card">
                  <div>
                    <div className="name">{result.title}</div>
                    <div className="description">{result.description}</div>
                  </div>
                  <div>
                    <img
                      className="img-character"
                      src={
                        result.thumbnail.path + "." + result.thumbnail.extension
                      }
                      alt="Marvel picture"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comics;
