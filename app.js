const express = require('express')
const https = require('https')

const app = express()




app.get('/', function(req, res){

const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=bf683b1fc0347d23570cc1bafd3b2c6f"

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const description = weatherData.weather[0].description
      console.log(description);
    })
  })

  res.send("Serving is running and working correctly")
})





app.listen(3000, function(){
  console.log("Server is running on port 3000.");
})
