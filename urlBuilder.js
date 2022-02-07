'use strict'
function cityUrl() {
    let Parameter;
    const basicUrl = 'https://api.openweathermap.org/data/2.5/weather';

    function init(myApiKey) {
        Parameter = {
            'appid': myApiKey,
        }
    }
    //myCode = `e819dbb43ffeed20feeb93509c926733`;
    function addCity(name) {
        Parameter[`q`] = name;

    }
    function chooseUnits(unit) {
        Parameter[`units`] = unit;

    }
    function getCity() {//finish function
        let parameterKeyValues = Object.entries(Parameter);
        let keysAndValuesStr = parameterKeyValues.map(x => x[0] + "=" + x[1]);
        const str = keysAndValuesStr.join('&');
        Parameter = null;
        return basicUrl + '?' + str;

    }
    const UNITS = {
        'standard': 'standard',
        'metric': 'metric',
        'imperial': 'imperial'
    }

    return {
        unit: UNITS,
        addCity: addCity,
        chooseUnits: chooseUnits,
        getCity: getCity,
        init: init
    }






}




