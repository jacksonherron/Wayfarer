const cities = require ('./seed.json');
const db = require ('./models')

db.City.create(cities, (err, createdCites) => {
    if (err) return console.log(err);
    console.log(createdCites);
});