const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/people').then(function(){
    console.log('connected!')
})

const people = new Schema({
    age: Number,
    name: String,
})

const myPeople = mongoose.model('people', people);
const objectId = Schema.objectId;

app.get('/',async function(req,res){
    res.send('root')
    const mPeople = new myPeople({
        age: 15,
        name: 'jack',
    })
    await mPeople.save()
});

app.listen(3000, function(){
    console.log('Listening on 3000!!')
})
