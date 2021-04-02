import React from "react";
import GameNotFound from "../../components/GameNotFound/GameNotFound"
import Card from "../../components/Card/Card";
import "./Videogame.css"

function Videogame(props) {
  return (
    <div className="full">
      <div className="showing">
        {props.videogames.length > 0 ? props.videogames.map((data) => (
          <Card data={data} />
        )) : <GameNotFound />
        }
      </div>
    </div>
  );
}

export default Videogame;