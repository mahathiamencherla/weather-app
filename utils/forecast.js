const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6865f76b36bba63bd15ecdff9d9f32d6&query=' + lat +',' + long
    //console.log(url)
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to the web service!', undefined)  
        }  else if (body.error) {
            callback('Unable to find location!', undefined) 
        } else {
            callback(undefined, {
                Description: body.current.weather_descriptions[0],
                Temperature: body.current.temperature,
                Feels_like:  body.current.feelslike
            })
        }
    })
}

module.exports = forecast