import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
  }

  return (
    <div className="navBar">
      <div className="home">
        <Link to="/home">
          <h2>Home</h2>
        </Link>
      </div>
      <div className="about">
        <Link to="/about">
          <h2>About</h2>
        </Link>
      </div>
      <div className="create">
        <Link to="/create">
          <h2>Create</h2>
        </Link>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search videogame..."
          type="text"
        ></input>
        <NavLink to={`/results/${name}`}>
          <button name="name" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </NavLink>
      </form>
    </div>
  );
}


export default NavBar;