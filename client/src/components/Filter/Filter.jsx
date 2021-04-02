import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, orderByGenre, orderByCreator, orderAsc, orderDesc } from "../../actions/index";
import "./Filter.css";

export function Filter() {
  const dispatch = useDispatch()
  const genres = useSelector((store) => store.genres);
  // eslint-disable-next-line
  const videogames = useSelector((store) => store.videogames);

  useEffect(() => {
    dispatch(getGenres());
    // eslint-disable-next-line
  }, []);

  //Filter by Genre
  const handleFilter = (e) => {
    dispatch(orderByGenre(e.target.value));
  };

  //Filter by Creator
  const handleCreator = (e) => {
    dispatch(orderByCreator(e.target.value));
  };

  //Order
  const handleOrder = (e) => {
    console.log(e.target.value);
    if (e.target.value === "asc_name" || e.target.value === "asc_rating") {
      dispatch(orderAsc(e.target.value));
    } else {
      dispatch(orderDesc(e.target.value));
    }
  };


  return (
    <div className="filter">
      <div>
        <p>Filter by Genre</p>
        <select onChange={(e) => handleFilter(e)}>
          <option default>All</option>
          {genres.map((G) => (
            <option value={G.name}>{G.name}</option>
          ))}
        </select>
      </div>
      <div>
        <p>Filter by Creator</p>
        <select onChange={(e) => handleCreator(e)} >
          <option default>All</option>
          <option value="Api">Api videogames</option>
          <option value="Created">User-created videogames</option>
        </select>
      </div>
      <p>Order</p>
      <select onChange={(e) => handleOrder(e)}>
        <option default>Select</option>
        <option value="asc_name">Alphabetically (A-Z)</option>
        <option value="desc_name">Alphabetically (Z-A)</option>
        <option value="asc_rating">Rating (Lower-Higher)</option>
        <option value="desc_rating">Rating (Higher-Lower)</option>
      </select>
    </div>
  );
}

export default Filter;