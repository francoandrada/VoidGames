import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showVideogames, resetAll } from "../../actions/index";
import Videogame from "../Videogame/Videogame";
import Loading from "../../components/Loading/Loading";
import { Pagination } from "../../components/Pagination/Pagination";
import { Filter } from "../../components/Filter/Filter";
import { useTranslation } from "react-i18next";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();

  const filteredVideogames = useSelector((state) => state.filteredVideogames);
  const filterBy = useSelector((state) => state.filterBy);
  const loading = useSelector((state) => state.loading);
  const orderBy = useSelector((state) => state.orderBy);
  const videogames = useSelector((state) => state.videogames);
  const [t, i18n] = useTranslation("global");
  let allVideogames;

  useEffect(() => {
    dispatch(resetAll());
    dispatch(showVideogames());
    // eslint-disable-next-line
  }, []);

  // Filter and Order

  filterBy === "All" && orderBy === "Select"
    ? (allVideogames = videogames.slice())
    : (allVideogames = filteredVideogames.slice());

  //Pagination

  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(9);

  let indexLastPage = page * videogamesPerPage;
  // index of the last element of each page
  let indexFirtsPage = indexLastPage - videogamesPerPage;
  // index of the first element of each page
  let currentPage = allVideogames.slice(indexFirtsPage, indexLastPage);
  // videogames of the current page

  return (
    <div className="home">
      <>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="title">
              <h1>{t("home.title")}</h1>
              <Filter />
              <Pagination
                videogamesPerPage={videogamesPerPage}
                totalVideogames={allVideogames.length}
                paginate={paginate}
              />
              <Videogame videogames={currentPage} />
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default Home;
