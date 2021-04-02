const initialState = {
  videogames: [],
  genres: [],
  searchVideogames: [],
  createVideogame: null,
  showVideogames: [],
  platforms: [],
  searchVideogameById: [],
  filteredVideogames: [],
  orderBy: "Select",
  filterBy: "All",
  loading: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: Object.values(action.payload),
      };

    case "SHOW_VIDEOGAMES":
      return {
        ...state,
        videogames: Object.values(action.payload),
      };

    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };

    case "GET_VIDEOGAME_BY_ID":
      return {
        ...state,
        searchVideogameById: action.payload,
      };

    case "SEARCH_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
      };

    case "CREATE_VIDEOGAME":
      return {
        ...state,
        createVideogame: action.payload,
      };

    case "RESET":
      return {
        ...state,
        videogames: [],
        filteredVideogames: [],
        orderBy: "Select",
        filterBy: "All",
      }

    case "LOADING_VIDEOGAME":
      return {
        ...state,
        loading: action.payload,
      };

    case "ORDER_BY_GENRE":
      return {
        ...state,
        filteredVideogames: action.payload.videogameGenre,
        filterBy: action.payload.genre,
      };

    case "ORDER_BY_CREATOR":
      return {
        ...state,
        filteredVideogames: action.payload.videogames,
        filterBy: action.payload.source,
      };

    case "ORDER_ASC_NAME":
      return {
        ...state,
        filteredVideogames: action.payload.videogamesOrder,
        orderBy: action.payload.name,
      };

    case "ORDER_ASC_RATING":
      return {
        ...state,
        filteredVideogames: action.payload.videogamesOrder,
        orderBy: action.payload.name,
      };

    case "ORDER_DESC_NAME":
      return {
        ...state,
        filteredVideogames: action.payload.videogamesOrder,
        orderBy: action.payload.name,
      };

    case "ORDER_DESC_RATING":
      return {
        ...state,
        filteredVideogames: action.payload.videogamesOrder,
        orderBy: action.payload.name,
      };

    default:
      return state;
  }
};