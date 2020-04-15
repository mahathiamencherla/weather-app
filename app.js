const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


if(process.argv[2]) {
    geocode(process.argv[2], (error,{Latitude, Longitude, Location}) => {
        if(error) {
           return console.log('Error: ',error)
        }
        
        forecast(Latitude, Longitude, (error, {Description, Temperature, Feels_like}) => {
            if(error) {
                return console.log('Error: ', error)
            }
            console.log('Data:')
            console.log(Location)
            console.log(Description)
            console.log(Temperature + " degrees outside.")
            console.log("But feels like " + Feels_like + ' degrees.')
          })
    })
} else {
    console.log("Please provide a location!")
}


