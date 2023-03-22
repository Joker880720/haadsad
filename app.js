const express = require('express');
const mongoose = require('mongoose')
const app = express();
const routes = require('./routes/router.js');

mongoose.connect('mongodb://127.0.0.1:27017/Kirito1')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;

const BlogPost = new Schema({
  title: String,
  body: String,
  date: Date
});

const MyModel = mongoose.model('NervGearss', BlogPost);
const objectId = Schema.objectId;

app.get('/',async function(req,res){
    res.send("這是首頁")
    const myModel = new MyModel({
        title: "ccc",
        body: "gdger",
    })
   await myModel.save()
});

app.listen(3000, function(req ,res){
    console.log("It's listening on loacalhost 3000")
});
console.log("test")
app.use(express.Router());
app.use('/routes',routes);






