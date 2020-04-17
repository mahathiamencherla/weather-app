
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const request = require('request')

if(process.argv[2]) {
    geocode(process.argv[2], (error,{Latitude, Longitude, Location}) => {
        if(error) {
           return console.log('Error: ',error)
        }
        
        forecast(Latitude, Longitude, (error, {Description, Temperature, Feels_like}= {}) => {
            if(error) {
                //console.log("hello")
                return console.log('Errorfore: ', error)
            }
            console.log('Data:')
            console.log(Location)
            //console.log(forecastData)
            console.log(Description)
            console.log(Temperature + " degrees outside.")
            console.log("But feels like " + Feels_like + ' degrees.')
          })
    })
} else {
    console.log("Please provide a location!")
}


