import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchVideogames, resetAll } from "../../actions/index";
import Videogame from "../Videogame/Videogame";
import { useParams } from "react-router";
import { Pagination } from "../../components/Pagination/Pagination";
import { Filter } from "../../components/Filter/Filter";
import Loading from "../../components/Loading/Loading"
import "./Search.css";


function Search() {

  const filteredVideogames = useSelector((state) => state.filteredVideogames);
  const filterBy = useSelector((state) => state.filterBy);
  const loading = useSelector((state) => state.loading);
  const orderBy = useSelector((state) => state.orderBy);
  const videogames = useSelector((state) => state.videogames);
  let allVideogames;

  let { name } = useParams()

  // Filter - Order

  filterBy === "All" && orderBy === "Select"
    ? (allVideogames = videogames.slice())
    : (allVideogames = filteredVideogames.slice());

  //Pagination

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(9);

  useEffect(() => {
    dispatch(resetAll());
    dispatch(searchVideogames(name));
    // eslint-disable-next-line
  }, [name]);

  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  let indexLastPage = page * videogamesPerPage;
  // index of the last element of each page
  let indexFirtsPage = indexLastPage - videogamesPerPage;
  // index of the first element of each page
  let currentPage = allVideogames.slice(indexFirtsPage, indexLastPage);
  // videogames of the current page

  return (
    <div className="searcher">
      <>
        {loading ? <Loading />
          :
          <>
            <div className="results">
              <h1>Results</h1>
              <Filter />
              <Pagination
                videogamesPerPage={videogamesPerPage}
                totalVideogames={allVideogames.length}
                paginate={paginate}
              />
              <Videogame videogames={currentPage} />
            </div>
          </>
        }
      </>
    </div>
  )
};

export default Search;