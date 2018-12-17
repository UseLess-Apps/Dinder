export const SET_LOCATION = "SET_LOCATION";


export function setLocation(lat, long) {
    return {
      type: SET_LOCATION,
      lat: lat,
      long: long
    }
}