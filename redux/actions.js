export const SET_LOCATION = "SET_LOCATION";
export const SET_CUISINE_ID = "SET_CUISINE_ID"
export const REMOVE_CUISINE_ID = "REMOVE_CUISINE_ID"

export function setLocation(lat, long) {
    return {
      type: SET_LOCATION,
      lat: lat,
      long: long
    }
}

export function setCuisineID(id) {
  return {
    type: SET_CUISINE_ID,
    selectedCuisine: id
  }
}

export function removeCuisineID(id) {
  return {
    type: REMOVE_CUISINE_ID,
    selectedCuisine: id
  }
}