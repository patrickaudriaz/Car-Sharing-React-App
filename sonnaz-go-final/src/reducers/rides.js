// Rides Reducer
const ridesReducerDefaultState = [];

export default (state = ridesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_RIDE':
      return [
        ...state,
        action.ride
      ];
    case 'REMOVE_RIDE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
