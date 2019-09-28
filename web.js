//const http = require('http')
const request = require('request')
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./src/utils/geocode')
const forecast = require('./src/utils/forecast')

const app = express()
const port = '5000'

const viewspath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')
//app.use(express.static('public'))
app.set('views', viewspath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)
app.use(express.static(path.join(__dirname,'public')))

//console.log(express.static(path.join(__dirname,'public')))


app.get('/',(req,res)=>{

res.render('index',{

title: "This is Home Page for Weather App"
})

})

app.get('/about',(req,res)=>{

    //res.sendFile('about')
    res.render('about',{

        title: "This is about us page",
        author: " This is created by ***"
    });
    
    
    })

    app.get('/help',(req,res)=>{

       // res.sendFile('help')
       //res.sendFile('help.html', { root: __dirname });
       res.render('help',{
        title: "This is help us page",

       })
        
        })

// app.get('/cars',(req,res)=>{

//     res.send("<h1>Cars App</h1>")
    
//     })


    app.get('/weather',(req,res)=>{

        if(!req.query.add){

          return  res.send({

                error:"Please provide the location address to find the weather"
            })
        }

        geocode(req.query.add,(err,data)=>{

            forecast(data.longitude,data.latitude,(err,forcas)=>{
                //console.log(err)
                res.send({

                    forcast: forcas,
                    address: req.query.add

                })
                console.log(req.query.add)
                console.log(forcas)
                
                })

        })
        // res.send( {

        //     Location: "Hyderabad",
        //     Weather: "It is sunny",
        //     Address: req.query.location
        // })
        
        })

    app.get('/products',(req,res)=>{
        console.log(req.query.location)
        if(!req.query.location){
        return res.send({
             error: "Please provide the location"

        })
    }
        
        res.send({
            product:[]
            

        })

    })


     app.get('*', (req,res)=>{
        res.render('404',{

            error: "This is 404 Page: No such page exits"
        })

     })   

app.listen(port, (req,res)=> {

console.log("listening to the port:",port)

})