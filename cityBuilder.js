function Citybuilder(data) {
    for (let prop in data) {
        this[prop] = data[prop];
    }
    this[`fetchTimestamp`] = new Date();
}



