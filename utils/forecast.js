const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1c68cd3367e59c1d5b27bff1f0e20596&query=' + lat +',' + long
    //console.log(url)
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to the web service!', undefined)  
        }  else if (response.body.error) {
            callback('Unable to find location!', undefined) 
        } else {
            callback(undefined, {
                Description: response.body.current.weather_descriptions[0],
                Temperature: response.body.current.temperature,
                Feels_like:  response.body.current.feelslike
            })
        }
    })
}

module.exports = forecast