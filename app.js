const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


if(process.argv[2]) {
    geocode(process.argv[2], (error,data) => {
        if(error) {
           return console.log('Error: ',error)
        }
        
        forecast(data.Latitude, data.Longitude, (error, forecastData) => {
            if(error) {
                return console.log('Error: ', error)
            }
            console.log('Data:')
            console.log(data.Location)
            console.log(forecastData.Description)
            console.log(forecastData.Temperature + " degrees outside.")
            console.log("But feels like " + forecastData.Feels_like + ' degrees.')
          })
    })
} else {
    console.log("Please provide a location!")
}


