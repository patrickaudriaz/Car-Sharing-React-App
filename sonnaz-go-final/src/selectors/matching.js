//Get matching rides
export default (rides, { insideValue, outsideValue, direction }) => {
  return rides.filter((ride) => {
    const directionMatch = ride.direction.toLowerCase().includes(direction.toLowerCase());
    const insideMatch = ride.inside_destination.toLowerCase().includes(insideValue.toLowerCase());
    const outsideMatch = ride.outside_destination.toLowerCase().includes(outsideValue.toLowerCase());
    return insideMatch && outsideMatch && directionMatch;
  });
};