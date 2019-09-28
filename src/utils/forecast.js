const request = require('request')


const forecast = (longitude,latitude,callback)=> {

    const url = 'https://api.darksky.net/forecast/d7efcd1fac4425893068764e9b0c7696/' + longitude + ',' + latitude

    request({url:url, json: true},(err,response)=>{
    
    callback(undefined,response.body.currently.temperature)

    
    
    }

)

}

module.exports = forecast

