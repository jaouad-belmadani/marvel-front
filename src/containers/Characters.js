import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jaouad-marvel-back.herokuapp.com/characters"
      );

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
                <Link className="card" to={"/relatedcomics/" + result.id}>
                  <div>
                    <div className="name">{result.name}</div>
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
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Characters;
