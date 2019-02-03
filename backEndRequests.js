const base_url = "https://intense-sands-38411.herokuapp.com/";

export async function getCuisines(lat, long) {
    const res = await fetch(base_url+`getCuisineTypes?lat=${lat}&long=${long}`);
    const ret = await res.json();
    return ret;
}

export async function postMatches(lat, long, start, cuisines) {
    const res = await fetch(base_url+`getMatches?lat=${lat}&long=${long}&start=${start}`, 
    {
        method: 'POST',
        body: JSON.stringify({
            "cuisines": cuisines
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(res);
    const ret = await res.json();
    console.log(ret);
    
    return ret;
}