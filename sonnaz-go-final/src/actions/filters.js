// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SET_ROLE
export const setRole = (role = "") => ({
  type: "SET_ROLE",
  role
});

// SET_DIRECTION_VALUE
export const setDirectionValue = direction => ({
  type: "SET_DIRECTION_VALUE",
  direction
});

// SET_DRIVER_NAME
export const setDriverName = (driverName = "") => ({
  type: "SET_DRIVER_NAME",
  driverName
});

//SET_INSIDE_VALUE
export const setInsideValue = (insideValue = "") => ({
  type: "SET_INSIDE_VALUE",
  insideValue
});

//SET_OUTSIDE_VALUE
export const setOutsideValue = (outsideValue = "") => ({
  type: "SET_OUTSIDE_VALUE",
  outsideValue
});

// SET_DATE_VALUE
export const setDateValue = createdAt => ({
  type: "SET_DATE_VALUE",
  createdAt
});

// SET_PLACES
export const setPlaces = places => ({
  type: "SET_PLACES",
  places
});
