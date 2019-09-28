
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]


geocode(location,(err,data)=>{
//console.log(err)
//console.log(data.body)
forecast(data.longitude,data.latitude,(err,forcas)=>{
    //console.log(err)
    console.log(location)
    console.log(forcas)
    
    })
})








