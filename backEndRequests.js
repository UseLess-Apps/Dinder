const base_url = "http://";

export async function getCuisines(lat, long) {
    const res = await fetch(base_url+`getCuisineTypes?lat=${lat}&long=${long}`);
    const ret = await res.json();
    return ret;
}