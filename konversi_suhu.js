const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
 
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {});

app.get('/convert/celcius/:suhu', (req, res)=>{
    var celcius = req.params.suhu
    var reamur = 4/5 * celcius
    var fahrenheit = 9/5 * celcius + 32
    var kelvin = 1/1 * celcius + 273
    res.json({
                "celcius":celcius,
                "result":{
                    "reamur":reamur,
                    "fahrenheit":fahrenheit,
                    "kelvin":kelvin
                }
    })
})
  
app.get('/convert/reamur/:suhu', (req, res)=>{
    var reamur = req.params.suhu
    var celcius = 5/4 * reamur
    var fahrenheit = 9/4 * reamur + 32
    var kelvin = 5/4 * reamur + 273
    res.json({
                "reamur":reamur,
                "result":{
                    "celcius":celcius,
                    "fahrenheit":fahrenheit,
                    "kelvin":kelvin
                }
    })
}) 

app.get('/convert/kelvin/:suhu', (req, res)=>{
    var kelvin = req.params.suhu
    var celcius = 1/1 * (kelvin - 273)
    var fahrenheit = 9/5 * (kelvin - 273) + 32
    var reamur = 4/5 * (kelvin - 273)
    res.json({
                "kelvin":kelvin,
                "result":{
                    "celcius":celcius,
                    "fahrenheit":fahrenheit,
                    "reamur":reamur
                }
    })
})

app.get('/convert/fahrenheit/:suhu', (req, res)=>{
    var fahrenheit = req.params.suhu
    var celcius = 5/9 * (fahrenheit - 32)
    var reamur = 4/9 * (fahrenheit - 32)
    var kelvin = 5/9 * (fahrenheit - 32) + 273
    res.json({
                "fahrenheit":fahrenheit,
                "result":{
                    "celcius":celcius,
                    "reamur":reamur,
                    "kelvin":kelvin
                }
    })
})

app.listen(port, () => {
    console.log(`Server di ${port}`);
  });

