// Get visible rides
export default (rides, { text }) => {
  return rides.filter((ride) => {
    const textMatch = ride.driver.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  });
};