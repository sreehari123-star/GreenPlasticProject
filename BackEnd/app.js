const express = require('express');
const PlasticData = require('./src/model/Plasticdata');
const cors = require('cors');
const jwt = require('jsonwebtoken');
var bodyparser = require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json())
username = "admin"
password = "1234"

function verifyToken(req,res,next)
{
    if(!req.headers.authorization)
    {
        return res.status(401).send("Unauthorized request")
    }
    let token = req.headers.authorization.split('')[1]
    if(token == 'null')
    {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token,'secretKey')
    console.log(payload)
    if(!payload)
    {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}


app.post('/login', (req, res)=> {
    let userData = req.body

    if(!username) {
        res.status(401).send("Invalid Username")
    } else
    if(password!== userData.password){
        res.status(401).send("Invalid Password")
    } else{
        let payload = {subject : username+password}
        let token = jwt.sign(payload,'secretKey')
        res.status(200).send(token)
    }
})
app.get('/plastics',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS");
    PlasticData.find()
            .then(function(plastics){
                res.send(plastics);
            });
});

app.post('/insert',verifytoken,function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS");
    console.log(req.body);
    var plastic = {
        Username : req.body.plastic.Username,
        Address : req.body.plastic.Address,
        Location : req.body.plastic.Location,
        PlasticMaterial : req.body.plastic.PlasticMaterial,
        Quantity : req.body.plastic.Quantity,
        Sapling : req.body.plastic.Sapling,
        Feedback : req.body.plastic.Feedback,
    }
    var plastic = new PlasticData(plastic);
    plastic.save();
});
app.listen(3000, function(){
    console.log('listening to port 3000');
});