const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
 
app.use(bodyParser.urlencoded({extended:false}))
 
app.post('/bmi', (req, res)=>{
    var tinggi = req.body.tinggi
    var berat = req.body.berat
    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
    var bmi = round(berat/(tinggi * tinggi), 1)
    var status
    if (bmi >= 30.0){
        status = "Kegemukan (Obesitas)"
    }else if (bmi >= 25.0 && bmi <= 29.9) {
        status = "Kelebihan berat badan"
    }else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal (Ideal)"
    }else if (bmi < 18.5) {
        status = "Kekurangan berat badan"
    }
    res.json({
        "tinggi": tinggi,
        "berat": berat,
        "bmi" : bmi,
        "status" : status
    })
})

app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})

