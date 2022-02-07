const name1 = document.getElementById("cityName");
const unit = document.getElementById("select");
const inner = document.getElementById('temp');
document.getElementById("finish").addEventListener('click', last);


const UNITS = {
    'standard': 'standard',
    'metric': 'metric',
    'imperial': 'imperial'
}



function last(e) {
    e.preventDefault();
    const city = cityUrl();
    let degrees = unit.value
    city.init(`e819dbb43ffeed20feeb93509c926733`);
    city.addCity(name1.value);
    city.chooseUnits(UNITS[degrees]);
    let a = city.getCity();
    let end = fetch(a).then(res => res.json()).then(res => {
        var myObj = res;
        getCityWeather(name1.value, myObj);
        console.log(CACHE);
        inner.innerHTML = `Now : ${res.main.temp}<br> Feels like : ${res.main.feels_like}`;
    })
};



