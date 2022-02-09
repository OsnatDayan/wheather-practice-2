const name1 = document.getElementById("cityName");
const unit = document.getElementById("select");
const inner = document.getElementById('temp');
document.getElementById("finish").addEventListener('click', last);
const CACHE_REFRESH = 60 * 60;

const UNITS = {
    'standard': 'standard',
    'metric': 'metric',
    'imperial': 'imperial'
}



function last(e) {
    e.preventDefault();
    let name2 = name1.value;
    if (CACHE[name2] && (new Date - CACHE[name2].fetchTimestamp) / 1000 < CACHE_REFRESH) {
        return CACHE[name2];
    } else {
        const city = cityUrl();
        let degrees = unit.value
        city.init(`e819dbb43ffeed20feeb93509c926733`);
        city.addCity(name2);
        city.chooseUnits(UNITS[degrees]);
        let finish = city.getCity();
        fetch(finish).then(res => res.json()).then(res => {
            CACHE[name2] = new Citybuilder(res);
            renderCity(CACHE[name2]);

        }
        )
    }
}
function renderCity(x) {
    inner.innerHTML = `Now : ${x.main.temp}<br> Feels like : ${x.main.feels_like}`;
}


