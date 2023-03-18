const express = require('express');
const app = express();
const routes = require('./routes/router.js');


app.get('/', function(req,res){
    res.send("這是首頁")
});

app.listen(3000, function(req ,res){
    console.log("It's listening on loacalhost 3000")
});

app.use(express.Router());
app.use('/routes',routes);






