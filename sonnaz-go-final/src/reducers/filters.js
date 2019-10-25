import moment from "moment";
import "moment/locale/fr"; //import french language
moment.locale("fr"); //use french instead english

// Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  driverName: "",
  direction: "",
  role:"",
  insideValue: "",
  outsideValue:"",
  createdAt: moment(),
  places: 2
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SET_ROLE":
      return {
        ...state,
        role: action.role
      };  
    case "SET_DRIVER_NAME":
      return {
        ...state,
        driverName: action.driverName
      };
    case "SET_DIRECTION_VALUE":
      return {
        ...state,
        direction: action.direction
      };
    case "SET_INSIDE_VALUE":
      return {
        ...state,
        insideValue: action.insideValue
      };
    case "SET_OUTSIDE_VALUE":
      return {
        ...state,
        outsideValue: action.outsideValue
      };
    case "SET_DATE_VALUE":
      return {
        ...state,
        createdAt: action.createdAt
      };
    case "SET_PLACES":
      return {
        ...state,
        places: action.places
      };
    default:
      return state;
  }
};
