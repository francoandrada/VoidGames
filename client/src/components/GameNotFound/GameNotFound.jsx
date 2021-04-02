import React from "react";
import "./GameNotFound.css";
const image = `https://media4.giphy.com/media/3o7WIGxb4UDlYxZa1O/giphy.gif`;

const GameNotFound = () => {
  return (
    <div className="notFound">
      <h1>Videogame not found...</h1>
      <h3>Try with another game!</h3>
      <img className='gif' src={image} alt="Try again!"></img>
    </div>
  )
}
export default GameNotFound;

