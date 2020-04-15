const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=1c68cd3367e59c1d5b27bff1f0e20596&query=37.8267,-122.4233'

request({url: url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ".")
    console.log("It is currently " + response.body.current.temperature + " degrees out.")
    console.log("It feels like " + response.body.current.feelslike + " degrees out.")
})