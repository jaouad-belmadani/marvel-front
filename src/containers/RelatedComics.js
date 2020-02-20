import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RelatedComics = props => {
  const { id } = useParams();
  // console.log(id);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://jaouad-marvel-back.herokuapp.com/comics/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  console.log("comics=" + data);

  return (
    <div>
      {isLoading === true ? (
        <p>En cours de chargement...</p>
      ) : (
        <div>
          {data.data.results.map((result, index) => {
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

export default RelatedComics;
