const base_url = "https://intense-sands-38411.herokuapp.com/";

export async function getCuisines(lat, long) {
    const res = await fetch(base_url+`getCuisineTypes?lat=${lat}&long=${long}`);
    const ret = await res.json();
    return ret;
}