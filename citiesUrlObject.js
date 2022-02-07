const CACHE = {};
async function getCityWeather(city, data) {
    if (CACHE[city]) {
        return CACHE[city];
    }
    else {
        CACHE[city] = new Citybuilder(data);
        return CACHE[city];
        // render data to html
    };
}



