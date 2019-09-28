const request = require('request')

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoiaml0aGVuZHJhNTMwIiwiYSI6ImNrMHF1c2RicTAxenEzY3IzbzQ5YmxsanIifQ.qNrg9zlotpBk5cByHZrZCA'
    
    request({url:url,json:true},(err, response)=>{
    
    callback(undefined,{
    
        latitude : response.body.features[0].center[1],
        longitude : response.body.features[0].center[0],
        location : response.body.features[0].place_name
        
        

    })
    //console.log(request.body.features[0].place_name)
    

    })
    
    }

    module.exports = geocode