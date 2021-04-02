import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameById, resetAll } from "../../actions/index";
import "./GameDetail.css";

function GameDetail({ id }) {
  const dispatch = useDispatch();
  const videogame = useSelector((store) => store.searchVideogameById);

  useEffect(() => {
    dispatch(resetAll());
    dispatch(getVideogameById(id));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="full">
        <div className="detailsContainer">
          <h1>{videogame.name}</h1>
          <div className="details">
            <div className="image">
              <img src={videogame.image} alt={videogame.name} />
            </div>
            <div className="text">
              <h2>Description</h2>
              <p>{videogame.description}</p>
            </div>
            <div className="released">
              <h2>Released</h2>
              <p>{videogame.released}</p>
            </div>
            <div className="Genres">
              <div className="genres">
                <h2>Genres</h2>
                {videogame.genres && videogame.genres.map((g) => { return <p>{g.name}</p> })}
              </div>
            </div>
            <div className="Platforms">
              <div className="platforms">
                <h2>Platforms</h2>
                <p>{videogame.platforms}</p>
              </div>
              <div className="ratingDiv">
                <div className="rating">
                  <h2>Rating</h2>
                  <p>{videogame.rating}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameDetail;