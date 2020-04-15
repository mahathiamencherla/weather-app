const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=1c68cd3367e59c1d5b27bff1f0e20596&query=37.8267,-122.4233'

// request({url: url, json: true}, (error, response) => {
//     if(error){
//         console.log("Unable to connect to the web service!")
//     } else if (response.body.error) {
//         console.log("Unable to find location!")
//     }
//     else {
//     console.log(response.body.current.weather_descriptions[0] + ".")
//     console.log("It is currently " + response.body.current.temperature + " degrees out.")
//     console.log("It feels like " + response.body.current.feelslike + " degrees out.")
//     }
// })

const geoURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFoYXRoaWFtZW5jaGVybGExNSIsImEiOiJjazkxZGljYzEwMnprM2ZxZTJya3FiaTQxIn0.oBP7shNESmXM5N9Ng-nIKQ&limit=1"

request({url: geoURL, json: true}, (error,response) => {
    if(error){
        console.log("Cant to connect to the location service!")
    } else if(response.body.features.length === 0){
        console.log("Cant find location! Try another search.")
    } else {
        console.log("latitude " + response.body.features[0].center[1] + "\nlongitude " + response.body.features[0].center[0])
    }
})