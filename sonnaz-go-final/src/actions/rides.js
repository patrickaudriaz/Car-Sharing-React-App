import uuid from "uuid"; //we import this packet to create a random id

// ADD_RIDE
// This method allow us to add a new ride
export const addRide = ({
  driver = this.state.driver,
  direction = this.state.direction,
  outside_destination = this.state.outside_destination,
  inside_destination = this.state.inside_destination,
  places = this.state.places,
  createdAt = this.state.createdAt
} = {}) => ({
  type: "ADD_RIDE",
  ride: {
    id: uuid(),
    driver,
    direction,
    outside_destination,
    inside_destination,
    places,
    createdAt
  }
});

// REMOVE_RIDE
// This method allow us to remove an existing ride
export const removeRide = ({ id } = {}) => ({
  type: "REMOVE_RIDE",
  id
});
